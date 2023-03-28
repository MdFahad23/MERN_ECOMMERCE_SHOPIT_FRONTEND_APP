import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { MdAlternateEmail } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";

import Layout from "../../../../Utils/Layout";
import Loading from "../../../Layout/Loader/Loading";
import {
  clearError,
  forgotPassword,
} from "../../../../redux/actions/userAction";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [email, setEmail] = useState("");

  const { loading, errors, message } = useSelector(
    (state) => state.ForgotPassword
  );

  const handelSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.set("email", email);

    dispatch(forgotPassword(formData));
  };

  useEffect(() => {
    if (message) {
      alert.success(message.message);
    }
  }, [alert, message]);

  useEffect(() => {
    if (errors) {
      alert.error(errors);
    }
    dispatch(clearError());
  }, [dispatch, alert, errors]);

  return (
    <Layout title="Forgot Password/Online Shop | ECommerce-ShopIt">
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <div className="py-[80px] md:w-[800px] m-auto">
            <form
              className=" bg-[#F9FAFC] rounded-[7px]"
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
                    To keep connected with us please Forgot Password with your
                    personal information by email address
                    <IoIosNotificationsOutline className="text-[20px] text-[#ff004c] inline-block" />
                  </p>
                </div>
                {/* Login input email */}
                <span className="flex items-center relative md:w-[80%] max-[767px]:w-[100%] m-auto">
                  <MdAlternateEmail className="absolute ml-1 text-[20px]" />{" "}
                  <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email Address"
                    required
                    className="w-[100%] pl-[36px] p-[5px] font-Roboto font-semibold"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </span>
                <br />
                <input
                  type="submit"
                  name="submit"
                  value="Send"
                  className="cursor-pointer py-[10px] px-[25px] bg-[#fff] font-OpenSans font-semibold rounded-full hover:bg-[#3C8CFB] hover:text-[#fff] duration-700 ml-[80px]"
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ForgotPassword;
