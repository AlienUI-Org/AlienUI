import React from "react";
import Image from "next/image";
import { PiAlienBold } from "react-icons/pi";

function EarthAvatar() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex justify-center items-center">
        <Image
          src="/images/alien1.avif"
          alt="Avatar Image"
          width={64}
          height={64}
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-xs text-gray-700">Good morning</p>
        <div className="flex items-center">
          <p className="font-semibold text-base mr-1">Zyphorax</p>
          <PiAlienBold />
        </div>
      </div>
    </div>
  );
}

export default EarthAvatar;
