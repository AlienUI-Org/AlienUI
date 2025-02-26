"use client";
import React from "react";
import CompCard from "@/components/CompCard";
import { components } from "@/utils/data";

function page() {
  return (
    <section className="max-w-7xl mx-auto my-10">
      <div className="mb-16">
        {" "}
        <h1 className="text-3xl font-bold text-brown-800 sm:text-4xl text-center mb-2">
          Components
        </h1>{" "}
        <p className="mt-4 text-lg text-gray-800 text-center mx-4">
          Explore a wide range of customizable and ready-to-use components
          designed specifically for building stunning and functional mobile
          apps. Each component is optimized for flexibility, ensuring seamless
          integration into your projects
        </p>
        <div className="lg:mx-10 mx-4 mt-6">
          <div className="rounded-xl border-l-4 border-yellow-500 bg-yellow-50 p-4 w-full mt-2">
            <p className="mt-1 text-base">
              Ensure your app is properly configured to use nativewind
              utility classes. Check the{" "}
              <a
                href="https://www.nativewind.dev"
                className="text-blue-600 underline"
              >
                NativeWind configuration guide
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 mb-16 mx-4">
        {Object.values(components).map((comp) => {
          return <CompCard key={comp.id} name={comp.name} icon={comp.icon} />;
        })}
      </div>
    </section>
  );
}

export default page;
