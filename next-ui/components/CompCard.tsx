import React from "react";

interface CompCardProps {
  name: string;
  icon: React.ReactElement; // Expect an icon component
}

function CompCard({ name, icon }: CompCardProps) {
  return (
    <div className="lg:w-72 w-full h-56 rounded-md flex items-center justify-center shadow-md border border-brown-600 hover:scale-105 transition-transform duration-300 ease-in-out relative">
      <div className="absolute top-2 right-2 text-brown-800 text-4xl">
        {icon}
      </div>
      <p className="text-center font-semibold text-xl text-brown-800">{name}</p>
    </div>
  );
}

export default CompCard;
