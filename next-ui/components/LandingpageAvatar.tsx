import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex justify-center items-center">
      <Image
        src="/images/alien1.avif"
        alt="Avatar Image"
        width={100}
        height={100}
        className="object-cover"
      />
    </div>
  );
};

export default Avatar;
