import React, { useState } from "react";

interface ModalProps {
  bgColor?: string;
}

const Modal: React.FC<ModalProps> = ({ bgColor = "bg-black" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex items-center justify-center">
      {/* Open Modal Button */}
      <button
        onClick={openModal}
        className={`px-4 py-2 text-white rounded-md ${bgColor}`}
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-md p-6 bg-white rounded-md shadow-lg">
            <div className="flex items-center justify-between pb-4 border-b">
              <h2 className="text-xl font-semibold">Open Modal</h2>
              <button onClick={closeModal} className="text-black">
                ✖
              </button>
            </div>

            <div className="py-4">
              <p className="text-gray-600">
                This is a default galaxy modal component that highlights key
                information.
              </p>
            </div>

            {/* Close Button */}
            <div className="flex justify-end pt-4 border-t">
              <button
                onClick={closeModal}
                className={`px-4 py-2 text-white rounded-md ${bgColor}`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
