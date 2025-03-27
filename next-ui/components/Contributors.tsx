import React from "react";
import { contributors } from "@/utils/contributorsData";
import Image from "next/image";

function Contributors() {
  return (
    <section className="max-w-7xl mx-auto px-6 text-center mb-20">
      <h1 className="text-3xl font-bold sm:text-4xl text-center mb-2">
        Contributors
      </h1>
      <p className="mt-4 text-lg text-gray-800 mb-8 text-center mx-4">
        These incredible individuals have contributed their time and expertise
        to make this project possible.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {contributors.map((contributor, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={contributor.avatar}
              alt={contributor.name}
              width={100}
              height={100}
              className="w-24 h-24 rounded-full"
            />
            <span className="mt-3 text-lg font-semibold text-gray-700">
              {contributor.name}
            </span>
            <span className="mt-1 text-sm text-gray-500">
              {contributor.role}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contributors;
