import React, { useState } from "react";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { TfiLayoutColumn2Alt } from "react-icons/tfi";
import { MdKeyboardArrowDown } from "react-icons/md";

const Toolbar = () => {
  const [activeItem, setActiveItem] = useState(1);
  const handleClick = (itemNum) => {
    setActiveItem(itemNum);
  };

  return (
    <div className="flex">
      <div className="flex mr-10 items-center">
        Sort by
        <MdKeyboardArrowDown className="ml-2"></MdKeyboardArrowDown>
      </div>
      <ul className="flex items-center text-[#545454]">
        <li
          className={`p-2 border-[1px] mr-[-1px] cursor-pointer duration-300 ${
            activeItem === 1 ? "text-[#141718] bg-[#E8ECEF]" : ""
          }`}
          onClick={() => handleClick(1)}
        >
          <TfiLayoutGrid3Alt></TfiLayoutGrid3Alt>
        </li>
        <li
          className={`p-2 border-[1px] mr-[-0.5px] cursor-pointer duration-300 ${
            activeItem === 2 ? "text-[#141718] bg-[#E8ECEF]" : ""
          }`}
          onClick={() => handleClick(2)}
        >
          <TfiLayoutGrid2Alt></TfiLayoutGrid2Alt>
        </li>
        <li
          className={`p-2 border-[1px] mr-[-1px] cursor-pointer duration-300 ${
            activeItem === 3 ? "text-[#141718] bg-[#E8ECEF]" : ""
          }`}
          onClick={() => handleClick(3)}
        >
          <TfiLayoutColumn2Alt></TfiLayoutColumn2Alt>
        </li>
        <li
          className={`p-2 border-[1px] cursor-pointer duration-300 ${
            activeItem === 4 ? "text-[#141718] bg-[#E8ECEF]" : ""
          }`}
          onClick={() => handleClick(4)}
        >
          <TfiLayoutColumn2Alt></TfiLayoutColumn2Alt>
        </li>
      </ul>
    </div>
  );
};

export default Toolbar;
