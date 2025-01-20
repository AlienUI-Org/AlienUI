import React from "react";
import { MdInstallDesktop } from "react-icons/md";
import { FcDataConfiguration } from "react-icons/fc";
import { BiCustomize } from "react-icons/bi";
import { MdJoinInner } from "react-icons/md";

function WhyUseAlienUI() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold text-brown-800 sm:text-4xl text-center mb-2">
          Why Use AlienUI?
        </h1>
        <p className="mt-4 text-lg text-gray-800 mb-8 text-center mx-4">
          Build stunning mobile apps effortlessly with ready-to-use,
          customizable components.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center bg-brown-100 rounded-md p-6 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-ou">
            <MdInstallDesktop className="w-14 h-14 pb-4" />
            <h3 className="text-lg font-bold text-brown-800">
              No npm Installation
            </h3>
            <p className="text-gray-600 mt-2">
              Alien UI requires no NPM installations. Simply copy, paste them
              into your React Native project seamlessly.
            </p>
          </div>

          <div className="flex flex-col items-center bg-brown-100 rounded-md p-6 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-ou">
            <FcDataConfiguration className="w-14 h-14 pb-4" />
            <h3 className="text-lg font-bold text-brown-800">
              No Configuration
            </h3>
            <p className="text-gray-600 mt-2">
              Alien UI works out of the box with zero configuration, so you can
              focus on building your app instantly.{" "}
            </p>
          </div>

          <div className="flex flex-col items-center bg-brown-100 rounded-md p-6 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-ou">
            <BiCustomize className="w-14 h-14 pb-4" />
            <h3 className="text-lg font-bold text-brown-800">
              Easy Customization
            </h3>
            <p className="text-gray-600 mt-2">
              Easily customize components with NativeWind&apos;s class utilities
              to match your app&apos;s design.
            </p>
          </div>

          <div className="flex flex-col items-center bg-brown-100 rounded-md p-6 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-ou">
            <MdJoinInner className="w-14 h-14 pb-4" />
            <h3 className="text-lg font-bold text-brown-800">
              Open-Source Contributions
            </h3>
            <p className="text-gray-600 mt-2">
              Alien UI is open-source, inviting developers and designers to
              collaborate and share UI components.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUseAlienUI;
