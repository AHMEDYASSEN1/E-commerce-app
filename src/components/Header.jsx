"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import FlyoutCart from "@/app/Cart/FlyoutCart";
import Menu from "./Menu";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-10">
      <div className="h-[60px] bg-white">
        <div className="container mx-auto px-20 max-lg:px-10 h-full flex justify-between items-center">
          <div className="flex items-center">
            <FiMenu
              className="text-[20px] cursor-pointer mr-4 md:hidden"
              onClick={toggleMenu}
            />
            <Link href="/">
              <h2 className="text-2xl font-semibold cursor-pointer">
                3legant<span className="text-[#6C7275]">.</span>
              </h2>
            </Link>
          </div>
          {showMenu && <Menu closeMenu={toggleMenu} />}

          <nav className="max-md:hidden">
            <ul className="flex items-center text-[#6C7275] font-medium">
              <li className="mx-4 cursor-pointer text-[#141718]">
                <Link href="/">Home</Link>
              </li>
              <li className="mx-4 cursor-pointer transition-[.3s] hover:text-[#141718]">
                <Link href="Shop">Shop</Link>
              </li>
              <li className="mx-4 cursor-pointer transition-[.3s] hover:text-[#141718]">
                <Link href="Blogs">Blogs</Link>
              </li>
              <li className="mx-4 cursor-pointer transition-[.3s] hover:text-[#141718]">
                <Link href="ContactUs">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <RiSearchLine className="text-[22px] cursor-pointer max-md:hidden"></RiSearchLine>
            <div className="">
              <CgProfile
                className="text-[22px] cursor-pointer"
                onMouseEnter={handleMenuToggle}
                
              ></CgProfile>
              {isMenuOpen && (
                <div className="absolute right-28 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 max-sm:right-12"
                onMouseLeave={handleMenuToggle}>
                  {/* Check if user is logged in */}
                  {isLoggedIn ? (
                    <div className="p-4">
                      <p className="text-gray-800">Welcome, Adel Shakal!</p>
                      <button className="mt-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="p-4">
                      <p className="text-gray-800">You are not logged in.</p>
                      <button className="mt-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 w-[60%]">
                        <Link href="/SignIn">Login</Link>
                      </button>
                      <button className="mt-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 w-[60%]">
                        <Link href="/SignUp">Sign Up</Link>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            <HeaderCartButton toggleCart={toggleCart} />
          </div>
          {showCart && <FlyoutCart closeCart={toggleCart} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
