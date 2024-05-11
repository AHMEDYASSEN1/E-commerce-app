import React from "react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const Banner = () => {
  return (
    <div className="container mx-auto px-20 max-lg:px-10 flex max-[1150px]:block">
      <div className="mr-[1rem] max-[1150px]:mr-0 bg-[#F3F5F7] p-8 max-sm:p-4 flex-1 h-fit">
        <div>
          <h2 className="text-4xl max-md:text-2xl">Living Room</h2>
          <button className="py-1 mt-2 border-b-2 border-black cursor-pointer flex items-center font-medium">
            <Link href="Shop">Shop Now</Link>{" "}
            <GoArrowRight className="ml-[5px]"></GoArrowRight>
          </button>
        </div>
        <div className="w-full flex justify-center">
          <img src="/Images/Paste image_3.png"></img>
        </div>
      </div>
      <div className="ml-2 max-[1150px]:ml-0 flex-1 max-[1150px]:mt-[1.5rem]">
        <div className="bg-[#F3F5F7] flex justify-between items-end px-8 max-sm:px-4 overflow-hidden">
          <div className="mb-8">
            <h2 className="text-4xl max-md:text-2xl">Bedroom</h2>
            <button className="py-1 mt-2 border-b-2 border-black cursor-pointer flex items-center font-medium">
              <Link href="Shop">Shop Now</Link>{" "}
              <GoArrowRight className="ml-[5px]"></GoArrowRight>
            </button>
          </div>
          <img className="max-sm:h-36" src="/Images/Paste image_2.png"></img>
        </div>
        <div className="bg-[#F3F5F7] flex justify-between items-end mt-[1.5rem] px-8 max-sm:px-4 overflow-hidden">
          <div className="mb-8">
            <h2 className="text-4xl max-md:text-2xl">Kitchen</h2>
            <button className="py-1 mt-2 border-b-2 border-black cursor-pointer flex items-center font-medium">
              <Link href="Shop">Shop Now</Link>{" "}
              <GoArrowRight className="ml-[5px]"></GoArrowRight>
            </button>
          </div>
          <img className="max-sm:h-36" src="/Images/product-11.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
