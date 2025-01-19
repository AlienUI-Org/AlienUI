import React from "react";
import { MdJoinInner } from "react-icons/md";

function JupiterCard() {
  return (
    <div className="flex flex-col items-center text-center bg-brown-50 p-7 shadow-md w-[300px] h-64">
      <MdJoinInner className="w-14 h-14 pb-4 text-black" />
      <h3 className="text-lg font-bold text-brown-800">
        Open-Source Contributions
      </h3>
      <p className="text-gray-600 mt-2 text-center">
        Alien UI is open-source, inviting developers to collaborate and share
        components to improve mobile app design.{" "}
      </p>
    </div>
  );
}

export default JupiterCard;
