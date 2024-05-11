import React, { useContext } from "react";
import MainCartItem from "./MainCartItem";
import { CartItem } from "./CartItem";
import CartContext from "@/store/cart-context";

const CartSummary = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeCartItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const clearCartItemHandler = (id) => {
    cartCtx.clearItem(id);
  }

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;


  return (
    <div className="container mx-auto px-20 max-lg:px-10 mb-20">
      <div className="w-full text-center my-10">
        <h2 className="text-3xl font-semibold">Cart</h2>
      </div>
      <div className="flex items-center gap-16 max-lg:block">
        <div className="w-[67%] h-[24rem] max-lg:w-full max-lg:mb-16">
          <div className="flex items-center justify-between border-b-[1px] border-[#6C7275] pb-6 font-medium">
            <h3>Product</h3>
            <ul className="flex items-center justify-between">
              <li className="w-24 text-end max-md:hidden">Quantity</li>
              <li className="w-24 text-end">Price</li>
              <li className="w-24 text-end  max-md:hidden">Subtotal</li>
            </ul>
          </div>
          <div className="h-[23rem] overflow-y-scroll max-md:hidden">
            {cartCtx.items.map((ele) => (
              <MainCartItem
                key={ele.id}
                id={ele.id}
                title={ele.title}
                review={ele.description}
                image={ele.image}
                price={ele.price}
                amount={ele.amount}
                onAdd={cartItemAddHandler.bind(null, ele)}
                onRemove={removeCartItemHandler.bind(null, ele.id)}
                onClear={clearCartItemHandler.bind(null, ele.id)}
              ></MainCartItem>
            ))}
          </div>
          <div className="h-[23rem] overflow-y-scroll md:hidden">
            {cartCtx.items.map((ele) => (
              <CartItem
                key={ele.id}
                id={ele.id}
                title={ele.title}
                review={ele.description}
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
        <div className="min-w-[33%] border-[2px] border-[#909191] rounded-md py-2 px-4  h-[24rem]">
          <h2 className="font-semibold text-xl my-2">Cart summary</h2>
          <ul>
            <li className="p-2 flex items-center justify-between border-[1px] border-[#6C7275] rounded-md mt-2">
              <div>
                <input type="radio"></input> Free shipping
              </div>
              <span>$0.00</span>
            </li>
            <li className="p-2 flex items-center justify-between border-[1px] border-[#6C7275] rounded-md mt-2">
              <div>
                <input type="radio"></input> Express shipping
              </div>
              <span>$0.00</span>
            </li>
            <li className="p-2 flex items-center justify-between border-[1px] border-[#6C7275] rounded-md mt-2">
              <div>
                <input type="radio"></input> Pick Up
              </div>
              <span>$0.00</span>
            </li>
          </ul>
          <div className="mt-16">
            <div className="my-4">
              {/* <div className="flex items-center justify-between py-3 border-b-[1px] border-[#6C7275]">
                <h3>Subtotal</h3>
                <span>$1234.00</span>
              </div> */}
              <div className="flex items-center justify-between py-3 font-semibold">
                <h3>Total</h3>
                <span>{totalAmount}</span>
              </div>
            </div>
            <button
              onClick={props.formVisibility}
              className="bg-black text-white p-2 w-full rounded-lg shadow-sm hover:shadow-xl my-2 block m-auto"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
