import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Components/Home/Home";
import ProductDetails from "../Components/Home/ProductCart/productDetails/productDetails";
import Products from "../Components/products/products";
import Cart from "../Components/Cart/Cart";
import LoginUser from "../Components/UserRegister/LoginUser/LoginUser";
import SignIn from "../Components/UserRegister/CreateNewAccount/SignIn";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product_details/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />

        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<SignIn />} />

        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default Router;
