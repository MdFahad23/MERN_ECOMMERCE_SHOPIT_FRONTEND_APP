import React from "react";
import ReactStart from "react-rating-stars-component";
import { Link } from "react-router-dom";

import { API } from "../../../Utils/config";

const options = {
  edit: false,
  color: "rgba(20, 20, 20, 0.1)",
  activeColor: "tomato",
  isHalf: true,
  size: window.innerWidth < 600 ? 20 : 25,
};

const Product = ({ product }) => {
  return (
    <div className=" lg:pt-[50px] lg:pb-[50px]">
      <div className=" text-center font-Roboto font-black uppercase lg:text-[35px] border-b-2 border-[#ffffff96] lg:w-[20%] m-auto">
        <h3>Product</h3>
      </div>
      <div className="grid grid-cols-12 xl:gap-2 md:gap-3 lg:mt-[60px]">
        {product &&
          product.map((product) => {
            let photoUrl = `${API}/api/v1/product/photo/${product._id}`;
            return (
              <div
                key={product._id}
                className="xl:col-span-2 md:col-span-3 h-[380px] bg-[#fff] border-1 border-[#fffdfd00] shadow-cart_shadow cursor-pointer"
              >
                <Link to="/">
                  <div className="h-[220px] xl:pt-4 inline-block">
                    <img
                      style={{ height: "200px" }}
                      src={photoUrl}
                      alt={product.name}
                    />
                  </div>
                  <div className="xl:pt-[25px] xl:pr-[3px] xl:pb-[3px] xl:pl-[10px] inline-block">
                    <p className=" font-OpenSans font-semibold">
                      {product.name}
                    </p>
                    <div>
                      <ReactStart {...options} value={product.ratings} />{" "}
                      <span className=" font-Roboto font-normal">
                        {" "}
                        ({product.numOfReviews} Reviews){" "}
                      </span>
                    </div>
                    <span className="font-Roboto font-bold text-[#ff0000]">{`৳${product.price}`}</span>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Product;
