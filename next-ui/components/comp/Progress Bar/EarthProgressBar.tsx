import React from "react";

function EarthProgressBar() {
  return (
    <div>
      <div className="w-[400px] mt-4 h-2 overflow-hidden rounded-full bg-gray-200">
        <div className="h-full w-2/3 rounded-full bg-black"></div>
      </div>
    </div>
  );
}

export default EarthProgressBar;
