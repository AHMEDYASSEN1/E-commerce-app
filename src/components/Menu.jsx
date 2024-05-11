import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";

const Menu = (props) => {
  const MenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (MenuRef.current && !MenuRef.current.contains(event.target)) {
        props.closeMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [MenuRef]);

  return (
    <div
      className={`md:hidden fixed h-full w-full bg-black/50  backdrop-blur-sm top-0 right-0`}
    >
      <nav
        ref={MenuRef}
        className={`md:hidden fixed inset-y-0 left-0 bg-white bg-opacity-95 z-50 p-5 max-w-[390px] min-w-[330px]`}
      >
        <div className="h-[50%]">
          <div className="flex justify-between items-center pb-3">
            <h2 className="text-2xl font-semibold cursor-pointer">
              3legant<span className="text-[#6C7275]">.</span>
            </h2>
            <button onClick={props.closeMenu}>
              <IoCloseOutline className="text-xl"></IoCloseOutline>
            </button>
          </div>
          <ul className="text-[#141718] font-medium">
            <li
              onClick={props.closeMenu}
              className=" py-2 cursor-pointer text-[#141718] border-b-[1px]"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={props.closeMenu}
              className=" py-2 cursor-pointer transition-[.3s] border-b-[1px]"
            >
              <Link href="Shop">Shop</Link>
            </li>
            <li
              onClick={props.closeMenu}
              className=" py-2 cursor-pointer transition-[.3s] border-b-[1px]"
            >
              <Link href="Blogs">Blogs</Link>
            </li>
            <li
              onClick={props.closeMenuٍ}
              className="py-2 cursor-pointer transition-[.3s]"
            >
              <Link href="ContactUs">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="h-[50%] relative">
          <div className="absolute bottom-0 w-full">
            <div
              onClick={props.closeMenu}
              className="flex items-center justify-between py-2 border-b-[1px] cursor-pointer"
            >
              <span className="flex items-center justify-between">Cart</span>
              <div className="flex items-center">
                <IoBagHandleOutline className="text-[20px] cursor-pointer "></IoBagHandleOutline>
                <span className="h-5 w-5 bg-black text-white rounded-full flex justify-center items-center ml-1">
                  0
                </span>
              </div>
            </div>
            <div
              onClick={props.closeMenu}
              className="flex items-center justify-between py-2 border-b-[1px] cursor-pointer"
            >
              <span className="flex items-center justify-between">
                Wishlist
              </span>
              <div className="flex items-center">
                <GoHeart className="text-[20px] cursor-pointer "></GoHeart>
                <span className="h-5 w-5 bg-black text-white rounded-full flex justify-center items-center ml-1">
                  0
                </span>
              </div>
            </div>
            <button
              onClick={props.closeMenu}
              className="bg-black text-white py-2 px-6 rounded-lg shadow-sm hover:shadow-xl mt-4 w-full"
            >
              <Link href="SignIn">Sign In</Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
