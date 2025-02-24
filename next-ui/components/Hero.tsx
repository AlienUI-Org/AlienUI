import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-brown-800 via-brown-400 to-brown-300">
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-24 lg:py-28 flex flex-col items-center md:justify-between">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white sm:text-5xl mb-2">
            AlienUI
          </h1>
          <p className="text-white text-xl text-center font-semibold">
            Free open-source UI component library for React Native
          </p>
          <p className="mt-4 text-lg text-white text-center font-medium lg:w-[1000px]">
            AlienUI is an open-source UI component library built on NativeWind
            for React Native apps. It leverages native tags for seamless
            integration and maintains zero to minimal dependencies, enabling
            high-performance, and stunning interfaces with ease.
          </p>
          <div className="flex items-center gap-3 justify-center mt-6 mb-4 text-white">
            <p>✅ No npm installation</p>
            <p>✅ No configuration</p>
            <p>✅ No setup</p>
          </div>
          <p className="text-white">
            Say no to dependency issues and complex setup. Just copy and paste
            components to build your next mobile app.
          </p>
          <div className="mt-6 flex-row flex items-center gap-2 justify-center">
            <Link href="/comp" prefetch>
              <button className="px-6 py-3 bg-white text-brown-800  font-medium rounded-lg shadow-md cursor-pointer">
                Get Started
              </button>
            </Link>
            <Link href="https://github.com/khaymanii/AlienUI" prefetch>
              <button className="px-6 py-3 bg-gradient-to-r from-brown-700 via-brown-600 to-black text-white font-medium rounded-lg shadow-md cursor-pointer">
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
