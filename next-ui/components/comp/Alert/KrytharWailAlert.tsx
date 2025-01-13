import React from "react";

function KrytharWailAlert() {
  return (
    <div className="rounded-xl border-l-4 border-red-500 bg-red-50 p-4 w-[300px]">
      <strong className="block text-lg font-bold text-red-800">
        Krythar Wail{" "}
      </strong>
      <p className="mt-1 text-sm text-red-700">
        Something is wrong. There is a critical error.
      </p>
    </div>
  );
}

export default KrytharWailAlert;
