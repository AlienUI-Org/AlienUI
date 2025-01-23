import React from "react";

const EarthTab = () => {
  return (
    <div className="flex w-[400px] items-center justify-around rounded bg-black py-4">
      <div>
        <p className="text-white">Home</p>
      </div>
      <div>
        <p className="text-white">Contact</p>{" "}
      </div>
      <div>
        <p className="text-white">Cart</p>
      </div>
      <div>
        <p className="text-white">Charts</p>
      </div>
      <div>
        <p className="text-white">Settings</p>
      </div>
    </div>
  );
};

export default EarthTab;
