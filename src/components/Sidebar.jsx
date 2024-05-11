import React from "react";
import { IoColorFilterOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="flex-1 max-md:hidden">
      <div className="text-lg font-bold h-10 flex items-center gap-2">
        <IoColorFilterOutline></IoColorFilterOutline>Filter
      </div>
      <div className="pt-4">
        <div>
          <h3 className="font-semibold">CATEGORIES</h3>
          <ul className="text-sm text-[#807E7E]">
            <li className="pt-2 cursor-pointer transition-[.3s] hover:text-[#141718]">
              All Rooms
            </li>
            <li className="pt-2 cursor-pointer transition-[.3s] hover:text-[#141718]">
              Living Room
            </li>
            <li className="pt-2 cursor-pointer transition-[.3s] hover:text-[#141718]">
              Bedroom
            </li>
            <li className="pt-2 cursor-pointer transition-[.3s] hover:text-[#141718]">
              Kitchen
            </li>
            <li className="pt-2 cursor-pointer transition-[.3s] hover:text-[#141718]">
              Bathroom
            </li>
            <li className="pt-2 cursor-pointer transition-[.3s] hover:text-[#141718]">
              Dinning
            </li>
            <li className="pt-2 cursor-pointer transition-[.3s] hover:text-[#141718]">
              Outdoor
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold pt-4">PRICE</h3>
          <ul className="text-sm text-[#807E7E]">
            <li className="pt-2 cursor-pointer transition-[.3s] hover:text-[#141718]">
              All Price
            </li>
            <li className="pt-2 cursor-pointer transition-[.3s] hover:text-[#141718]">
              $0.00 - 99.99
            </li>
            <li className="pt-2 cursor-pointer transition-[.3s] hover:text-[#141718]">
              $100.00 - 199.99
            </li>
            <li className="pt-2 cursor-pointer transition-[.3s] hover:text-[#141718]">
              $200.00 - 299.99
            </li>
            <li className="pt-2 cursor-pointer transition-[.3s] hover:text-[#141718]">
              $300.00 - 399.99
            </li>
            <li className="pt-2 cursor-pointer transition-[.3s] hover:text-[#141718]">
              $400.00+
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
