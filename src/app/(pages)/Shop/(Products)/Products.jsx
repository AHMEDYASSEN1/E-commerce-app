import React from "react";
import Product from "./Product";
import data from "../../../(utils)/products.json";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const Products = () => {
  return (
    <div className="container mx-auto px-20 my-20 max-lg:px-10">
      <div className="flex justify-between mb-8 items-end">
        <h2 className="text-4xl">
          New<br></br>Arrivals
        </h2>
        <button className="py-1 h-fit border-b-2 border-black cursor-pointer flex items-center font-medium">
          <Link href="/Shop">More Products</Link>
          <GoArrowRight className="ml-[5px]"></GoArrowRight>
        </button>
      </div>
      <div className="flex overflow-x-scroll gap-5">
        {data.slice(0, 5).map((product) => (
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
    </div>
  );
};

export default Products;
