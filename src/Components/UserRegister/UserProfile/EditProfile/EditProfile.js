import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { BsCameraFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";

import Layout from "../../../../Utils/Layout";
import userImg from "../../../../Images/User-img.jpg";
import {
  clearError,
  clearUser,
  updateProfile,
} from "../../../../redux/actions/userAction";
import { signOut, userInfo } from "../../../../Utils/auth";
import Loading from "../../../Layout/Loader/Loading";
import { API } from "../../../../Utils/config";

const EditProfile = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [photo, setPhoto] = useState();
  const [url, setUrl] = useState("");

  let { name, email } = user;

  const { errors, loading, isUpdate, update } = useSelector(
    (state) => state.Profile
  );

  const handelImageChange = (e) => {
    if (e.target.files) {
      setUrl(URL.createObjectURL(e.target.files[0]));
      setPhoto(e.target.files[0]);
    }
  };

  const handelChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.set("email", email);
    formData.set("name", name);
    formData.set("photo", photo);

    dispatch(updateProfile(userInfo().jwt, formData));
  };

  useEffect(() => {
    if (errors) {
      alert.error(errors);
    } else if (update === true) {
      alert.success(isUpdate.message);
    }
    dispatch(clearError());
  }, [dispatch, alert, errors, update, isUpdate]);

  useEffect(() => {
    if (userInfo()) {
      setUser({ ...user, name: userInfo().name, email: userInfo().email });
      setUrl(`${API}/public/images/${userInfo().photo}`);
    }
  }, []);

  useEffect(() => {
    dispatch(clearUser());
    if (update === true) {
      signOut();
      navigate("/login");
    }
  }, [dispatch, navigate, update]);

  return (
    <Layout
      title={`${
        userInfo().name
      } - Edit Profile / Online Shop | ECommerce-ShopIt`}
    >
      <div className="container">
        {loading ? (
          <>
            <Loading />{" "}
          </>
        ) : (
          <>
            <div className="py-[80px] md:w-[800px] m-auto">
              <form
                className=" bg-[#F9FAFC] rounded-[7px]"
                enctype="multipart/form-data"
                onSubmit={handelSubmit}
              >
                {/* Login User */}
                <div className="px-[25px] py-[50px]">
                  {/* Login Info */}
                  <div>
                    <h4 className="text-[25px] font-OpenSans font-bold text-center py-[10px]">
                      Welcome ShopIt :)
                    </h4>
                    <p className="text-[20px] font-Item font-medium md:px-[20px] pb-[50px]">
                      To keep connected with us please Update Profile with your
                      personal information
                      <IoIosNotificationsOutline className="text-[20px] text-[#ff004c] inline-block" />
                    </p>
                  </div>

                  {/* Login input Image */}
                  <div className="flex items-center relative sm:w-[15%] max-[500px]:w-[27%] max-[425px]:w-[32%] max-[375px]:w-[37%] max-[320px]:w-[46%] m-auto rounded-full border-[5px] border-[#959595] pl-[1px] mb-[25px]  Login_input_image">
                    {url !== "" ? (
                      <img
                        src={url}
                        alt="Img"
                        className="w-[100px] h-[100px] rounded-full cursor-pointer"
                      />
                    ) : (
                      <img
                        src={userImg}
                        alt="UserImg"
                        className="w-[100px] h-[100px] rounded-full cursor-pointer"
                      />
                    )}

                    <div
                      className="absolute bg-[#95959540] w-[100%] h-[100%] rounded-full cursor-pointer overlay_image_input"
                      onClick={() => document.querySelector("#photo").click()}
                    >
                      <BsCameraFill className="text-[30px] text-[#656161] relative left-[33px] top-[36px]" />
                    </div>

                    <input
                      type="file"
                      accept="image/*"
                      name="photo"
                      id="photo"
                      hidden
                      className="absolute"
                      onChange={handelImageChange}
                    />
                  </div>

                  {/* Login input name */}
                  <span className="flex items-center relative md:w-[80%] max-[767px]:w-[100%] m-auto">
                    <FaUserAlt className="absolute ml-1 text-[20px]" />{" "}
                    <input
                      type="text"
                      name="name"
                      value={name}
                      placeholder="User Name"
                      required
                      className="w-[100%] pl-[36px] p-[5px] font-Roboto font-semibold"
                      onChange={handelChange}
                    />
                  </span>
                  <br />
                  {/* Login input email */}
                  <span className="flex items-center relative md:w-[80%] max-[767px]:w-[100%] m-auto">
                    <MdAlternateEmail className="absolute ml-1 text-[20px]" />{" "}
                    <input
                      type="email"
                      name="email"
                      value={email}
                      required
                      minLength="10"
                      placeholder="Email Address"
                      className="w-[100%] pl-[36px] p-[5px] font-Roboto font-semibold"
                      onChange={handelChange}
                    />
                  </span>
                  <br />
                  {/* User login and new account create */}
                  <div className="md:w-[80%] max-[767px]:w-[100%] m-auto flex flex-wrap justify-between">
                    <input
                      type="submit"
                      name="submit"
                      value="Update User"
                      className="cursor-pointer py-[10px] px-[25px] bg-[#fff] font-OpenSans font-semibold rounded-full hover:bg-[#3C8CFB] hover:text-[#fff] duration-700"
                    />
                  </div>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default EditProfile;
