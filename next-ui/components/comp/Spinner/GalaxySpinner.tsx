import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-12 w-12 border-4 border-black border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
