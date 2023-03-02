import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Layout from "../../Utils/Layout";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../redux/actions/productAction";
import Loading from "../Layout/Loader/Loading";
import Product from "../Home/ProductCart/Product";

const Products = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();

  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (state != null) {
      dispatch(getProduct(state.keyword));
    } else {
      dispatch(getProduct());
    }
  }, [dispatch, state]);

  return (
    <Layout title="Products/Online Shop | ECommerce-ShopIt">
      <div className="container">
        {loading ? <Loading /> : <Product product={products} />}
      </div>
    </Layout>
  );
};

export default Products;
