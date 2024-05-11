"use client";
import React, { useState } from "react";
import Article from "../../../components/Article";
import Newsletter from "@/components/Newsletter";
import data from "../../(utils)/blogs.json";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { TfiLayoutColumn2Alt } from "react-icons/tfi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const Blogs = () => {
  const [activeItem, setActiveItem] = useState(1);
  const handleClick = (itemNum) => {
    setActiveItem(itemNum);
  };

  const [showMore, setShowMore] = useState(false);
  const showMoreHandler = () => {
    setShowMore(true);
  };
  const visibleProducts = showMore ? data : data.slice(0, 9);

  return (
    <div>
      <div className="container mx-auto px-20 max-lg:px-10">
        <div className="relative">
          <img className="max-md:h-60" src="/Images/blog-cover.png"></img>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
            <div className="flex items-center justify-center text-[#545454]">
              Home
              <MdOutlineKeyboardArrowRight className="mx-4 max-sm:mx-2"></MdOutlineKeyboardArrowRight>
              <span className="text-black">Blog</span>
            </div>
            <h2 className="text-4xl max-md:text-3xl font-bold py-6">Blog Page</h2>
            <p>Home ideas and design inspiration.</p>
          </div>
        </div>
        <div>
          <div>
            <div className="flex justify-between items-center my-8">
              <h2 className="text-lg font-bold">Living Room</h2>
              <div className="flex">
                <div className="flex mr-10 items-center">
                  Sort by
                  <MdKeyboardArrowDown className="ml-2"></MdKeyboardArrowDown>
                </div>
                <ul className="flex items-center text-[#545454]">
                  <li
                    className={`p-2 border-[1px] mr-[-1px] cursor-pointer duration-300 ${
                      activeItem === 1 ? "text-[#141718] bg-[#E8ECEF]" : ""
                    }`}
                    onClick={() => handleClick(1)}
                  >
                    <TfiLayoutGrid3Alt></TfiLayoutGrid3Alt>
                  </li>
                  <li
                    className={`p-2 border-[1px] mr-[-0.5px] cursor-pointer duration-300 ${
                      activeItem === 2 ? "text-[#141718] bg-[#E8ECEF]" : ""
                    }`}
                    onClick={() => handleClick(2)}
                  >
                    <TfiLayoutGrid2Alt></TfiLayoutGrid2Alt>
                  </li>
                  <li
                    className={`p-2 border-[1px] mr-[-1px] cursor-pointer duration-300 ${
                      activeItem === 3 ? "text-[#141718] bg-[#E8ECEF]" : ""
                    }`}
                    onClick={() => handleClick(3)}
                  >
                    <TfiLayoutColumn2Alt></TfiLayoutColumn2Alt>
                  </li>
                  <li
                    className={`p-2 border-[1px] cursor-pointer duration-300 ${
                      activeItem === 4 ? "text-[#141718] bg-[#E8ECEF]" : ""
                    }`}
                    onClick={() => handleClick(4)}
                  >
                    <TfiLayoutColumn2Alt></TfiLayoutColumn2Alt>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1 justify-items-center">
            {visibleProducts.map((blog) => (
              <Article
                key={blog.id}
                id={blog.id}
                image={blog.image}
                description={blog.description}
                date={blog.date}
              />
            ))}
          </div>
          <div className="w-full text-center">
            <button
              onClick={showMoreHandler}
              className="py-2 px-8 border-2 border-black rounded-full my-16"
            >
              Show more
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Blogs;
