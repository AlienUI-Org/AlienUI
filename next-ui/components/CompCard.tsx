"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface CompCardProps {
  name: string;
  icon: React.ReactNode;
}

function CompCard({ name, icon }: CompCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/compdetails/${name}`);
  };
  return (
    <div
      onClick={handleClick}
      className="relative lg:w-72 w-full h-56 rounded-md flex items-center justify-center shadow-md border border-black hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
    >
      <div className="absolute top-2 right-2 text-4xl">{icon}</div>
      <p className="text-center font-semibold text-xl">{name}</p>
    </div>
  );
}

export default CompCard;
