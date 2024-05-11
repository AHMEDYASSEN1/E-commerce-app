import React from "react";
import { IoIosStar } from "react-icons/io";

const Review = (props) => {
  return (
    <div className="py-4 border-b-[1px]">
      <div className="flex gap-6">
        <img src={props.image} className="h-14"></img>
        <div>
          <h2 className=" font-semibold">{props.name}</h2>
          <span className="flex text-[#141718] text-sm pt-3">
            <IoIosStar></IoIosStar>
            <IoIosStar></IoIosStar>
            <IoIosStar></IoIosStar>
            <IoIosStar></IoIosStar>
            <IoIosStar></IoIosStar>
          </span>
        </div>
      </div>
      <p className="pl-20 max-sm:pl-0 text-sm text-[#353945] pt-2">{props.review}</p>
    </div>
  );
};

export default Review;
