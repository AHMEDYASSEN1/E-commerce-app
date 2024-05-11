import React from "react";
import { GoArrowRight } from "react-icons/go";

const Sales = () => {
  return (
    <div className="flex items-center my-10 bg-[#f3f5f7] max-md:block">
      <div className="flex-1">
        <img
          className="w-full min-h-[300px]"
          src="/Images/Paste image--.png"
        ></img>
      </div>
      <div className="flex-1">
        <div className="w-[24rem] max-md:w-fit pl-10 max-md:p-10">
          <span className="text-sm font-bold text-blue-500">
            SALE UP TO 35% OFF
          </span>
          <h2 className="text-4xl pt-3 max-md:text-3xl max-sm:text-2xl">
            HUNDREDS of<br></br>NEW LOWER prices!
          </h2>
          <p className="text-lg pt-3 leading-tight">
            it's more affordable than ever to give every room in your home a
            stylish makeover
          </p>
          <button className="py-1 h-fit border-b-2 border-black cursor-pointer flex items-center pt-5">
            Shop Now <GoArrowRight className="ml-[5px]"></GoArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sales;
