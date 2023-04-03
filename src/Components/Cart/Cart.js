import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { RiDeleteBin5Fill } from "react-icons/ri";

import Layout from "../../Utils/Layout";
import {
  DeleteCartItem,
  GetCartItem,
  UpdateCartItem,
} from "../../redux/actions/CartAction";
import { userInfo } from "../../Utils/auth";
import { API } from "../../Utils/config";
import Loading from "../Layout/Loader/Loading";
import { clearError } from "../../redux/actions/userAction";

const Cart = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { cart, loading, updateSuccess, updateMessage, errors } = useSelector(
    (state) => state.AddCartItem
  );

  const loadItem = () => {
    dispatch(GetCartItem(userInfo().jwt));
  };

  useEffect(() => {
    loadItem();
    if (updateMessage) {
      alert.show(updateMessage);
    } else if (updateSuccess) {
      alert.success(updateSuccess.message);
    } else if (errors) {
      alert.error(errors.message);
      dispatch(clearError());
    }
  }, [alert, updateMessage, updateSuccess, errors, clearError, dispatch]);

  const increaseItem = (item) => () => {
    if (item.count === 5) return;
    const cartItem = {
      ...item,
      count: item.count + 1,
    };
    dispatch(UpdateCartItem(userInfo().jwt, cartItem));
    if (updateSuccess !== null) return loadItem();
  };

  const decreaseItem = (item) => () => {
    if (item.count === 1) return;
    const cartItem = {
      ...item,
      count: item.count - 1,
    };
    dispatch(UpdateCartItem(userInfo().jwt, cartItem));
    if (updateSuccess !== null) return loadItem();
  };

  const totalAmount = () => {
    const arr = cart && cart.map((item) => item.price * item.count);
    const sum = arr && arr.reduce((a, b) => a + b, 0);
    return sum;
  };

  const totalCount = () => {
    const arr = cart && cart.map((item) => item.count);
    const sum = arr && arr.reduce((a, b) => a + b, 0);
    return sum;
  };

  const removeCartItem = (item) => () => {
    if (!window.confirm("Delete Item?")) return;
    dispatch(DeleteCartItem(userInfo().jwt, item._id));
    if (updateSuccess !== null) return loadItem();
  };

  return (
    <Layout title="Cart/Online Shop | ECommerce-ShopIt">
      <div className="py-[40px] bg-[#959595]">
        <h1 className="text-[36px] font-Roboto font-bold text-[#fff] container">
          Shopping Cart
        </h1>
      </div>
      <div className="bg-[#fff] pt-[60px] pb-[100px]">
        <div className="container">
          {loading ? (
            <Loading />
          ) : (
            <div>
              <h4 className="text-[18px] font-Roboto font-medium">
                {cart && cart.length}Product in Cart
              </h4>
              <div className="grid grid-cols-3">
                <div className="col-span-2 max-lg:col-span-3 pt-1">
                  <table className="table-auto border-collapse border border-slate-500 border-spacing-2 bg-slate-900 w-[100%]">
                    <thead>
                      <tr className="text-[#fff]">
                        <th className="border-b border-slate-600 p-2">Image</th>
                        <th className="border-b border-slate-600 p-2">
                          Product Name
                        </th>
                        <th className="border-b border-slate-600 p-2">
                          Quantity
                        </th>
                        <th className="border-b border-slate-600 p-2">Price</th>
                        <th className="border-b border-slate-600 p-2">
                          Remove
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart &&
                        cart.map((item) => (
                          <tr key={item._id} className="text-[#fff]">
                            <td className="py-[5px] border border-slate-700">
                              <img
                                src={`${API}/api/v1/product/photo/${item.product._id}`}
                                alt="P"
                                className="w-[50px] ml-[10px]"
                              />
                            </td>
                            <td className="border border-slate-700 pl-[5px] font-Roboto font-medium">
                              {item.product ? item.product.name : ""}
                            </td>
                            <td className="border border-slate-700 lg:pl-[60px] max-lg:pl-[20px]">
                              <button
                                className="inline-block text-[#fff] rounded-[7px] px-[10px] bg-[tomato] font-Roboto font-bold hover:bg-[#fd2e0a] duration-700 mr-[5px]"
                                onClick={decreaseItem(item)}
                              >
                                -
                              </button>
                              {item.count}
                              <button
                                className="bg-[#006db1] font-OpenSans font-semibold text-white rounded-[7px] px-[10px] capitalize inline-block cursor-pointer hover:bg-[#2e98da] duration-700 ml-2"
                                onClick={increaseItem(item)}
                              >
                                +
                              </button>
                            </td>
                            <td className="border border-slate-700 pl-[10px] font-Roboto font-medium">
                              ৳ {item.price * item.count}{" "}
                            </td>
                            <td className="border border-slate-700 pl-[60px]">
                              <button onClick={removeCartItem(item)}>
                                <RiDeleteBin5Fill className="text-[18px]" />
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className="col-span-1">
                  <div className="pl-[30px]">
                    <h3 className="text-[20px] font-Roboto font-semibold">
                      Total:
                    </h3>
                    <ul>
                      <li className="text-[14px] my-[12px] font-normal text-[#686f7a]">
                        Total Price{" "}
                        <span className="float-right">
                          &#2547; {totalAmount()}
                        </span>
                      </li>
                      <li className="text-[14px] mb-[12px] font-normal text-[#686f7a]">
                        Count{" "}
                        <span className="float-right">{totalCount()}</span>
                      </li>
                      <hr />
                      <li>
                        <Link
                          to="/"
                          className="bg-[#006db1] font-OpenSans font-semibold text-white rounded-[7px] px-[15px] py-[10px] capitalize inline-block cursor-pointer hover:bg-[#2e98da] duration-700 my-[15px]"
                        >
                          Continue Shopping
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/shipping-address"
                          className="inline-block text-[#fff] rounded-[7px] px-[15px] py-[10px] bg-[tomato] font-Roboto font-bold hover:bg-[#fd2e0a] duration-700"
                        >
                          Proceed To Checkout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
