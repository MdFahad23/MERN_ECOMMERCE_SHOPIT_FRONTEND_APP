import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import payment from "../../Images/payment.png";

const Footer = () => {
  return (
    <footer className="bg-[#445268] pt-[25px] pb-[25px]">
      <div className="container">
        <div>
          <div className="grid grid-cols-10 max-[768px]:grid-cols-12 ml-[10px] pb-[30px]">
            <div className="footer_card_item">
              <h2 className="text-[18px] font-Roboto py-[10px]">
                Customer Services
              </h2>
              <ul>
                <li className="footer_list">Help Center</li>
                <li className="footer_list">Report abuse</li>
                <li className="footer_list">Open a Case</li>
                <li className="footer_list">Policies & rules</li>
                <li className="footer_list">Get paid your feedback</li>
              </ul>
            </div>
            <div className="footer_card_item">
              <h2 className="text-[18px] font-Roboto py-[10px]">About Us</h2>
              <ul>
                <li className="footer_list">About ShopIt</li>
                <li className="footer_list">About ShopIt Group</li>
                <li className="footer_list">ShopIt Bloge</li>
                <li className="footer_list">Legal Notice</li>
              </ul>
            </div>
            <div className="footer_card_item">
              <h2 className="text-[18px] font-Roboto py-[10px]">
                Source on ShopIT
              </h2>
              <ul>
                <li className="footer_list">Resources</li>
                <li className="footer_list">Request for Quotation</li>
                <li className="footer_list">Ready to Shop</li>
                <li className="footer_list">Buyer Partners</li>
                <li className="footer_list">ShopIt Select</li>
              </ul>
            </div>
            <div className="footer_card_item">
              <h2 className="text-[18px] font-Roboto py-[10px]">
                Sell on ShopIt
              </h2>
              <ul>
                <li className="footer_list">Supplier memberships</li>
                <li className="footer_list">Learning Center</li>
                <li className="footer_list">Partner Program</li>
              </ul>
            </div>
            <div className="footer_card_item">
              <h2 className="text-[18px] font-Roboto py-[10px]">
                Trade Services
              </h2>
              <ul>
                <li className="footer_list">Tread Assurance</li>
                <li className="footer_list">Business Identity</li>
                <li className="footer_list">Logistics Services</li>
                <li className="footer_list">Letter of Credit</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-12 max-[768px]:grid-cols-10 py-[20px]">
            <div className="col-span-4 max-[768px]:col-span-5 max-[560px]:col-span-12 pb-[10px] text-[#fff]">
              <h2 className="text-[22px] font-Roboto font-medium pb-[10px]">
                Payment Method
              </h2>
              <p className="text-[14px] font-Roboto pb-[20px]">
                SSLCOMMERZ is the first payment gateway in Bangladesh opening
                doors for merchants to receive payments on the internet via
                their online stores.
              </p>
              <div>
                <img src={payment} alt="Payment" />
              </div>
            </div>

            <div className="col-span-4 max-[768px]:col-span-5 max-[560px]:col-span-12 max-[560px]:text-left max-[560px]:py-[35px] pb-[10px] text-[#fff] text-center">
              <h1 className="text-[25px] font-Roboto font-semibold">SHOPIT</h1>
              <p>Welcome To ShopoIt :)</p>
            </div>

            <div className="col-span-4 max-[768px]:col-span-5 max-[560px]:col-span-12 pb-[10px] text-[#fff]">
              <h2 className="text-[22px] font-Roboto font-medium pb-[10px]">
                Follow Us
              </h2>
              <ul className="flex">
                <li className="text-[22px]">
                  <a
                    href="https://www.facebook.com/profile.php?id=100027067997261"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li className="pl-[10px] text-[22px]">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li className="pl-[10px] text-[22px]">
                  <a
                    href="https://www.instagram.com/md_fahad72"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li className="pl-[10px] text-[22px]">
                  <a
                    href="https://www.linkedin.com/in/md-fahad-4a3b21228/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center py-[30px]">
            <h2 className="text-[#fff] capitalize font-Roboto font-medium text-[20px]">
              Create By{" "}
              <a
                href="https://github.com/MdFahad23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#008cff] mr-[5px]"
              >
                Md Fahad
              </a>
              | All Rights Reserved
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
