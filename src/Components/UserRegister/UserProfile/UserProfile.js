import React from "react";
import { Link } from "react-router-dom";

import Layout from "../../../Utils/Layout";
import { userInfo } from "../../../Utils/auth";
import { API } from "../../../Utils/config";

const UserProfile = () => {
  return (
    <Layout
      title={`${userInfo().name} - Profile / Online Shop | ECommerce-ShopIt`}
    >
      <div className="container">
        <div className="py-[80px] md:w-[800px] m-auto text-center">
          <div className=" bg-orange-100 rounded-[7px] py-[30px]">
            <h1 className="text-[25px] font-Roboto font-semibold capitalize text-center py-[15px]">{`${
              userInfo().role
            } Profile`}</h1>
            <div className=" flex justify-center pb-[5px]">
              <img
                src={`${API}/public/images/${userInfo().photo}`}
                alt="Profile"
                className="w-[150px] h-[150px] rounded-full mr-[8px] border-[3px]"
              />
            </div>
            <Link
              to="/me/update"
              className="inline-block my-[20px] text-[#fff] rounded-2xl py-[10px] px-[15px] bg-[tomato] font-Roboto font-bold hover:bg-[#fd2e0a] duration-700"
            >
              Edit Profile
            </Link>
            <hr />
            <p className="text-[20px] font-Roboto font-semibold py-[15px] max-[425px]:text-start max-[425px]:ml-[25px]">
              Full Name: {userInfo().name}
            </p>
            <p className="text-[20px] font-Roboto font-semibold pb-[15px] max-[425px]:text-start max-[425px]:ml-[25px]">
              Email: {userInfo().email}
            </p>
            <hr />
            <div className="pt-[15px]">
              <Link
                to="/order"
                className="bg-[#006db1] font-OpenSans font-semibold text-white px-[15px] py-[5px] capitalize mr-[20px] rounded-xl inline-block cursor-pointer hover:bg-[#2e98da] duration-700 mt-2"
              >
                My Order
              </Link>
              <Link
                to="/password/update"
                className="bg-[#006db1] font-OpenSans font-semibold text-white px-[15px] py-[5px] capitalize mr-[20px] rounded-xl inline-block cursor-pointer hover:bg-[#2e98da] duration-700 mt-2"
              >
                Change Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
