import React from "react";
import Image from "next/image";

function page() {
  return (
    <div>
      {" "}
      <div className="bg-brown-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-md shadow-lg text-center">
          <Image
            src="/images/alienx.png"
            alt="AlienX Logo"
            width={250}
            height={250}
            className="mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold text-customPurple mb-4">AlienX</h1>
          <p className="text-gray-700 text-lg mb-6">
            AlienX is a powerful VS Code snippet extension that generates
            AlienUI components for both React and React Native mobile apps in
            your VS Code environment.
          </p>
          <p className="text-gray-600 mb-6">
            Enhance your development workflow with ready-to-use UI components
            built on Nativewind and Tailwind CSS, making your web and app
            development faster and more efficient.
          </p>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=alienx.alienui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brown-600 text-white px-6 py-3 rounded-full shadow hover:bg-brown-800 transition mb-10"
          >
            Get AlienX on VS Code Marketplace
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;
