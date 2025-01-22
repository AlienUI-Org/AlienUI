import React from "react";
import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineShoppingCart,
  AiOutlineBarChart,
  AiOutlineSetting,
} from "react-icons/ai";

const GalaxyTab = () => {
  return (
    <div className="">
      <div className="flex w-[400px] items-center justify-around bg-black rounded-full py-2">
        <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
          <AiOutlineHome size={24} />
        </div>
        <div className="text-white">
          <AiOutlineContacts size={24} />
        </div>
        <div className="text-white">
          <AiOutlineShoppingCart size={24} />
        </div>
        <div className="text-white">
          <AiOutlineBarChart size={24} />
        </div>
        <div className="text-white">
          <AiOutlineSetting size={24} />
        </div>
      </div>
    </div>
  );
};

export default GalaxyTab;
