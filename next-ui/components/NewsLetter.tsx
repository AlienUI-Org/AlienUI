"use client";
import React from "react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebaseConfig/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewsLetter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.dismiss();

    try {
      await addDoc(collection(db, "newsletter"), {
        email,
        createdAt: new Date(),
      });

      toast.success("Newsletter subscribed successfully!", {
        toastId: "subscribe-success",
      });

      setEmail("");
    } catch (err) {
      console.error("Error subscribing :", err);
      toast.error("Failed to subscribe. Please try again.", {
        toastId: "subscribe-error",
      });
    }
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl text-center mb-2">
          Stay Updated with AlienUI
        </h1>
        <p className="mt-4 text-lg text-white mb-8 text-center mx-4">
          Subscribe to our newsletter and never miss an update! Get the latest
          components and community news delivered straight to your inbox.
        </p>

        <form
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full sm:w-2/3 px-4 py-3 rounded-md text-gray-800 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brown-700"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-purple-800 font-medium text-white rounded-lg shadow-md "
          >
            Subscribe
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
      />
    </section>
  );
}

export default NewsLetter;
