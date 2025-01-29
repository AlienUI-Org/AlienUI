import React from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function MarsCard() {
  return (
    <section>
      <div className="w-[400px] h-auto py-8 rounded-3xl border border-black flex flex-col items-center">
        <div className="w-28 h-auto p-2 border border-white bg-black rounded-full mb-4 flex items-center justify-between">
          <Image src="/icon/flag.svg" alt="Eye icon" width={28} height={28} />
          <span className="text-white ml-2">USD</span>
          <MdOutlineKeyboardArrowDown className="text-white" size={28} />
        </div>
        <div className="flex gap-2 mb-2">
          <h1 className="text-base">Account balance</h1>
          <Image src="/icon/eye.svg" alt="Eye icon" width={24} height={24} />
        </div>
        <h1 className="text-5xl font-semibold mb-4">
          $150,000.<span className="text-4xl text-gray-500">00</span>
        </h1>
        <div className="flex gap-2 mb-4">
          <Image src="/icon/copy.svg" alt="Eye icon" width={24} height={24} />
          <h1 className="text-base">0771224074</h1>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="w-40 py-3 rounded-full bg-black flex items-center justify-center gap-2 cursor-pointer">
            <span className="text-white text-base font-semibold">Deposit</span>
            <Image
              src="/icon/import.svg"
              alt="Import icon"
              width={24}
              height={24}
            />
          </div>
          <div className="w-40 py-3 rounded-full bg-black flex items-center justify-center gap-2 cursor-pointer">
            <span className="text-white text-base font-semibold">Transfer</span>
            <Image
              src="/icon/export.svg"
              alt="Export icon"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarsCard;
