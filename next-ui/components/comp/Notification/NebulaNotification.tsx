import React from "react";
import { GiAlienStare } from "react-icons/gi";

function NebulaNotification() {
return (
<div className="w-80 bg-gradient-to-r from-purple-900 via-indigo-900 to-black p-4 rounded-lg shadow-lg border border-purple-500/20">
<div className="flex items-start space-x-4">
<div className="flex-shrink-0 bg-purple-500/20 p-2 rounded-full">
<GiAlienStare className="w-6 h-6 text-purple-400 animate-pulse" />
</div>

<div className="flex-1">  
      <div className="flex items-center justify-between">  
        <p className="text-purple-300 font-semibold">Alien Signal Detected</p>  
        <span className="text-purple-400/60 text-xs">Now</span>  
      </div>  
        
      <p className="mt-1 text-sm text-purple-200/80">  
        Unknown transmission received from the Andromeda galaxy. Decoding sequence initiated.  
      </p>  
        
      <div className="mt-3 flex items-center space-x-3">  
        <button className="px-3 py-1 text-xs font-medium text-purple-200 bg-purple-500/20 rounded-full hover:bg-purple-500/30 transition-colors">  
          Decode Now  
        </button>  
        <button className="px-3 py-1 text-xs font-medium text-purple-300/70 hover:text-purple-200 transition-colors">  
          Dismiss  
        </button>  
      </div>  
    </div>  
  </div>  
</div>

);
}

export default NebulaNotification;
