"use client";
import { useState, useEffect } from "react";

const InstallVSExtensionModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem("isModalShown");

    if (!hasSeenModal) {
      setIsOpen(true);
      localStorage.setItem("isModalShown", "true");

      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-start justify-center mt-32 z-50">
        <div className="bg-white p-6 rounded-md shadow-lg w-80 text-center relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-3 text-gray-600 hover:text-black text-3xl"
          >
            &times;
          </button>

          <h2 className="text-xl font-bold mb-4">
            Install AlienX VS Code Extension
          </h2>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=AlienUI.alienx"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-800 text-white px-4 py-2 rounded-lg"
          >
            Install Now
          </a>
        </div>
      </div>
    )
  );
};

export default InstallVSExtensionModal;
