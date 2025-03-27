import React from "react";

interface BadgeProps {
  text?: string;
  bgColor?: string;
}

const LandingpageBadge: React.FC<BadgeProps> = ({
  text = "Badge",
  bgColor = "bg-black",
}) => {
  return (
    <div className={`px-3 py-1 text-white text-xs rounded-full  ${bgColor}`}>
      {text}
    </div>
  );
};

export default LandingpageBadge;
