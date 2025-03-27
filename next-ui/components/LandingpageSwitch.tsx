"use client";
import React, { useState } from "react";

const Switch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div
      className={`relative inline-flex h-7 w-14 items-center rounded-full cursor-pointer transition ${
        isEnabled ? "bg-black" : "bg-gray-400"
      }`}
      onClick={() => setIsEnabled(!isEnabled)}
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white transition ${
          isEnabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </div>
  );
};

export default Switch;
