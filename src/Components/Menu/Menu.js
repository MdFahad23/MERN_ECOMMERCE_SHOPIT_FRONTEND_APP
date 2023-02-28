import React from "react";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineLogin, AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

const Menu = () => {
  const handelChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <nav className=" shadow-3xl bg-[#ffffffa6] pt-[10px] pb-[10px]">
        <div className="container">
          <div className="lg:flex lg:justify-between lg:items-center">
            {/* Nav Logo */}
            <div>
              <NavLink to="/">
                <h2 className="lg:text-[25px] font-DancingScript font-extrabold text-[#ff9900]">
                  SHOPIT
                </h2>
              </NavLink>
            </div>
            {/* Nav Menu List */}
            <div>
              <ul className="lg:flex items-center">
                {/* Nav Menu Item */}
                <div className="lg:flex items-center lg:mr-[80px]">
                  <div className="mt-1 text-[20px] flex items-center">
                    <li className="lg:text-[18px] mr-[25px] font-Roboto font-medium">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="lg:mr-[25px] lg:text-[22px]">
                      <NavLink to="/cart">
                        <AiOutlineShoppingCart />
                      </NavLink>
                    </li>
                    {/* Search bar */}
                    <li className="cursor-pointer">
                      <span className="flex items-center bg-[#F9F9F9]">
                        <div className="lg:border-l-2 lg:border-l-[#fc8529]">
                          <input
                            type="text"
                            placeholder="Search in Site"
                            className=" font-Mulish font-light lg:text-[18px] ml-2 bg-[#F9F9F9]"
                            name="keyword"
                            onChange={handelChange}
                          />
                        </div>
                        <span className="lg:border lg:p-[5px] lg:text-[#ff9900]">
                          <BsSearch />
                        </span>
                      </span>
                    </li>
                  </div>
                </div>
                {/* User Details */}
                <div className="mt-1 text-[22px]">
                  <li className="hidden">
                    <NavLink to="/">
                      <AiOutlineLogin />
                    </NavLink>
                  </li>
                  <li className=" max-lg:hidden">
                    <div className="cursor-pointer flex items-center bg-[#f7f8fa] shadow-4xl pl-[20px] pr-[20px] rounded-2xl hover:bg-[#E6E6E6] hover:border-[#DEDFE0] duration-700 delay-200">
                      <div className="pt-[5px] pb-[5px]">
                        <span className="mr-[8px] border rounded-full pl-[5px] pr-[5px] bg-[#fdfdfd]">
                          M
                        </span>
                      </div>
                      <span>
                        <IoMdArrowDropdown />{" "}
                      </span>
                    </div>
                    <div></div>
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
