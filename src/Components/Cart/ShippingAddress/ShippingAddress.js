import React, { useState } from "react";
import { IoIosHome, IoIosNotificationsOutline } from "react-icons/io";
import { FaCity, FaHome } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { GiWorld } from "react-icons/gi";

import Layout from "../../../Utils/Layout";

const ShippingAddress = () => {
  const [values, setValues] = useState({
    phone: "",
    address1: "",
    address2: "",
    city: "",
    postCode: "",
    country: "",
  });
  const { phone, address1, address2, city, postCode, country } = values;

  const handelChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <Layout title="Shipping Address/Online Shop | ECommerce-ShopIt">
      <div className="py-[40px] bg-[#959595]">
        <h1 className="text-[36px] font-Roboto font-bold text-[#fff] container">
          Shipping Address
        </h1>
      </div>
      <div className="container">
        <div className="py-[80px] md:w-[800px] m-auto">
          <form className=" bg-[#F9FAFC] rounded-[7px]" onSubmit={handelSubmit}>
            {/* Login User */}
            <div className="px-[25px] py-[50px]">
              {/* Login Info */}
              <div>
                <h4 className="text-[25px] font-OpenSans font-bold text-center py-[10px]">
                  Welcome ShopIt :)
                </h4>
                <p className="text-[20px] font-Item font-medium md:px-[20px] pb-[50px]">
                  To keep connected with us please Shipping Address with your
                  personal information
                  <IoIosNotificationsOutline className="text-[20px] text-[#ff004c] inline-block" />
                </p>
              </div>

              {/* Address1 */}
              <span className="flex items-center relative md:w-[80%] max-[767px]:w-[100%] m-auto">
                <IoIosHome className="absolute ml-1 text-[20px]" />{" "}
                <input
                  type="text"
                  name="address1"
                  placeholder="Address1"
                  value={address1}
                  required
                  className="w-[100%] pl-[36px] p-[5px] font-Roboto font-semibold"
                  onChange={handelChange}
                />
              </span>
              <br />
              {/* Address2 */}
              <span className="flex items-center relative md:w-[80%] max-[767px]:w-[100%] m-auto">
                <FaHome className="absolute ml-1 text-[20px]" />{" "}
                <input
                  type="text"
                  name="address2"
                  placeholder="Address2"
                  value={address2}
                  required
                  className="w-[100%] pl-[36px] p-[5px] font-Roboto font-semibold"
                  onChange={handelChange}
                />
              </span>
              <br />
              {/* City */}
              <span className="flex items-center relative md:w-[80%] max-[767px]:w-[100%] m-auto">
                <FaCity className="absolute ml-1 text-[20px]" />{" "}
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={city}
                  required
                  className="w-[100%] pl-[36px] p-[5px] font-Roboto font-semibold"
                  onChange={handelChange}
                />
              </span>
              <br />
              {/* City */}
              <span className="flex items-center relative md:w-[80%] max-[767px]:w-[100%] m-auto">
                <MdLocationOn className="absolute ml-1 text-[20px]" />{" "}
                <input
                  type="number"
                  name="postCode"
                  placeholder="Pin Code"
                  value={postCode}
                  required
                  className="w-[100%] pl-[36px] p-[5px] font-Roboto font-semibold"
                  onChange={handelChange}
                />
              </span>
              <br />
              {/* Phone Number */}
              <span className="flex items-center relative md:w-[80%] max-[767px]:w-[100%] m-auto">
                <BsTelephoneFill className="absolute ml-1 text-[20px]" />{" "}
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  value={phone}
                  required
                  className="w-[100%] pl-[36px] p-[5px] font-Roboto font-semibold"
                  onChange={handelChange}
                />
              </span>
              <br />
              {/* Country */}
              <span className="flex items-center relative md:w-[80%] max-[767px]:w-[100%] m-auto">
                <GiWorld className="absolute ml-1 text-[20px]" />{" "}
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={country}
                  required
                  className="w-[100%] pl-[36px] p-[5px] font-Roboto font-semibold"
                  onChange={handelChange}
                />
              </span>
              <br />
              {/* profile save and checkout */}
              <div className="md:w-[80%] max-[767px]:w-[100%] m-auto flex flex-wrap justify-between">
                <input
                  type="submit"
                  name="submit"
                  value="Save and Checkout"
                  className="cursor-pointer py-[10px] px-[25px] bg-[#fff] font-OpenSans font-semibold rounded-full hover:bg-[#3C8CFB] hover:text-[#fff] duration-700"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ShippingAddress;
