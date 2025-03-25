import React from "react";
import Link from "next/link";
import { GiAlienStare } from "react-icons/gi";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-purple-500 via-black to-black">
      <div className="max-w-7xl mx-auto px-4 py-28 md:py-24 lg:py-32 flex flex-col items-center md:justify-between">
        <div className="flex flex-col justify-center items-center">
          <div className="w-28 h-8 py-3 px-2 rounded-full  bg-black flex justify-center items-center gap-1 mb-4">
            {" "}
            <p className="text-base font-bold text-white">AlienUI</p>
            <GiAlienStare size={18} className="text-white animate-pulse" />
          </div>

          <p className="text-white lg:text-xl text-lg text-center font-semibold">
            UI component library built on Nativewind for React Native
          </p>
          <p className="mt-4 lg:text-5xl text-3xl text-white text-center font-bold lg:w-[1000px]">
            Build{" "}
            <span className="bg-gradient-to-t from-purple-800 via-gray-300 to-white bg-clip-text text-transparent">
              Stunning
            </span>{" "}
            Mobile apps
          </p>

          <div className="mt-6 flex-row flex items-center gap-3 justify-center">
            <Link href="/comp" prefetch>
              <button className="px-4 py-3 bg-white  font-medium rounded-lg shadow-md cursor-pointer">
                Get Started
              </button>
            </Link>
            <Link href="https://github.com/khaymanii/AlienUI" prefetch>
              <button className="px-4 py-3 bg-purple-800 text-white font-medium rounded-lg shadow-md cursor-pointer">
                Start Contributing
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
