import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#141718]">
      <div className="container mx-auto px-20 text-white">
        <div className="flex justify-between min-h-32 items-center text-sm max-md:block max-lg:justify-center">
          <div className="flex items-center max-md:block max-md:justify-center">
            <h2 className="text-xl font-semibold cursor-pointer border-r-2 max-md:border-r-0 border-r-[#6C7275] max-md:text-center max-md:pt-4">
            <Link href="/">3legant</Link><span className="text-[#6C7275]">.</span>
            </h2>
            <p className="pl-6 max-md:text-center max-md:p-0 max-md:py-4">
              Gift & Decoration Store
            </p>
          </div>
          <div>
            <ul className="flex gap-4 text-[#E8ECEF] max-md:block max-md:justify-center">
              <li className="text-center max-md:pb-4">Home</li>
              <li className="text-center max-md:pb-4">Shop</li>
              <li className="text-center max-md:pb-4">Product</li>
              <li className="text-center max-md:pb-4">Blog</li>
              <li className="text-center max-md:pb-4">Contact Us</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="flex justify-between pt-6 pb-12 text-xs max-md:flex-col-reverse">
          <div className="flex gap-6 max-md:flex-col-reverse max-md:justify-center">
            <p className="text-[#E8ECEF] text-center">
              Copyright © 2023 3legant. All rights reserved
            </p>
            <div className="flex gap-6 justify-center">
              <h3>Privacy Policy</h3>
              <h3>Terms of Use</h3>
            </div>
          </div>
          <div className="flex gap-4 text-xl max-md:justify-center max-md:mb-4">
            <FaInstagram className="cursor-pointer"></FaInstagram>
            <FiFacebook className="cursor-pointer"></FiFacebook>
            <FiYoutube className="cursor-pointer"></FiYoutube>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
