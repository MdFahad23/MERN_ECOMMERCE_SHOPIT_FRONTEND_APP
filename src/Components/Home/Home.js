import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Layout from "../../Utils/Layout";
import HeaderSlider from "./HeaderSlider/HeaderSlider";
import Product from "./ProductCart/Product";
import { getProduct } from "../../redux/actions/productAction";
import Loading from "../Layout/Loader/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Layout title="Home/Online Shop | ECommerce-ShopIt" className="lg:pt-[3px]">
      <HeaderSlider />
      <div className="container">
        {loading ? <Loading /> : <Product product={products} />}
      </div>
    </Layout>
  );
};

export default Home;
