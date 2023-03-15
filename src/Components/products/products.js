import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "react-js-pagination";
import { Slider, Box, Typography } from "@mui/material";

import Layout from "../../Utils/Layout";
import {
  getProduct,
  getProducts,
  getCategory,
} from "../../redux/actions/productAction";
import Loading from "../Layout/Loader/Loading";
import ProductsCart from "./productsCart/productsCart";

const Products = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 200000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const { products, loading, productCount, resultPerPage } = useSelector(
    (state) => state.products
  );

  const { Category } = useSelector((state) => state.Category);

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  useEffect(() => {
    if (state != null) {
      dispatch(
        getProduct(state.keyword, currentPage, price, category, ratings)
      );
    } else {
      dispatch(getProducts(currentPage, price, category, ratings));
    }
  }, [dispatch, state, currentPage, price, category, ratings]);

  return (
    <Layout title="Products/Online Shop | ECommerce-ShopIt">
      <div className="container">
        <>
          {/* Show Products */}
          <div className=" text-center font-Roboto font-black uppercase text-[35px] border-b-2 mt-[50px] border-[#ffffff96] lg:w-[20%] md:w-[30%] sm:w-[40%] m-auto max-2xl:w-[50%] max-sm:w-[80%]">
            <h3>Product</h3>
          </div>

          {/* Filter and Product */}
          <div className="grid grid-cols-12 max-lg:grid-cols-3 gap-8">
            <div className="col-span-2 max-lg:col-span-1 mt-[50px]">
              {/* Filter Price Slider */}
              <div>
                <p className="text-[18px] font-Roboto font-semibold">Price :</p>
                <Box>
                  <Slider
                    value={price}
                    onChange={priceHandler}
                    valueLabelDisplay="auto"
                    aria-label="range-slider"
                    min={0}
                    max={200000}
                    disableSwap
                  />
                </Box>
              </div>

              {/* Filter Category */}
              <div>
                <p className="text-[18px] font-Roboto font-semibold mt-[8px]">
                  Category :
                </p>
                <ul>
                  {Category
                    ? Category.map((category) => (
                        <li
                          key={category._id}
                          className="cursor-pointer font-Roboto font-medium pt-[5px] sm:pl-[8px] hover:text-[#ff9900] hover:duration-700"
                          onClick={() => setCategory(category._id)}
                        >
                          {category.name}
                        </li>
                      ))
                    : ""}
                </ul>
              </div>

              {/* Filter Ratings */}
              <div className="mt-[12px]">
                <fieldset className=" border border-[#0000007c] px-[10px] py-[5px]">
                  <Typography component="legend">Ratings Above</Typography>
                  <Slider
                    value={ratings}
                    onChange={(e, newRating) => {
                      setRatings(newRating);
                    }}
                    aria-label="Temperature"
                    valueLabelDisplay="auto"
                    min={0}
                    max={5}
                  />
                </fieldset>
              </div>
            </div>

            {/* Show All Products for Cart */}
            <div className="col-span-10 max-lg:col-span-2">
              {loading ? <Loading /> : <ProductsCart product={products} />}
            </div>
          </div>

          {/* Show Pagination */}
          <div className="flex justify-center">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resultPerPage}
              totalItemsCount={productCount}
              onChange={setCurrentPageNo}
              nextPageText="Next"
              prevPageText="Prev"
              firstPageText="1st"
              lastPageText="Last"
              itemClass="page-item"
              linkClass="page-link"
              activeClass="pageItemActive"
              activeLinkClass="pageLinkActive"
            />
          </div>
        </>
      </div>
    </Layout>
  );
};

export default Products;
