import React, { useState } from "react";
import { GiVortex } from "react-icons/gi";

function VortexInput() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-72">
      <div className={`
        absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
        rounded-lg opacity-20 blur-lg transition-all duration-300
        ${isFocused ? 'scale-105 opacity-30' : 'scale-100'}
      `} />
      
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Enter galactic coordinates..."
          className={`
            w-full bg-black/80 text-white px-4 py-2 rounded-lg
            border border-purple-500/30 outline-none
            placeholder-gray-400 transition-all duration-300
            focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20
          `}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <GiVortex 
          className={`
            absolute right-3 w-5 h-5 transition-all duration-300
            ${isFocused ? 'text-purple-400 rotate-180' : 'text-gray-400'}
          `}
        />
      </div>
    </div>
  );
}

export default VortexInput; 