import React from "react";
import { FaChartBar } from "react-icons/fa";

function PlutoCard() {
  return (
    <div className="flex justify-center">
      <div className="w-3/5 h-52 rounded-2xl bg-black p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-white text-[#24150b] rounded-full mb-6">
          <FaChartBar className="text-black" size={24} />
        </div>
        <p className="text-lg font-bold">Bar chart showing energy usage</p>
      </div>
    </div>
  );
}

export default PlutoCard;
