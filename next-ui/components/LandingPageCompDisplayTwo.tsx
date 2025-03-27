import React from "react";
import LandingpageAvatar from "./LandingpageAvatar";
import LandingpageSwitch from "./LandingpageSwitch";
import LandingpageSpinner from "./LandingpageSpinner";
import LandingpageCheckbox from "./LandingpageCheckbox";
import Link from "next/link";

export default function LandingPageCompDisplayTwo() {
  return (
    <div className="my-20">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <h1 className="sm:text-4xl text-3xl font-bold">
          Copy-paste components
        </h1>
        <p className="mt-4 text-base text-gray-800">
          Integrate pre-built, high-quality components quickly by copying and
          pasting. Save time, ensure consistency, and customize easily with
          Nativewind classes.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-6">
        <div className="h-72 border border-gray-100 rounded-md flex justify-center items-center">
          <LandingpageAvatar />
        </div>
        <div className="h-72 border border-gray-100 rounded-md flex justify-center items-center">
          <LandingpageSwitch />
        </div>
        <div className="h-72 border border-gray-100 rounded-md flex justify-center items-center">
          <LandingpageSpinner />
        </div>
        <div className="h-72 border border-gray-100 rounded-md flex justify-center items-center">
          <LandingpageCheckbox />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/comp" prefetch>
          <button className="px-4 py-3 bg-purple-800 text-white font-medium rounded-lg shadow-md cursor-pointer">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
