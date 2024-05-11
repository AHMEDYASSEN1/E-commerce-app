'use client';
import React, { useContext } from "react";
import { IoIosStar } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Reviews from "./(Reviews)/Reviews";
import { useParams } from "next/navigation";
import data from "../../../(utils)/products.json";
import CartContext from "@/store/cart-context";


const ProductDetails = () => {
  const params = useParams();
  const id = +params.ProductId;

  let currItem = null;

  data.forEach(function (item) {
    if (item.id === id) {
      currItem = item;
    }
  });

  const cartCtx = useContext(CartContext);

  const addItemHandler = () => {
    cartCtx.addItem({
      id: currItem.id,
      amount: 1,
      title: currItem.title,
      price: currItem.price,
      image: currItem.image,
    });
  };

  return (
    <div className="container mx-auto px-20 max-lg:px-10">
      <div className="flex text-[#545454] py-4 max-sm:text-sm">
        Home
        <MdOutlineKeyboardArrowRight className="mx-4 max-sm:mx-2"></MdOutlineKeyboardArrowRight>
        Shop
        <MdOutlineKeyboardArrowRight className="mx-4 max-sm:mx-2"></MdOutlineKeyboardArrowRight>
        Living Room
        <MdOutlineKeyboardArrowRight className="mx-4 max-sm:mx-2"></MdOutlineKeyboardArrowRight>
        <span className="text-black">Product</span>
      </div>
      <div className="flex gap-16 relative max-lg:block">
        <div className="flex-1">
          <img className="w-full" src={currItem.image}></img>
          <div className="absolute top-6 left-6">
            <span className="block bg-[#FFFFFF] rounded-sm text-center mb-2 shadow-md">
              New
            </span>
            <span className="bg-[#38CB89] rounded-sm py-1 px-2 text-white shadow-md">{`-50%`}</span>
          </div>
        </div>
        <div className="flex-1 max-lg: pt-6">
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
          <div className="py-6">
            <h2 className="text-5xl font-medium">{currItem.title}</h2>
            <p className="text-md text-[#6C7275] py-6">
              Buy one or buy a few and make every space where you sit more
              convenient. Light and easy to move around with removable tray top,
              handy for serving snacks.
            </p>
            <div>
              <span className="text-xl font-bold pr-2">{currItem.price}</span>
              <span className="text-lg text-gray-500 line-through">
                {currItem.price + (currItem.price / 4)}
              </span>
            </div>
          </div>
          <div className="pb-6">
            <div>
              <div className="text-sm text-[#6C7275] font-medium mb-2">
                Measurements
              </div>
              <span>17 1/2x20 5/8</span>
            </div>
            <div className="py-6">
              <div className="flex gap-5">
                {/* <div className="flex mb-4 rounded-lg overflow-hidden">
                  <button className="py-2 px-4 bg-[#F5F5F5] text-[#545454] hover:bg-[#e8e8e8] transition-all">
                    -
                  </button>
                  <span className="py-2 px-3 bg-[#F5F5F5]">{currItem.amount}</span>
                  <button className="py-2 px-4 bg-[#F5F5F5] text-[#545454] hover:bg-[#e8e8e8] transition-all">
                    +
                  </button>
                </div> */}
                <button className="flex-1 py-1.5 rounded-lg border-[#141718] border-2 mb-4">
                  Wishlist
                </button>
              </div>
              <button className="bg-[#141718] text-white py-2 rounded-lg w-full mb-4"
              onClick={addItemHandler}>
                Add to cart
              </button>
            </div>
            <div className="flex gap-12 py-6 border-t-[1px]">
              <div className="text-[#6C7275]">
                <span>SKU</span>
                <div>CATEGORY</div>
              </div>
              <div>
                <span>1117</span>
                <div>Living Room, Bedroom</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reviews></Reviews>
    </div>
  );
};

export default ProductDetails;