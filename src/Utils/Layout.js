import React, { useEffect } from "react";
import Menu from "../Components/Menu/Menu.js";
import Footer from "../Components/Footer/Footer.js";

const Layout = ({
  title = "Online Shop | ECommerce-ShopIt",
  className,
  children,
}) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <main>
      <Menu />
      <section>
        <div className={className}>{children}</div>
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
