import React from "react";

import Layout from "../../Utils/Layout";
import HeaderSlider from "./HeaderSlider/HeaderSlider";

const Home = () => {
  return (
    <Layout title="Home/Online Shop | ECommerce-ShopIt" className="lg:pt-[6px]">
      <HeaderSlider />
      <div className="container"></div>
    </Layout>
  );
};

export default Home;
