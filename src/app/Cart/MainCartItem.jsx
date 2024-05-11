import React from "react";
import { IoCloseOutline } from "react-icons/io5";


const MainCartItem = (props) => {
  const subtotal = (props.price * props.amount).toFixed(2);

  return (
    <div className="flex items-center justify-between border-b-[1px] border-[#c1c1c1] py-2">
      <div className="flex">
        <div className="h-[6rem] w-[6rem]">
          <img src={props.image} className="h-full w-full"></img>
        </div>
        <div className="pl-2 py-2">
          <h3 className="font-semibold">{props.title}</h3>
          <span className="text-sm text-[#545454]">Color: black</span>
          <button onClick={props.onClear} className="text-[#545454] flex items-center">
            <IoCloseOutline className="text-xl" /> Remove
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex rounded-lg overflow-hidden w-fit border-[1px] border-[#c1c1c1]">
          <button onClick={props.onRemove} className="py-[5px] px-[12px] bg-[#F5F5F5] text-[#545454] hover:bg-[#e8e8e8] transition-all">
            -
          </button>
          <span className="py-[5px] px-3 bg-[#F5F5F5]">{props.amount}</span>
          <button onClick={props.onAdd} className="py-[5px] px-[10px] bg-[#F5F5F5] text-[#545454] hover:bg-[#e8e8e8] transition-all">
            +
          </button>
        </div>
        <div className="w-20 text-end">{`$${props.price}`}</div>
        <div className="w-20 text-end font-medium">{`$${subtotal}`}</div>
      </div>
    </div>
  );
};

export default MainCartItem;
