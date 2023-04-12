import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdLaunch } from "react-icons/md";

import Layout from "../../Utils/Layout";
import Loading from "../Layout/Loader/Loading";
import { userInfo } from "../../Utils/auth";
import { GetOrder } from "../../redux/actions/PaymentAction";
import { Link } from "react-router-dom";

const Order = () => {
  const dispatch = useDispatch();

  const { loading, order } = useSelector((state) => state.Order);

  useEffect(() => {
    dispatch(GetOrder(userInfo().jwt));
  }, [dispatch]);

  return (
    <Layout
      title={`${userInfo().name}'s Orders/Online Shop | ECommerce-ShopIt`}
    >
      <div className="py-[40px] bg-[#959595]">
        <h1 className="text-[36px] font-Roboto font-bold text-[#fff] container">
          {userInfo().name} Orders
        </h1>
      </div>
      <div className="container">
        <div className="py-[80px]">
          {loading ? (
            <Loading />
          ) : (
            <>
              {order && order ? (
                <>
                  <table className="table-auto border-collapse border border-slate-500 border-spacing-2 bg-slate-900 w-[100%]">
                    <thead>
                      <tr className="text-[#fff] w-[100%] flex justify-around  py-[15px]">
                        <th className="border-b border-slate-600">Order Id</th>
                        <th className="border-b border-slate-600">Status</th>
                        <th className="border-b border-slate-600">Items Qty</th>
                        <th className="border-b border-slate-600">Amount</th>
                        <th className="border-b border-slate-600">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order &&
                        order.map((item) => (
                          <div key={item._id} className="text-[#fff]">
                            {item.cartItems &&
                              item.cartItems.map((cart) => (
                                <tr
                                  key={cart._id}
                                  className="w-[100%] flex justify-around"
                                >
                                  <td className="border py-[10px] w-[100%] border-slate-700 pl-[5px] font-Roboto font-medium text-center">
                                    {item.transaction_id
                                      ? item.transaction_id
                                      : ""}
                                  </td>
                                  <td
                                    className={
                                      item.status && item.status === "Deliver"
                                        ? "border py-[10px] w-[100%] border-slate-700 pl-[5px] font-Roboto font-medium text-center text-[green]"
                                        : "border py-[10px] w-[100%] border-slate-700 pl-[5px] font-Roboto font-medium text-center text-[red]"
                                    }
                                  >
                                    {item.status ? item.status : ""}
                                  </td>
                                  <td className="border py-[10px] w-[100%] border-slate-700 pl-[5px] font-Roboto font-medium text-center">
                                    {cart.count ? cart.count : ""}
                                  </td>
                                  <td className="border py-[10px] w-[100%] border-slate-700 pl-[5px] font-Roboto font-medium text-center">
                                    {cart.price ? cart.price : ""}
                                  </td>
                                  <td className="border py-[10px] w-[100%] border-slate-700 pl-[5px] font-Roboto font-medium flex justify-center">
                                    <Link
                                      to={`/order/${item.transaction_id}`}
                                      className="hover:text-emerald-700 duration-700"
                                      state={{
                                        address: item.address,
                                        user: item.user,
                                        cart: cart,
                                        status: item.status,
                                        transaction_id: item.transaction_id,
                                      }}
                                    >
                                      <MdLaunch className="text-[20px]" />
                                    </Link>
                                  </td>
                                </tr>
                              ))}
                          </div>
                        ))}
                    </tbody>
                  </table>
                </>
              ) : (
                <div>
                  <h1 className="text-center text-[25px] font-Roboto font-bold">
                    You have no Order!
                  </h1>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Order;
