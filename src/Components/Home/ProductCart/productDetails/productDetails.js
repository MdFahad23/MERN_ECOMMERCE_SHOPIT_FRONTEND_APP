import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactStart from "react-rating-stars-component";
import { useAlert } from "react-alert";
import { AiOutlineRight } from "react-icons/ai";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";

import Layout from "../../../../Utils/Layout";
import { API } from "../../../../Utils/config";
import Reviews from "./Reviews/Reviews";
import { isAuthentication, userInfo } from "../../../../Utils/auth";
import { AddCartItem } from "../../../../redux/actions/CartAction";
import { clearError } from "../../../../redux/actions/userAction";
import { PutReviews } from "../../../../redux/actions/productAction";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const options = {
    edit: false,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "tomato",
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };

  const { message, success, errors } = useSelector(
    (state) => state.AddCartItem
  );
  const { messages } = useSelector((state) => state.Reviews);

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

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = {
      rating: rating,
      comment: comment,
      productId: id,
    };

    dispatch(PutReviews(userInfo().jwt, myForm));

    setOpen(false);
  };

  const handleAddCartItem = (product) => () => {
    if (isAuthentication()) {
      let { _id, jwt } = userInfo();
      const cartItem = {
        user: _id,
        product: product.id,
        price: product.price,
      };
      dispatch(AddCartItem(jwt, cartItem));
    }
  };

  useEffect(() => {
    if (message) {
      alert.show(message);
    } else if (success) {
      alert.success(success.message);
    } else if (errors) {
      alert.error(errors.message);
      dispatch(clearError());
    } else if (messages) {
      alert.success("Review Submitted Successfully");
    }
  }, [dispatch, alert, message, success, errors, messages]);

  return (
    <Layout title={`${name}/Product-Details Page`} className="bg-[#EFF0F5]">
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
                  onClick={handleAddCartItem(state)}
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
              <button
                className="inline-block my-[20px] text-[#fff] rounded-2xl py-[10px] px-[15px] bg-[tomato] font-Roboto font-bold hover:bg-[#fd2e0a] duration-700"
                onClick={submitReviewToggle}
              >
                Submit Review
              </button>
              <Dialog
                aria-labelledby="simple-dialog-title"
                open={open}
                onClose={submitReviewToggle}
              >
                <DialogTitle>Submit Review</DialogTitle>
                <DialogContent className="flex flex-col">
                  <Rating
                    onChange={(e) => setRating(e.target.value)}
                    value={rating}
                    size="large"
                  />

                  <textarea
                    className="border border-[#00000015] m-[10px] outline-none p-[15px] font-Roboto font-semibold"
                    cols="30"
                    rows="5"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </DialogContent>

                <DialogActions>
                  <Button onClick={submitReviewToggle} color="secondary">
                    Cancel
                  </Button>
                  <Button onClick={reviewSubmitHandler} color="primary">
                    Submit
                  </Button>
                </DialogActions>
              </Dialog>
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
