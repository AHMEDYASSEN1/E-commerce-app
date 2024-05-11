import React, { useState, useRef, useEffect, useContext } from "react";
import { CartItem } from "./CartItem";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import CartContext from "@/store/cart-context";

const FlyoutCart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  // const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeCartItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const clearCartItemHandler = (id) => {
    cartCtx.clearItem(id);
  };

  const cartRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        props.closeCart();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartRef]);

  return (
    <div className="fixed h-full w-full bg-black/50  backdrop-blur-sm top-0 left-0">
      <div
        ref={cartRef}
        className="fixed inset-y-0 right-0 bg-white bg-opacity-95 z-50 p-5 max-w-[390px] min-w-[370px]"
      >
        <div className="h-[70%]">
          <div className="flex justify-between items-center pb-3">
            <h2 className="text-2xl font-semibold cursor-pointer">Cart</h2>
            <button onClick={props.closeCart}>
              <IoCloseOutline className="text-xl"></IoCloseOutline>
            </button>
          </div>
          <div className="h-full overflow-y-scroll">
            {cartCtx.items.map((ele) => (
              <CartItem
                key={ele.id}
                id={ele.id}
                title={ele.title}
                image={ele.image}
                price={ele.price}
                amount={ele.amount}
                onAdd={cartItemAddHandler.bind(null, ele)}
                onRemove={removeCartItemHandler.bind(null, ele.id)}
                onClear={clearCartItemHandler.bind(null, ele.id)}
              ></CartItem>
            ))}
          </div>
        </div>
        <div className="h-[30%] relative">
          <div className="absolute bottom-0 w-full">
            <div className="flex items-center justify-between font-semibold">
              <h2>Total</h2>
              <span>{totalAmount}</span>
            </div>
            <button
              onClick={props.closeCart}
              className="bg-black text-white py-2 px-6 rounded-lg shadow-sm hover:shadow-xl my-2 block m-auto"
            >
              <Link href="/Cart">Checkout</Link>
            </button>
            <button
              className="border-b-[2px] border-black text-sm font-semibold block m-auto"
              onClick={props.closeCart}
            >
              <Link href="/Cart">View Cart</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlyoutCart;
