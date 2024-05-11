import React from "react";
import { IoCloseOutline } from "react-icons/io5";

export const CartItem = (props) => {
  return (
    <div className="flex items-center border-b-[1px] border-[#c1c1c1] pb-2">
      <div className="h-[6rem] w-[6rem]">
        <img src={props.image} className="h-full w-full"></img>
      </div>
      <div className="flex-1 px-1">
        <div className="flex items-center justify-between font-semibold">
          <h3>{props.title}</h3>
          <h3>{`$${props.price}`}</h3>
        </div>
        <div className="flex items-center justify-between text-sm text-[#545454] pb-1">
          <span>Color: black</span>
          <button onClick={props.onClear}>
            <IoCloseOutline className="text-xl" />
          </button>
        </div>
        <div className="flex rounded-lg overflow-hidden w-fit border-[1px] border-[#c1c1c1]">
          <button
            className="py-[5px] px-3 bg-[#F5F5F5] text-[#545454] hover:bg-[#e8e8e8] transition-all"
            onClick={props.onRemove}
          >
            -
          </button>
          <span className="py-[5px] px-3 bg-[#F5F5F5]">{props.amount}</span>
          <button
            className="py-[5px] px-3 bg-[#F5F5F5] text-[#545454] hover:bg-[#e8e8e8] transition-all"
            onClick={props.onAdd}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
