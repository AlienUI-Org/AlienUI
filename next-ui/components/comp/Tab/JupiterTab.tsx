"use client";
import React from "react";
import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineShoppingCart,
  AiOutlineBarChart,
  AiOutlineAppstore,
} from "react-icons/ai";

const Tab = () => {
  return (
    <div className="flex items-center relative ">
      <div className="absolute -top-1 left-[172px] z-10">
        <div className="bg-black rounded-full p-4 flex items-center justify-center">
          <AiOutlineAppstore size={24} className="text-white" />
        </div>
      </div>

      <div className="flex w-[400px] items-center justify-around bg-zinc-900 rounded-t-3xl px-4 mt-8 relative py-4">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full"></div>

        <button className="flex flex-col items-center">
          <AiOutlineHome size={24} className="text-white" />
          <span className="text-gray-50 text-xs mt-1">Home</span>
        </button>

        <button className="flex flex-col items-center ml-4">
          <AiOutlineContacts size={24} className="text-gray-400" />
          <span className="text-gray-400 text-xs mt-1">Contacts</span>
        </button>

        <div className="w-20"></div>

        <button className="flex flex-col items-center mr-7">
          <AiOutlineShoppingCart size={24} className="text-gray-400" />
          <span className="text-gray-400 text-xs mt-1">Cart</span>
        </button>

        <button className="flex flex-col items-center">
          <AiOutlineBarChart size={24} className="text-gray-400" />
          <span className="text-gray-400 text-xs mt-1">Chart</span>
        </button>
      </div>
    </div>
  );
};

export default Tab;
