import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdLock, MdLockOpen, MdVpnKey } from "react-icons/md";

import Layout from "../../../../../Utils/Layout";
import { signOut, userInfo } from "../../../../../Utils/auth";
import {
  updatePassword,
  clearError,
  clearUser,
} from "../../../../../redux/actions/userAction";
import Loading from "../../../../Layout/Loader/Loading";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  let { oldPassword, newPassword, confirmPassword } = user;

  const { errors, loading, isUpdate, update } = useSelector(
    (state) => state.Profile
  );

  const handelChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = {
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };
    dispatch(updatePassword(userInfo().jwt, formData));
  };

  useEffect(() => {
    if (errors) {
      alert.error(errors);
    } else if (update === true) {
      alert.success("Successfully Password Update!");
    }
    dispatch(clearError());
  }, [dispatch, alert, errors, update, navigate]);

  useEffect(() => {
    dispatch(clearUser());
    if (update === true) {
      signOut();
      navigate("/login");
    }
  }, [dispatch, navigate, update]);

  return (
    <Layout title="Update Password">
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
                      To keep connected with us please Update your Password with
                      your personal information
                      <IoIosNotificationsOutline className="text-[20px] text-[#ff004c] inline-block" />
                    </p>
                  </div>

                  {/* Login input OldPassword */}
                  <span className="flex items-center relative md:w-[80%] max-[767px]:w-[100%] m-auto">
                    <MdVpnKey className="absolute ml-1 text-[20px]" />{" "}
                    <input
                      type="password"
                      name="oldPassword"
                      placeholder="Old Password"
                      required
                      className="w-[100%] pl-[36px] p-[5px] font-Roboto font-semibold"
                      onChange={handelChange}
                    />
                  </span>
                  <br />
                  {/* Login input newPassword */}
                  <span className="flex items-center relative md:w-[80%] max-[767px]:w-[100%] m-auto">
                    <MdLockOpen className="absolute ml-1 text-[20px]" />{" "}
                    <input
                      type="password"
                      name="newPassword"
                      placeholder="New Password"
                      required
                      className="w-[100%] pl-[36px] p-[5px] font-Roboto font-semibold"
                      onChange={handelChange}
                    />
                  </span>
                  <br />
                  {/* Login input Confirm Password */}
                  <span className="flex items-center relative md:w-[80%] max-[767px]:w-[100%] m-auto">
                    <MdLock className="absolute ml-1 text-[20px]" />{" "}
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      required
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
                      value="Update Password"
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

export default UpdatePassword;
