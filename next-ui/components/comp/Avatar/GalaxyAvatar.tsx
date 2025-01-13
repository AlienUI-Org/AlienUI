import React from "react";
import Image from "next/image";

function GalaxyAvatar() {
  return (
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex justify-center items-center">
      <Image
        src="/images/alien1.avif"
        alt="Avatar Image"
        width={64}
        height={64}
        className="object-cover"
      />
    </div>
  );
}

export default GalaxyAvatar;
