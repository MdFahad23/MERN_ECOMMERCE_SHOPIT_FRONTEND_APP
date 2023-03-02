import React from "react";
import { useLocation, Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import ReactStart from "react-rating-stars-component";

import Layout from "../../../../Utils/Layout";
import { API } from "../../../../Utils/config";
import Reviews from "./Reviews/Reviews";

const ProductDetails = () => {
  const options = {
    edit: false,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "tomato",
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };

  const { state } = useLocation();
  const {
    id,
    name,
    ratings,
    numOfReviews,
    price,
    quantity,
    description,
    reviews,
  } = state;

  return (
    <Layout title="Product/Details-Page" className="bg-[#EFF0F5]">
      <div className="container">
        <div>
          <div className="py-[20px]">
            <ul className="flex items-center">
              <li>
                <Link className="flex items-center text-sky-800 xl:mr-2" to="/">
                  Home
                  {
                    <AiOutlineRight className="text-[12px] xl:mt-[3px] xl:ml-[8px]" />
                  }
                </Link>
              </li>
              <li>Product</li>
            </ul>
          </div>
          <div className="lg:flex max-lg:w-[60%] max-md:w-[80%] max-sm:w-[100%] max-lg:m-[auto] max-lg:my-[50px] mt-[20px] mb-[30px] bg-[#fff]">
            <div className="lg:w-[30%] lg:h-[300px] max-lg:bg-[#f5f3ff]">
              <img
                className="lg:h-[300px] lg:w-[100%] lg:pl-[20px] lg:pt-[20px] lg:pb-[20px] lg:pr-[20px] max-lg:w-[50%] max-lg:flex max-lg:justify-center max-lg:m-[auto] max-lg:py-[20px]"
                src={`${API}/api/v1/product/photo/${id}`}
                alt={name}
              />
            </div>
            <div className="bg-[#FAFAFA] w-[100%] pl-[40px] pt-[20px]">
              <h2 className="text-[25px] font-Roboto font-black">{name}</h2>
              <hr />
              <div className="pb-[5px]">
                <ReactStart {...options} value={ratings} />
                <span className=" font-Roboto font-semibold">
                  {" "}
                  ({numOfReviews} Reviews){" "}
                </span>
              </div>
              <hr />
              <span className="font-Roboto font-bold py-[5px] inline-block">{`৳${price}`}</span>
              <div className="pt-[10px] pb-[20px]">
                {quantity < 1 ? (
                  <span className="bg-[#1da1f2] font-Roboto font-semibold text-white px-[10px] py-[5px] capitalize mr-[20px] rounded-full inline-block">
                    Out Of Stock
                  </span>
                ) : (
                  <span className="bg-[#1da1f2] font-Roboto font-semibold text-white px-[10px] py-[5px] capitalize mr-[20px] rounded-full inline-block">
                    In Stock
                  </span>
                )}
                <button
                  className="bg-[#006db1] font-OpenSans font-semibold text-white px-[15px] py-[5px] capitalize mr-[20px] rounded-xl inline-block cursor-pointer hover:bg-[#2e98da] duration-700 mt-2"
                  disabled={quantity < 1 ? true : false}
                >
                  Add To Cart
                </button>
              </div>
              <hr />
              <div className="pb-[10px]">
                <h4 className="text-[22px] font-OpenSans font-bold ">
                  Description :
                </h4>
                <p className="text-[18px] font-OpenSans font-medium">
                  {description}
                </p>
              </div>
              <hr />
              <button className="inline-block my-[20px] text-[#fff] rounded-2xl py-[10px] px-[15px] bg-[tomato] font-Roboto font-bold hover:bg-[#fd2e0a] duration-700">
                Submit Review
              </button>
            </div>
          </div>
        </div>
        <div className="pb-[30px]">
          <h1 className="text-center font-Roboto font-black uppercase text-[35px] border-b-2 border-[#ffffff96] w-[20%] max-lg:w-[30%] max-md:w-[40%] max-sm:w-[50%] m-auto">
            Reviews
          </h1>
          {<Reviews reviews={reviews} />}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
