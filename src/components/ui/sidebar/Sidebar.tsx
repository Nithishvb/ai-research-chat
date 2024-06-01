import React from "react";
import { GoPlus } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="w-[300px] border border-r min-h-screen p-4">
      <div>
        <h1 className="font-bold text-[18px] ml-2 cursor-pointer">unriddle</h1>
      </div>
      <div className="flex items-center justify-between mt-4 gap-4">
        <div className="flex items-center gap-1 flex-1 rounded-full py-2 px-2 hover:bg-gray-200 cursor-pointer transition	duration-150 ease-in">
          <GoPlus size={20} className="text-gray-500" />
          <span className="text-[14px] text-gray-500">New</span>
        </div>
        <div>
          <IoIosSearch size={18} className="text-gray-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
