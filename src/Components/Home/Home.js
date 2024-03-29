import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";

import Layout from "../../Utils/Layout";
import HeaderSlider from "./HeaderSlider/HeaderSlider";
import ProductCart from "./ProductCart/ProductCart";
import { clearError, getProduct } from "../../redux/actions/productAction";
import Loading from "../Layout/Loader/Loading";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Layout title="Home/Online Shop | ECommerce-ShopIt" className="lg:pt-[3px]">
      <HeaderSlider />
      <div className="container">
        {loading ? <Loading /> : <ProductCart product={products} />}
      </div>
    </Layout>
  );
};

export default Home;
