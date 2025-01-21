import React from "react";

const EarthTab = () => {
  return (
    <div className="flex w-[400px] items-center justify-around rounded bg-[#ba8463] py-4">
      <div>
        <p className="text-white font-bold">Home</p>
      </div>
      <div>
        <p className="text-white font-bold">Contact</p>{" "}
      </div>
      <div>
        <p className="text-white font-bold">Cart</p>
      </div>
      <div>
        <p className="text-white font-bold">Charts</p>
      </div>
      <div>
        <p className="text-white font-bold">Settings</p>
      </div>
    </div>
  );
};

export default EarthTab;
