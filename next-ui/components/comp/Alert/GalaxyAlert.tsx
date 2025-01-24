import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function GalaxyAlert() {
  return (
    <div className="rounded-xl border border-gray-300 bg-green-50 p-4 w-[250px]">
      <div className="flex items-start gap-2">
        <FaCheckCircle className="text-green-600 w-5 h-5" />
        <div className="flex-1">
          <strong className="block text-sm font-semibold text-gray-900">
            Zeltron Whisper
          </strong>
          <p className="mt-1 text-xs text-gray-700">Everything is on track </p>
        </div>
      </div>
    </div>
  );
}

export default GalaxyAlert;
