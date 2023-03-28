import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdLock, MdLockOpen } from "react-icons/md";

import Layout from "../../../../../Utils/Layout";
import Loading from "../../../../Layout/Loader/Loading";
import {
  clearError,
  resetPassword,
} from "../../../../../redux/actions/userAction";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { resetToken } = useParams();

  const [user, setUser] = useState({
    password: "",
    confirmPassword: "",
  });

  let { password, confirmPassword } = user;

  const { loading, errors, success } = useSelector(
    (state) => state.ForgotPassword
  );

  const handelChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.set("password", password);
    formData.set("confirmPassword", confirmPassword);

    dispatch(resetPassword(resetToken, formData));
  };

  useEffect(() => {
    if (success) {
      alert.success(success.message);
      navigate("/login");
    }
  }, [success, alert, navigate]);

  useEffect(() => {
    if (errors) {
      alert.error("Token is Invalid!");
    }
    dispatch(clearError());
  }, [alert, errors, dispatch]);

  return (
    <Layout title="Reset Password/Online Shop | ECommerce-ShopIt">
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
                      To keep connected with us please Reset your Password with
                      your personal information
                      <IoIosNotificationsOutline className="text-[20px] text-[#ff004c] inline-block" />
                    </p>
                  </div>

                  {/* Login input newPassword */}
                  <span className="flex items-center relative md:w-[80%] max-[767px]:w-[100%] m-auto">
                    <MdLockOpen className="absolute ml-1 text-[20px]" />{" "}
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
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
                      value="Reset Password"
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

export default ResetPassword;
