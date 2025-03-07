import React from "react";
import Image from "next/image";

function Inspiration() {
  return (
    <section className="mb-16">
      {" "}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl text-center mb-2">
          Inspiration
        </h1>
        <p className="mt-4 text-lg text-gray-800 mb-8 text-center mx-4">
          This project wouldn&apos;t have been possible without the great work
          and inspiration from these libraries.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center border border-black bg-white rounded-md p-6 hover:shadow-md hover:scale-105 transition-transform duration-300 ease-in-ou">
            <Image src="/images/native.png" alt="" width={300} height={300} />
          </div>

          <div className="flex flex-col items-center bg-black rounded-md p-6 hover:shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              src="/images/flowbite1.png"
              alt=""
              width={300}
              height={300}
            />
          </div>

          <div className="flex flex-col items-center border border-black rounded-md p-6 hover:shadow-md hover:scale-105 transition-transform duration-300 ease-in-ou">
            {" "}
            <Image src="/images/hyperui.webp" alt="" width={300} height={300} />
          </div>

          <div className="flex flex-col items-center bg-black rounded-md p-6 hover:shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image src="/images/shadcnui.png" alt="" width={300} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inspiration;
