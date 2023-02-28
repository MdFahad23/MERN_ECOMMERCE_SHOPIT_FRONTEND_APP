import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Components/Home/Home";
import ProductDetails from "../Components/Home/ProductCart/productDetails/productDetails";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product_details/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default Router;
