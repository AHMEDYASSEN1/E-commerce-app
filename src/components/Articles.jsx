import React from "react";
import Link from "next/link"
import { GoArrowRight } from "react-icons/go";
import data from "../app/(utils)/blogs.json";
import Article from "./Article";

const Articles = () => {
  return (
    <div className="container mx-auto px-20 my-20 max-lg:px-10">
      <div className="flex justify-between mb-8 items-end">
        <h2 className="text-4xl">Aritcles</h2>
        <button className="py-1 h-fit border-b-2 border-black cursor-pointer flex items-center font-medium">
        <Link href="Blogs">More Articles</Link> <GoArrowRight className="ml-[5px]"></GoArrowRight>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1 justify-items-center">
        {data.slice(0, 3).map((blog) => (
          <Article
            key={blog.id}
            id={blog.id}
            image={blog.image}
            description={blog.description}
            date={blog.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
