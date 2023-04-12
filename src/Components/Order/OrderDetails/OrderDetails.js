import React from "react";
import { useLocation } from "react-router-dom";

import Layout from "../../../Utils/Layout";
import { userInfo } from "../../../Utils/auth";

const OrderDetails = () => {
  const { state } = useLocation();

  const { address, user, status, cart, transaction_id } = state;

  return (
    <Layout
      title={`${
        userInfo().name
      }'s Orders Details Page/Online Shop | ECommerce-ShopIt`}
    >
      <div className="py-[40px] bg-[#959595]">
        <h1 className="text-[36px] font-Roboto font-bold text-[#fff] container">
          Orders Details
        </h1>
      </div>
      <div className="container">
        <div className="py-[80px]">
          <div className="bg-[#FAFAFA] rounded">
            <h2 className="text-[25px] font-Roboto font-semibold p-[15px] text-[#ff5100]">
              Order #{transaction_id}{" "}
            </h2>
            <hr />
            <div className="p-[15px]">
              <h2 className="text-[22px] font-OpenSans font-bold py-[10px]">
                Address :
              </h2>
              <p>Name: {user.name}</p>
              <p>Phone: {address.phone}</p>
              <p>
                Address: {address.address1} - {address.address2}/{address.city},{" "}
                {address.country}
              </p>
            </div>
            <hr />
            <div className="p-[15px]">
              <h2 className="text-[22px] font-OpenSans font-bold py-[10px]">
                Payment
              </h2>
              <p>PAID</p>
              <p>Amount: {cart.price}</p>
            </div>
            <hr />
            <div className="p-[15px]">
              <h2 className="text-[22px] font-OpenSans font-bold py-[10px]">
                Order Status
              </h2>
              <p>{status}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderDetails;
