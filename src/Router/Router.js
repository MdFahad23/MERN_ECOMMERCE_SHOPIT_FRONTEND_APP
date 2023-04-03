import React from "react";
import { Routes, Route } from "react-router-dom";

import Protected from "./ProtectedRoutes";
import UnProtected from "./UnProtectedRoutes";
import Home from "../Components/Home/Home";
import ProductDetails from "../Components/Home/ProductCart/productDetails/productDetails";
import Products from "../Components/products/products";
import Cart from "../Components/Cart/Cart";
import LoginUser from "../Components/UserRegister/LoginUser/LoginUser";
import SignIn from "../Components/UserRegister/CreateNewAccount/SignIn";
import UserProfile from "../Components/UserRegister/UserProfile/UserProfile";
import EditProfile from "../Components/UserRegister/UserProfile/EditProfile/EditProfile";
import UpdatePassword from "../Components/UserRegister/UserProfile/EditProfile/UpdatePassword/UpdatePassword";
import ForgotPassword from "../Components/UserRegister/LoginUser/forgotPassword/forgotPassword";
import ResetPassword from "../Components/UserRegister/LoginUser/forgotPassword/ResetPassword/ResetPassword";
import ShippingAddress from "../Components/Cart/ShippingAddress/ShippingAddress";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product_details/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />

        <Route
          path="/login"
          element={
            <UnProtected>
              {" "}
              <LoginUser />{" "}
            </UnProtected>
          }
        />
        <Route
          path="/register"
          element={
            <UnProtected>
              {" "}
              <SignIn />
            </UnProtected>
          }
        />
        <Route
          path="/password/forgot"
          element={
            <UnProtected>
              {" "}
              <ForgotPassword />
            </UnProtected>
          }
        />
        <Route
          path="/password/reset/:resetToken"
          element={
            <UnProtected>
              <ResetPassword />
            </UnProtected>
          }
        />

        <Route
          path="/user/profile"
          element={
            <Protected>
              <UserProfile />{" "}
            </Protected>
          }
        />

        <Route
          path="/me/update"
          element={
            <Protected>
              <EditProfile />{" "}
            </Protected>
          }
        />

        <Route
          path="/update/password"
          element={
            <Protected>
              <UpdatePassword />{" "}
            </Protected>
          }
        />

        <Route
          path="/Cart"
          element={
            <Protected>
              {" "}
              <Cart />
            </Protected>
          }
        />
        <Route
          path="/shipping-address"
          element={
            <Protected>
              {" "}
              <ShippingAddress />
            </Protected>
          }
        />
      </Routes>
    </>
  );
};

export default Router;
