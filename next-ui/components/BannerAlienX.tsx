import React from "react";
import Link from "next/link";

function BannerAlienX() {
  return (
    <section className="w-full h-14 bg-purple-800 text-center sticky top-0 z-50 flex justify-center items-center">
      <p className="text-xs lg:text-sm font-semibold text-white">
        Introducing <span className="font-bold">AlienX</span> extension – The
        next evolution of UI development.
        <Link
          href="https://marketplace.visualstudio.com/items?itemName=AlienUI.alienx"
          className="underline hover:text-yellow-300 transition ml-1"
        >
          Check it out on VS Code
        </Link>
      </p>
    </section>
  );
}

export default BannerAlienX;
