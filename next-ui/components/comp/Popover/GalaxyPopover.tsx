"use client";
import React, { useState, useRef, useEffect } from "react";

const Popover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-4 py-2 text-white bg-black rounded"
      >
        Toggle Popover
      </button>

      {isOpen && (
        <div
          ref={popoverRef}
          className="absolute z-10 bottom-full mb-2 w-60 h-auto p-4 bg-white border rounded shadow"
        >
          <p>This is a Galaxy Popover</p>
          <p className="mt-2 text-sm text-gray-500">
            You can put any content here.
          </p>
        </div>
      )}
    </div>
  );
};

export default Popover;
