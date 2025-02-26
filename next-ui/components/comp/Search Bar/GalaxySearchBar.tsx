import React from "react";
import { GoSearch } from "react-icons/go";

function GalaxySearchBar() {
  return (
    <div className="w-[400px] flex items-center bg-gray-100 rounded-full px-4 py-3">
      <GoSearch size={20} color="gray" />
      <input
        placeholder="Search the galaxy..."
        className="flex-1 ml-2 text-base border-none outline-none bg-transparent "
      />
    </div>
  );
}

export default GalaxySearchBar;
