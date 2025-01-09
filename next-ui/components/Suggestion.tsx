"use client";
import React, { useState } from "react";

function Suggestion() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // Reset the form
  };

  return (
    <section className="mb-16 flex items-center justify-center px-4">
      <div className="w-full max-w-7xl mx-auto bg-white p-6 py-10 border border-brown-500 rounded-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-brown-800 mb-4 text-center">
          Suggestion & Feedback Box
        </h2>
        {submitted ? (
          <div className="text-green-600 font-medium">
            Thank you for your feedback! We appreciate your input.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-brown-300 rounded-md focus:ring-brown-500 focus:border-brown-500"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-brown-300 rounded-md  focus:ring-brown-500 focus:border-brown-500"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full px-4 py-2 border border-brown-300 rounded-md focus:ring-brown-500 focus:border-brown-500"
                placeholder="Your suggestions or feedback"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-brown-600 text-white py-2 px-4 rounded-md hover:bg-brown-800 focus:outline-none focus:ring-2 focus:ring-brown-500"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Suggestion;
