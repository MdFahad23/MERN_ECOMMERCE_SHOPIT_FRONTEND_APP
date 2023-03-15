import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import {
  AiOutlineLogin,
  AiOutlineShoppingCart,
  AiFillHome,
  AiOutlineLogout,
} from "react-icons/ai";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdProductionQuantityLimits } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// Menu Function
const Menu = () => {
  const [Menu, setMenu] = useState(false);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handelMenu = () => setMenu(!Menu);

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`, {
        state: { keyword },
      });
    } else {
      navigate("/products");
    }
  };

  return (
    <>
      <nav className=" shadow-3xl bg-[#ffffffa6] pt-[10px] pb-[10px]">
        <div className="container">
          <div className="flex justify-between items-center">
            {/* Nav Logo */}
            <div>
              <NavLink to="/">
                <h2 className="text-[25px] font-DancingScript font-extrabold text-[#ff9900]">
                  SHOPIT
                </h2>
              </NavLink>
            </div>
            {/* Nav Menu List */}
            <div>
              <ul className="flex items-center">
                {/* Nav Menu Item */}
                <div className="lg:flex items-center lg:mr-[80px] max-sm:hidden">
                  <div className="mt-1 text-[20px] flex items-center">
                    {/* Main List */}
                    <li className="lg:text-[18px] mr-[25px] font-Roboto font-medium max-lg:hidden">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    {/* Main List */}
                    <li className="lg:text-[18px] mr-[25px] font-Roboto font-medium max-lg:hidden">
                      <NavLink to="/products">Products</NavLink>
                    </li>
                    {/* Main List */}
                    <li className="lg:mr-[25px] lg:text-[22px] max-lg:hidden">
                      <NavLink to="/cart">
                        <AiOutlineShoppingCart />
                      </NavLink>
                    </li>
                    {/* Search bar */}
                    <li className="cursor-pointer">
                      <span className="flex items-center max-lg:mr-[30px] bg-[#F9F9F9]">
                        <div className="border-l-2 border-l-[#fc8529]">
                          <input
                            type="text"
                            placeholder="Search in Site"
                            className=" font-Mulish font-light text-[18px] ml-2 bg-[#F9F9F9]"
                            name="keyword"
                            onChange={(e) => setKeyword(e.target.value)}
                          />
                        </div>
                        <span
                          className="border p-[5px] text-[#ff9900]"
                          onClick={searchSubmitHandler}
                        >
                          <BsSearch />
                        </span>
                      </span>
                    </li>
                  </div>
                </div>
                {/* User Details */}
                <div className="mt-1 text-[22px]">
                  {/* Main List */}
                  <li>
                    <div
                      onClick={handelMenu}
                      className="cursor-pointer flex items-center bg-[#f7f8fa] shadow-4xl pl-[20px] pr-[20px] rounded-2xl hover:bg-[#E6E6E6] hover:border-[#DEDFE0] duration-700 delay-200 relative"
                    >
                      <div className="pt-[5px] pb-[5px]">
                        <span className="mr-[8px] border rounded-full pl-[5px] pr-[5px] bg-[#7dd3fc] text-[#fff]">
                          M
                        </span>
                      </div>
                      {Menu ? (
                        <span>
                          <IoMdArrowDropup />{" "}
                        </span>
                      ) : (
                        <span>
                          <IoMdArrowDropdown />
                        </span>
                      )}
                    </div>
                    {/* Nav Toggle List */}
                    <div
                      className={
                        Menu
                          ? "absolute z-10 bg-[#fff] dropdown_menu_right block visible"
                          : "absolute bg-[#fff] dropdown_menu_right hidden opacity-0"
                      }
                    >
                      <ul className="w-[300px]">
                        {/* List */}
                        <li className="flex items-center border-b-[1px] pl-[5px] py-[15px]">
                          <div>
                            <span className="mr-[8px] border rounded-full py-[10px] bg-[#7dd3fc] text-[#fff] px-[15px]">
                              M
                            </span>
                          </div>
                          <div className=" leading-[1]">
                            <span className="text-[15px]">Md Fahad</span>
                            <br />
                            <span className="text-[15px]">
                              fahadbdctglh8@gmail.com
                            </span>
                          </div>
                        </li>
                        {/* List */}
                        <li className="nav_list lg:hidden">
                          <NavLink to="/" className="nav_link">
                            <AiFillHome className="mr-[8px]" />
                            Home
                          </NavLink>
                        </li>
                        {/* List */}
                        <li className="nav_list lg:hidden">
                          <NavLink to="/products" className="nav_link">
                            <MdProductionQuantityLimits className="mr-[8px]" />{" "}
                            Products
                          </NavLink>
                        </li>
                        {/* List */}
                        <li className="nav_list lg:hidden">
                          <NavLink to="/Cart" className="nav_link">
                            <AiOutlineShoppingCart className="mr-[8px]" /> Cart
                          </NavLink>
                        </li>

                        {/* List */}
                        <li className="nav_list">
                          <NavLink to="/register" className="nav_link">
                            <AiOutlineLogin className="mr-[8px]" /> Register
                          </NavLink>
                        </li>

                        {/* List Logout */}
                        <li className="text-[18px] border-b-[1px] text-center border-[#d7d7d72b] font-Roboto font-bold pl-[10px] py-[5px] bg-[#E6E6E6] hover:z-50">
                          <NavLink
                            to="/Cart"
                            className="nav_link justify-center text-[#0369a1] hover:text-[#000] duration-700"
                          >
                            <AiOutlineLogout className="mr-[8px]" /> Logout
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
