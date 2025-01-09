import React from "react";

function NewsLetter() {
  return (
    <section className="py-20 text-black bg-brown-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-brown-800 sm:text-4xl text-center mb-2">
          Stay Updated with AlienUI
        </h1>
        <p className="mt-4 text-lg text-gray-600 mb-8 text-center mx-4">
          Subscribe to our newsletter and never miss an update! Get the latest
          components and community news delivered straight to your inbox.
        </p>

        {/* Form */}
        <form className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-2/3 px-4 py-3 rounded-md text-gray-800 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brown-700"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-brown-600 hover:bg-brown-800 text-white rounded-md shadow-md focus:outline-none focus:ring-2"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsLetter;
