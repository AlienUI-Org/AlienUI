"use client";
import React, { useState, useEffect } from "react";

interface SuccessToastProps {
  onClose: () => void;
}

const SuccessToast: React.FC<SuccessToastProps> = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-5 right-5 z-50 px-4 py-2 self-center flex justify-between items-center bg-green-50 border-b-4 border-green-500  shadow-lg">
      <div>
        <p className="text-sm mb-1">Operation successful!</p>
        <p className="text-sm">Moving to the next planet</p>
      </div>
      <button onClick={onClose} className="ml-4 font-bold">
        ×
      </button>
    </div>
  );
};

const EarthToast = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => setShowToast(true)}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Click me
      </button>
      {showToast && <SuccessToast onClose={() => setShowToast(false)} />}
    </div>
  );
};

export default EarthToast;
