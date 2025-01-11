import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <section className="bg-brown-100">
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-24 lg:py-28 flex flex-col items-center md:justify-between">
        {/* Left Content */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-brown-800 sm:text-5xl mb-2">
            AlienUI
          </h1>
          <p className="text-brown-800 text-xl text-center font-semibold">
            Free Open Source NativeWind Components for React Native{" "}
          </p>
          <p className="mt-4 text-lg text-gray-800 text-center font-medium lg:w-[1000px]">
            Alien UI is a collection of free NativeWind components designed
            specifically for React Native mobile apps. With a versatile range of
            components, you can create stunning user interfaces for your next
            mobile app.
          </p>
          <div className="flex items-center gap-3 justify-center mt-6 mb-4">
            <p> ✅ No installation</p>
            <p>✅ No configuration</p>
            <p>✅ No setup</p>
          </div>
          <p>Copy and paste components to build your next mobile app</p>
          <div className="mt-6 flex-row flex items-center gap-2 justify-center">
            <Link href="/comp" prefetch>
              <button className="px-6 py-3 bg-transparent border border-brown-600 text-black hover:text-white font-medium rounded-lg shadow-md  hover:bg-brown-600 transition duration-300 cursor-pointer">
                {" "}
                Get Started
              </button>
            </Link>
            <Link href="https://github.com/khaymanii/AlienUI" prefetch>
              <button className="px-6 py-3 bg-brown-600 hover:bg-transparent text-white hover:text-black font-medium rounded-lg shadow-md border hover:border-brown-800 transition duration-300 cursor-pointer">
                {" "}
                Start Contributing
              </button>{" "}
            </Link>
          </div>
        </div>

        {/* Right Image */}
      </div>
    </section>
  );
}

export default Hero;
