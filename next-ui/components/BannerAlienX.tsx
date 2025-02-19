import React from "react";
import Link from "next/link";

function BannerAlienX() {
  return (
    <section className="w-full h-14 bg-black text-center flex justify-center items-center">
      <p className="text-sm font-semibold text-white">
        Introducing <span className="font-bold">AlienX</span> – The next
        evolution of UI design.
        <Link
          href="https://github.com/khaymanii"
          className="underline hover:text-yellow-300 transition ml-1"
        >
          Check it out on VS Code
        </Link>
      </p>
    </section>
  );
}

export default BannerAlienX;
