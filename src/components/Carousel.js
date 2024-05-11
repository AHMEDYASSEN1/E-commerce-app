"use client";
import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform ease-in-out duration-300"
          // style={{ transform: `translateX(${currentIndex}%)` }}
        >
          <img
            src={items[currentIndex]}
            alt={`carousel-item-${currentIndex}`}
            className="w-full"
          ></img>
        </div>
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#6C7275] h-10 w-10 rounded-full bg-white flex justify-center items-center cursor-pointer">
        <IoArrowBackOutline
          className="text-[20px]"
          onClick={prevItem}
        >
        </IoArrowBackOutline>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#6C7275] h-10 w-10 rounded-full bg-white flex justify-center items-center cursor-pointer">
        <IoArrowForward
          className="text-[20px]"
          onClick={nextItem}
        >
        </IoArrowForward>
      </div>
    </div>
  );
};

export default Carousel;
