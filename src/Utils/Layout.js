import React, { useEffect } from "react";
import Menu from "../Components/Menu/Menu.js";

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
    </main>
  );
};

export default Layout;
