import React from "react";
import { IoIosStar } from "react-icons/io";
import data from "../../../../(utils)/reviews.json";
import Review from "./Review";

const Reviews = () => {
  return (
    <div className="my-12">
      <div className="">
        <ul className="flex items-center text-[#6C7275] gap-10 border-b-[1px]">
          <li className="">Reviews</li>
          <li className="">Additional Info</li>
          <li className="">Question</li>
        </ul>
      </div>
      <div className="my-8">
        <h2 className="text-lg font-medium pb-2">Customer Reviews</h2>
        <div className="flex gap-2 text-sm items-center text-[#343839]">
          <span className="flex">
            <IoIosStar></IoIosStar>
            <IoIosStar></IoIosStar>
            <IoIosStar></IoIosStar>
            <IoIosStar></IoIosStar>
            <IoIosStar></IoIosStar>
          </span>
          <span>11 Reviews</span>
        </div>
      </div>
      <div className="flex border-[1.5px] rounded-lg p-2">
        <input className="flex-1 outline-none"></input>
        <button className="bg-[#141718] text-white py-2 px-6 max-sm:px-4 max-sm:text-sm rounded-full w-fit">
          Write Review
        </button>
      </div>
      <div>
        <div className="py-4 flex justify-between">
          <h2 className="text-xl font-medium">Reviews</h2>
          <h2 className="">Newest</h2>
        </div>
        <div>
          {data.map((ele) => (
            <Review
              key={ele.id}
              id={ele.id}
              name={ele.name}
              review={ele.review}
              image={ele.image}
            ></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
