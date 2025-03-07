"use client";
import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebaseConfig/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Suggestion() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    try {
      await addDoc(collection(db, "suggestion"), {
        name,
        email,
        message,
        createdAt: new Date(),
      });

      toast.success(
        "Suggestion sent successfully, Thank you for your feedback!"
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error submitting suggestion:", err);
      toast.error("Failed to send the message. Please try again.");
    }
  };

  return (
    <section className="mb-16 flex items-center justify-center px-4">
      <div className="w-full max-w-7xl mx-auto bg-white p-6 py-10 border border-black rounded-lg">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Suggestion & Feedback Box
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
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
              className="mt-1 block w-full px-4 py-2 border border-black rounded-md "
              placeholder="Your Name"
              required
            />
          </div>

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
              className="mt-1 block w-full px-4 py-2 border border-black rounded-md"
              placeholder="Your Email"
              required
            />
          </div>

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
              className="mt-1 block w-full px-4 py-2 border border-black rounded-md"
              placeholder="Your suggestions or feedback"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-800 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </section>
  );
}

export default Suggestion;
