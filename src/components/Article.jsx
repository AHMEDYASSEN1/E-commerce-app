"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { GoArrowRight } from "react-icons/go";

const Article = (props) => {
  const router = useRouter();

  return (
    <div className="max-w-[357px]" onClick={() => router.push("Blogs/item")}>
      <img src={props.image} className="min-w-[280px]"></img>
      <p className="pt-3 pb-1 text-lg font-semibold">{props.description}</p>
      {/* <span className="text-sm text-[#6C7275]">{props.date}</span> */}
      <button className="py-1 h-fit border-b-2 border-black cursor-pointer flex items-center font-medium">
        Read More<GoArrowRight className="ml-[5px]"></GoArrowRight>
      </button>
    </div>
  );
};

export default Article;
