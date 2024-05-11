import React, { useContext } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import CartContext from "@/store/cart-context";


const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item)=> {
    return curNumber + item.amount;
  }, 0)

  return (
    <div className="flex items-center p-1 border-2 border-[#151617] rounded-xl bg-[#f7f8fa] hover:bg-[#f3f5f7]" onClick={props.toggleCart}>
      <IoBagHandleOutline className="text-[22px] cursor-pointer "></IoBagHandleOutline>
      <span className="h-6 w-10 bg-[#141718] text-white rounded-full flex justify-center items-center ml-1">
        {numberOfCartItems}
      </span>
    </div>
  );
};

export default HeaderCartButton;
