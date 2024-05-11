"use client";
import React, { useState } from "react";
import CartSummary from "./CartSummary";
import CheckOut from "./CheckOut";

const page = () => {
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [placeOrder, setPlaceOrder] = useState(false);

  const formVisibilityHandler = () => {
    setFormIsVisible(true);
  };
  const placeOrderHandler = () => {
    setPlaceOrder(true);
  };

  
  return (
    <div className="container mx-auto px-20 max-lg:px-10 mb-20">
      {!formIsVisible && <CartSummary formVisibility={formVisibilityHandler} />}
      {formIsVisible && !placeOrder && (
        <CheckOut placeOrder={placeOrderHandler} />
      )}
      {formIsVisible && placeOrder && (
        <div className="text-center py-8 max-md:py-20 my-16 w-[60%] max-md:w-full m-auto rounded-md shadow-md">
          <h2 className="text-lg font-semibold text-[#6C7275]">
            Thank you! 🎉
          </h2>
          <p className="text-3xl font-semibold w-[50%] m-auto">
            Your order has been received
          </p>
        </div>
      )}
    </div>
  );
};

export default page;
