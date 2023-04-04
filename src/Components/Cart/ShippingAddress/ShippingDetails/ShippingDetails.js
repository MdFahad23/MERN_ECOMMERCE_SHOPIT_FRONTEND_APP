import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Layout from "../../../../Utils/Layout";
import { userInfo } from "../../../../Utils/auth";
import { GetShippingAddress } from "../../../../redux/actions/CartAction";

const ShippingDetails = () => {
  const dispatch = useDispatch();

  const { address } = useSelector((state) => state.ShippingAddress);
  const { cart } = useSelector((state) => state.AddCartItem);

  const totalAmount = () => {
    const arr = cart && cart.map((item) => item.price * item.count);
    const sum = arr && arr.reduce((a, b) => a + b, 0);
    return sum;
  };

  useEffect(() => {
    dispatch(GetShippingAddress(userInfo().jwt));
  }, [dispatch]);

  return (
    <Layout title="Shipping Details/Online Shop | ECommerce-ShopIt">
      <div className="py-[40px] bg-[#959595]">
        <h1 className="text-[36px] font-Roboto font-bold text-[#fff] container">
          Shipping Details!
        </h1>
      </div>
      <div className="container">
        {address.phone &&
        address.address1 &&
        address.address2 &&
        address.city &&
        address.country &&
        address.postCode ? (
          <>
            <div className="grid grid-cols-3 lg:gap-7 py-[80px]">
              <div className="col-span-2 border-2 border-[#959595] bg-[#fff] rounded-[5px]">
                <div>
                  <h4 className="text-[22px] text-[#000000] font-OpenSans font-semibold bg-[#F9FAFC] border-b-2 border-[#959595] p-[10px]">
                    Shipping Details
                  </h4>
                  <div className="py-[20px] pl-[10px] bg-[#fff] text-[18px] font-Roboto font-semibold">
                    <p>To,</p>
                    <b>{userInfo().name}</b>
                    {address ? (
                      <>
                        <p>Phone : {address.phone}</p>
                        <p>{address.address1}</p>
                        <p>{address.address2}</p>
                        <p>
                          {address.city} - {address.postCode}, {address.country}
                        </p>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="bg-[#fff] pt-[50px] border-r border-r-[#959595]">
                  {cart &&
                    cart.map((item) => (
                      <div key={item._id}>
                        <p className="border-b py-[10px] pl-[10px] text-[18px] font-Roboto font-medium">
                          {item.product && item.product.name} x Count{" "}
                          {item.count} = &#2547; {item.price * item.count}
                        </p>
                      </div>
                    ))}
                  <div className="bg-[#F9FAFC] px-[10px] py-[20px] flex justify-between text-[20px] font-Roboto font-semibold">
                    <span>
                      <b>Order Total </b>
                    </span>
                    <span>&#2547; {totalAmount()}</span>
                  </div>
                </div>
                <div>
                  <Link
                    to="/payment"
                    className="inline-block my-[20px] text-[#fff] rounded-[7px] py-[10px] px-[15px] bg-[tomato] font-Roboto font-bold hover:bg-[#fd2e0a] duration-700"
                  >
                    Make Payment
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
};

export default ShippingDetails;
