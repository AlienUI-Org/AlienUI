import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const MarsProgressBar = () => {
  return (
    <div className="my-5 px-4">
      <div className="relative w-[400px] mt-4 h-1.5 bg-gray-200 rounded-lg">
        <div className="absolute inset-0 flex justify-between -top-4">
          <div className="flex flex-col items-start flex-1">
            <div className="w-9 h-9 p-2 rounded-full bg-black flex justify-center items-center mb-2">
              <FaCheckCircle size={20} className="text-white" />
            </div>
            <span className="text-xs font-medium text-black">Details</span>
          </div>

          <div className="flex flex-col items-center flex-1">
            <div className="w-9 h-9 p-2 rounded-full bg-black flex justify-center items-center mb-2">
              <FaCheckCircle size={20} className="text-white" />
            </div>
            <span className="text-xs font-medium text-black">Address</span>
          </div>

          <div className="flex flex-col items-end flex-1">
            <div className="w-9 h-9 p-2 rounded-full bg-gray-400 flex justify-center items-center mb-2">
              <FaCheckCircle size={20} className="text-white" />
            </div>
            <span className="text-xs font-medium text-gray-500">Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarsProgressBar;
