"use client";
import React, { useState } from "react";
import LandingpageButton from "./LandingpageButton";
import LandingpageBadge from "./LandingpageBadge";
import LandingpageProgressbar from "./LandingpageProgressbar";
import LandingpageModal from "./LandingpageModal";

export default function LandingPageCompDisplayOne() {
  const [selectedColor, setSelectedColor] = useState("bg-black"); // Default background

  // Define the color options
  const colors = [
    { name: "black", class: "bg-black" },
    { name: "purple", class: "bg-purple-900" },
    { name: "blue", class: "bg-blue-800" },
    { name: "red", class: "bg-red-700" },
  ];

  return (
    <div className="mt-16 overflow-hidden">
      {/* Color Palette */}
      <div className="flex justify-center gap-4 mb-10">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-10 h-10 rounded-full cursor-pointer ${color.class}`}
            onClick={() => setSelectedColor(color.class)} // Update selected color
          ></div>
        ))}
      </div>

      {/* Components with Dynamic Background */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-6">
        <div className="h-72 border border-gray-100 rounded-md flex justify-center items-center">
          <LandingpageButton label="Button" bgColor={selectedColor} />
        </div>
        <div className="h-72 border border-gray-100 rounded-md flex justify-center items-center">
          <LandingpageBadge text="Badge" bgColor={selectedColor} />
        </div>
        <div className="h-72 border border-gray-100 rounded-md flex justify-center items-center">
          <LandingpageProgressbar bgColor={selectedColor} />
        </div>
        <div className="h-72 border border-gray-100 rounded-md flex justify-center items-center">
          <LandingpageModal bgColor={selectedColor} />
        </div>
      </div>
    </div>
  );
}
