import React from "react";
import ReactStart from "react-rating-stars-component";
import { Link } from "react-router-dom";

import { API } from "../../../Utils/config";

const Product = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "tomato",
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };

  return (
    <div className=" lg:pt-[50px] lg:pb-[50px] max-lg:pt-[60px] max-lg:pb-[60px]">
      <div className=" text-center font-Roboto font-black uppercase text-[35px] border-b-2 border-[#ffffff96] lg:w-[20%] md:w-[30%] sm:w-[40%] m-auto max-2xl:w-[50%] max-sm:w-[80%]">
        <h3>Product</h3>
      </div>
      <div className="grid grid-cols-12 max-[500px]:grid-cols-1 xl:gap-2 lg:gap-5 md:gap-8 sm:gap-4 max-2xl:gap-8 sm:mt-[60px] max-2xl:mt-[50px]">
        {product &&
          product.map((product) => {
            let photoUrl = `${API}/api/v1/product/photo/${product._id}`;
            return (
              <div
                key={product._id}
                className="xl:col-span-2 lg:col-span-3 sm:col-span-4 h-[380px] bg-[#fff] border-1 border-[#fffdfd00] shadow-cart_shadow cursor-pointer max-lg:col-span-6"
              >
                <Link
                  to={`/product_details/${product._id}`}
                  state={{
                    id: product._id,
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    quantity: product.quantity,
                    ratings: product.ratings,
                    numOfReviews: product.numOfReviews,
                    reviews: product.reviews,
                  }}
                >
                  <div className="h-[220px] xl:pt-4">
                    <img
                      className="h-[200px] inline-block xl:w-[100%] max-xl:w-[70%] max-xl:m-[auto] max-xl:flex max-xl:pt-[5px] max-[500px]:w-[100%] max-[500px]:flex-none max-[500px]:m-[none]"
                      src={photoUrl}
                      alt={product.name}
                    />
                  </div>
                  <div className="xl:pt-[25px] xl:pr-[3px] xl:pb-[3px] xl:pl-[10px] max-xl:pl-[20px] inline-block">
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
