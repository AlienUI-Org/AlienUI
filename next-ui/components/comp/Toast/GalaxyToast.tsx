"use client";
import React, { useState, useEffect } from "react";

interface SuccessToastProps {
  message: string;
  onClose: () => void;
}

const SuccessToast: React.FC<SuccessToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-5 right-5 z-50 px-4 py-2 bg-green-500 text-white rounded shadow-lg">
      {message}
      <button onClick={onClose} className="ml-4 font-bold">
        ×
      </button>
    </div>
  );
};

const GalaxyToast = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => setShowToast(true)}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Click me to show success toast
      </button>
      {showToast && (
        <SuccessToast
          message="Operation successful!"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default GalaxyToast;
