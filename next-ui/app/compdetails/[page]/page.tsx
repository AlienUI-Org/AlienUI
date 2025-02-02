/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { BsClipboard2Heart } from "react-icons/bs";
import { components } from "@/utils/data";

const Page = () => {
  const params = useParams();
  const id = params.page;

  const component = Object.values(components).find((comp) => comp.name === id);

  if (!component) {
    return (
      <div className="text-center text-xl text-red-500 mt-20">
        Component not found!
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto my-16 px-4 z-1">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brown-800 sm:text-4xl text-center">
          {component.name}
        </h1>
        <p className="mt-4 text-lg text-gray-800 text-center">
          {component.description}
        </p>
      </div>
      {component.variants.map((variant, index) => (
        <VariantBlock key={index} variant={variant} />
      ))}
    </section>
  );
};

const VariantBlock = ({ variant }: { variant: any }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(variant.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold text-brown-800 sm:text-3xl">
        {variant.name}
      </h1>
      <p className="mt-2 text-md text-gray-800">{variant.description}</p>

      {/* Full-screen Code Block */}
      <div className="my-6 w-full relative rounded-lg overflow-auto bg-black p-4">
        <SyntaxHighlighter
          language="jsx"
          style={duotoneLight}
          className="rounded-lg h-[400px]"
        >
          {variant.code}
        </SyntaxHighlighter>
        <BsClipboard2Heart
          onClick={handleCopy}
          className="absolute lg:top-8 lg:right-10 top-8 right-6 text-black text-xl cursor-pointer"
        />
        {copied && (
          <span className="absolute lg:top-8 lg:right-16 top-8 right-12  text-black text-[10px] font-semibold">
            Copied!
          </span>
        )}
      </div>
      <div className="">
        <h1 className="text-xl font-semibold text-brown-800 sm:text-2xl">
          Preview
        </h1>
        <div className="lg:w-1/2 w-full py-10 px-6 flex flex-col items-center justify-center rounded-md h-auto border border-black mt-2">
          {variant.render}
        </div>
        <div className="mt-1">
          <p className="text-sm font-medium">{variant.designer}</p>
          <p className="text-sm">{variant.developer}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
