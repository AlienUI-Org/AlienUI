import React from "react";
import { MdJoinInner } from "react-icons/md";

const Card = () => {
  return (
    <div className="flex flex-col items-center text-center bg-black p-7 shadow-md w-[260px] h-60">
      <MdJoinInner className="w-10 h-10 pb-4 text-white" />
      <h3 className="text-sm font-bold text-white">
        Open-Source Contributions
      </h3>
      <p className="text-white text-sm mt-2 text-center">
        Alien UI is open-source, inviting developers to collaborate and share
        components to improve mobile app design.
      </p>
    </div>
  );
};

export default Card;
