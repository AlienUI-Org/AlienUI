import React from "react";

interface ProgressbarProps {
  bgColor?: string;
}

const LandingpageProgressbar: React.FC<ProgressbarProps> = ({
  bgColor = "bg-black",
}) => {
  return (
    <div className="w-[300px] mt-4 h-2 overflow-hidden rounded-full bg-gray-200">
      <div className={`h-full w-2/4 rounded-full ${bgColor}`}></div>
    </div>
  );
};

export default LandingpageProgressbar;
