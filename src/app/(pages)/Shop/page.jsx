"use client";
import React from "react";
import { useState } from "react";
import Product from "./(Products)/Product";
import Sidebar from "@/components/Sidebar";
import Toolbar from "@/components/Toolbar";
import Newsletter from "@/components/Newsletter";
import data from "../../(utils)/products.json";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Shop = () => {
  const [showMore, setShowMore] = useState(false);
  const showMoreHandler = () => {
    setShowMore(true);
  };
  const visibleProducts = showMore ? data : data.slice(0, 6);

  return (
    <div>
      <div className="container mx-auto px-20 max-lg:px-10">
        <div className="relative">
          <img className="max-md:h-60" src="/Images/shop img.png"></img>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
            <div className="flex items-center justify-center text-[#545454]">
              Home
              <MdOutlineKeyboardArrowRight className="mx-4"></MdOutlineKeyboardArrowRight>
              <span className="text-black">Shop</span>
            </div>
            <h2 className="text-4xl max-md:text-3xl font-bold py-6">
              Shop Page
            </h2>
            <p>Let's design the place you always imagined.</p>
          </div>
        </div>
        <div className="mt-8 flex">
          <Sidebar></Sidebar>
          <div className="flex-[3_3_0%]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Living Room</h2>
              <Toolbar></Toolbar>
            </div>
            <div className="pt-4 flex flex-wrap gap-6 justify-between">
              {visibleProducts.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  rate={product.rate}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  description={product.description}
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
      </div>
      <Newsletter />
    </div>
  );
};

export default Shop;
