import Suggestion from "@/components/Suggestion";
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
          ⚠️ Before using these components in your React Native app:
          <ul className="list-disc ml-6 mt-2 text-sm text-red-500 font-semibold">
            <li>
              If you plan to use <strong>NativeWind</strong> for styling, ensure
              your app is properly configured. Check the{" "}
              <a
                href="https://nativewind.dev/docs/installation"
                className="text-blue-600 underline"
              >
                NativeWind configuration guide
              </a>
              .
            </li>
            <li>
              If you’re using the{" "}
              <strong>StyleSheet API or Inline-Styling</strong>, no additional
              setup is needed.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 mb-16 mx-4">
        {Object.values(components).map((comp) => (
          <CompCard key={comp.id} name={comp.name} />
        ))}
      </div>
      <Suggestion />
    </section>
  );
}

export default page;
