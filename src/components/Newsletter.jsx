import React from "react";
import { CiMail } from "react-icons/ci";

const Newsletter = () => {
  return (
    <div className="bg-[url('/Images/image00.png')] h-[22rem] flex items-center max-lg:bg-none max-lg:bg-[#f3f5f7]">
      <div className="container mx-auto px-20 max-lg:px-10 my-20 w-full text-center">
        <h2 className="text-4xl">Join Our Newsletter</h2>
        <p className="py-2 font-medium">Sign up for deals, new products and promotions</p>
        <div className="flex bg-[#f3f5f7] w-fit py-2 px-2 border-b-2 m-auto mt-2 border-b-[#c7cdd0]">
          <CiMail className="text-xl"></CiMail>
          <input className="px-2 bg-[#f3f5f7] w-[20rem] max-lg:w-[12rem] outline-none" placeholder="Email address"></input>
          <button className="text-[#6C7275]">Singup</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
