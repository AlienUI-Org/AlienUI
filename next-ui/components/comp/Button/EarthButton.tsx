import React from "react";
import { PiAlienThin } from "react-icons/pi";

function EarthButton() {
  return (
    <button className="bg-black py-2 px-4 rounded-md flex items-center justify-center w-[200px]">
      <span className="text-white text-base">Earth Button</span>
      <PiAlienThin className="text-xl text-white ml-1" />{" "}
    </button>
  );
}

export default EarthButton;
