import React from "react";
import { BsShopWindow } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";const ContactSections = () => {
  return (
    <div>
      <h1 className="text-center my-10 text-3xl font-semibold">Contact Us</h1>
      <div className="flex justify-between gap-6 flex-wrap  max-md:justify-center">
        <div className="bg-[#F3F5F7] text-center w-[31%] min-w-[280px] min-h-[150px] p-4 px-10">
          <div className="w-full flex justify-center">
            <BsShopWindow className="text-2xl font-bold"></BsShopWindow>
          </div>
          <h4 className="text-[#6C7275] font-semibold py-2">ADDRESS</h4>
          <span className=" font-semibold">234 Hai Trieu, Ho Chi Minh City, Viet Nam</span>
        </div>
        <div className="bg-[#F3F5F7] text-center w-[31%] min-w-[280px] min-h-[150px] p-4 px-10">
          <div className="w-full flex justify-center">
            <FiPhone className="text-2xl font-bold"></FiPhone>
          </div>
          <h4 className="text-[#6C7275] font-semibold py-2">CONTACT US</h4>
          <span className=" font-semibold">+84234567890</span>
        </div>
        <div className="bg-[#F3F5F7] text-center w-[31%] min-w-[280px] min-h-[150px] p-4 px-10">
          <div className="w-full flex justify-center">
            <IoMailOutline className="text-2xl font-bold"></IoMailOutline>
          </div>
          <h4 className="text-[#6C7275] font-semibold py-2">EMAIL</h4>
          <span className=" font-semibold">hello@3legant.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactSections;
