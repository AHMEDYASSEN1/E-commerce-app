"use client";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoIosStar } from "react-icons/io";
import CartContext from "@/store/cart-context";


const Product = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = () => {
    cartCtx.addItem({
      id: props.id,
      amount: 1,
      title: props.title,
      price: props.price,
      image: props.image,
    });
  };

  const router = useRouter();

  const [liked, setLiked] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const price = `$${props.price.toFixed(2)}`;

  return (
    <div>
      <div
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <div className="bg-[#f3f5f7] w-[262px] max-lg:max-w-[230px] max-sm:max-w-[200px] max-[522px]:max-w-[150px]">
          <div
            className={`p-4 flex justify-between opacity-0 transition-opacity duration-300 ${
              isHover ? "opacity-100" : ""
            }`}
          >
            <div className="">
              <span className="block bg-[#FFFFFF] rounded-sm text-center mb-2 shadow-md">
                New
              </span>
              <span className="bg-[#38CB89] rounded-sm py-1 px-2 text-white shadow-md">{`-50%`}</span>
            </div>
            <button
              onClick={toggleLike}
              className="bg-white h-fit p-2 rounded-full shadow-md cursor-pointer"
            >
              {liked ? (
                <GoHeartFill className="text-red-500 size-4" />
              ) : (
                <GoHeart className="size-4" />
              )}
            </button>
          </div>
          <div className="h-[12rem] flex justify-center items-center max-lg:h-[8rem] max-sm:h-[6rem]">
            <img className="h-full" src={props.image}></img>
          </div>
          <div className="flex items-center px-4 gap-4">
            <button
              className={`bg-black border-[#141718] border-2 text-white py-2 rounded-lg mb-4 flex-1 shadow-sm hover:shadow-xl opacity-0 transition-opacity duration-300 max-sm:text-[8px] ${
                isHover ? "opacity-100" : ""
              }`}
              onClick={addItemHandler}
            >
              Add to cart
            </button>
            <button
              onClick={() => router.push(`Shop/${props.id}`)}
              className={`bg-white text-black border-[#141718] border-2 py-2 rounded-lg mb-4 flex-1 shadow-sm hover:shadow-xl opacity-0 transition-opacity duration-300 max-sm:text-[8px] ${
                isHover ? "opacity-100" : ""
              }`}
            >
              Details
            </button>
          </div>
        </div>
        <div className="font-semibold">
          <span className="flex py-2">
            <IoIosStar></IoIosStar>
            <IoIosStar></IoIosStar>
            <IoIosStar></IoIosStar>
            <IoIosStar></IoIosStar>
            <IoIosStar></IoIosStar>
          </span>
          <span className="block">{props.title}</span>
          <span className="block py-2">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
