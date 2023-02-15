import React from "react";
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0000001a] pt-[25px] pb-[25px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="lg:text-[25px] font-DancingScript font-extrabold text-[#000000]">
            SHOPIT
          </h1>
          <p className="lg:text-[20px] font-OpenSans font-semibold text-[#000]">
            COPYRIGHTS 2023&copy; MD FAHAD
          </p>
          <div className="flex items-center">
            <a
              className="footer_bs"
              href="https://www.facebook.com/profile.php?id=100027067997261"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook />
            </a>
            <a
              className="footer_bs"
              href="https://github.com/MdFahad23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
            <a
              className="footer_bs"
              href="https://www.linkedin.com/in/md-fahad-4a3b21228/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="footer_bs"
              href="https://twitter.com/MdFahad39983155"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
