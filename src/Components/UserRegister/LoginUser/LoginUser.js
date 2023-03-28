import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";

import Layout from "../../../Utils/Layout";
import { LoginUsers, clearError } from "../../../redux/actions/userAction";
import Loading from "../../Layout/Loader/Loading";
import { isAuthentication } from "../../../Utils/auth";

const LoginUser = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const { errors, User, loading } = useSelector((state) => state.User);

  const handelChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginUsers(email, password));
  };

  useEffect(() => {
    if (User) {
      alert.success(User.message);
    }
  }, [alert, User]);

  useEffect(() => {
    if (errors) {
      alert.error(errors);
    }
    dispatch(clearError());
  }, [dispatch, alert, errors]);

  const redirectUser = () => {
    if (isAuthentication()) return navigate("/");
  };

  return (
    <Layout title="User Login/Online Shop | ECommerce-ShopIt">
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <div className="py-[80px] md:w-[800px] m-auto">
            {redirectUser()}
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
                    To keep connected with us please login with your personal
                    information by email address and password{" "}
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
                    onChange={handelChange}
                  />
                </span>
                <br />
                {/* Login input Password */}
                <span className="flex items-center  relative md:w-[80%] max-[767px]:w-[100%] m-auto pb-[25px]">
                  <BsFillShieldLockFill className="absolute ml-1 text-[20px]" />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    required
                    placeholder="Password"
                    className="w-[100%] pl-[36px] p-[5px] font-Roboto font-semibold"
                    onChange={handelChange}
                  />
                </span>
                {/* accept login and forget password */}
                <div className="md:w-[80%] max-[767px]:w-[100%] m-auto pb-[50px] flex flex-wrap justify-between">
                  <div>
                    <input
                      type="checkbox"
                      name="checkbox"
                      id="checkbox"
                      required
                      className="cursor-pointer"
                    />
                    <label
                      htmlFor="checkbox"
                      className="font-Roboto font-semibold ml-[5px]"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    to="/password/forgot"
                    className="font-Roboto font-semibold text-[#959595] hover:text-[#38bdf8] duration-700 hover:underline max-[380px]:mt-[25px]"
                  >
                    Forget Password?
                  </Link>
                </div>
                {/* User login and new account create */}
                <div className="md:w-[80%] max-[767px]:w-[100%] m-auto flex flex-wrap justify-between">
                  <input
                    type="submit"
                    name="submit"
                    value="Login Now"
                    className="cursor-pointer py-[10px] px-[25px] bg-[#fff] font-OpenSans font-semibold rounded-full hover:bg-[#3C8CFB] hover:text-[#fff] duration-700"
                  />
                  <Link
                    to="/register"
                    className="cursor-pointer py-[10px] px-[25px] bg-[#fff] font-OpenSans font-semibold rounded-full hover:bg-[#3C8CFB] hover:text-[#fff] duration-700 max-[380px]:mt-[25px]"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default LoginUser;
