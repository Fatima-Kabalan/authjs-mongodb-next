// components/Dialog.tsx
"use client";

import React, { useState } from "react";

type DialogProps = {
  message: string;
  onConfirm: () => void;
};

export function Dialog({ message, onConfirm }: DialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    setIsOpen(false);
    onConfirm();
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="text-red-500">
        Sign Out
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md space-y-4">
            <p className="text-center text-lg">{message}</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirm}
                className="bg-red-500 text-white rounded-lg px-4 py-2"
              >
                Confirm
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-300 text-black rounded-lg px-4 py-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
