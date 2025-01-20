import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const MarsProgressBar = () => {
  return (
    <div className="my-5 px-4">
      <div className="relative w-[400px] mt-4 h-[6px] bg-gray-200 rounded-lg">
        <div className="absolute inset-0 flex justify-between -top-6">
          <div className="flex flex-col items-start flex-1">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center mb-2">
              <FaCheckCircle className="text-white text-lg" />
            </div>
            <span className="text-xs font-medium text-blue-500">Details</span>
          </div>

          <div className="flex flex-col items-center flex-1">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center mb-2">
              <FaCheckCircle className="text-white text-lg" />
            </div>
            <span className="text-xs font-medium text-blue-500">Address</span>
          </div>

          <div className="flex flex-col items-end flex-1">
            <div className="w-10 h-10 rounded-full bg-gray-400 flex justify-center items-center mb-2">
              <FaCheckCircle className="text-white text-lg" />
            </div>
            <span className="text-xs font-medium text-gray-500">Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarsProgressBar;
