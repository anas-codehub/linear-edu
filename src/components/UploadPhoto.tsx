"use client";

import React from "react";
import { ImageIcon, X } from "lucide-react";
import Image from "next/image";

const UploadPhoto = () => {
  return (
    <div className="mb-8 p-4 w-full max-w-xs mx-auto border border-default-300 dark:border-gray-700 rounded-lg shadow-sm dark:bg-gray-900">
      <h3 className="text-lg font-semibold mb-4 text-center text-gray-800 dark:text-gray-100">
        Upload Photo
      </h3>

      {/* Drop & Click Area */}
      <div
        role="button"
        tabIndex={0}
        className="w-30 h-30 mx-auto rounded-full border-2 border-dashed border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-200 group focus:outline-none"
      >
        <div className="flex flex-col items-center justify-center text-gray-400 group-hover:text-indigo-500">
          <ImageIcon className="w-6 h-6 mb-1" />
          <span className="text-[10px] text-center">
            Click or Drag to upload
          </span>
        </div>
      </div>

      {/* Mock File Info & Remove Button */}
      <div className="mt-3 text-center">
        <p className="text-xs text-gray-600 dark:text-gray-300 truncate">
          example.jpg • 1.2MB
        </p>
        <button
          type="button"
          className="mt-1 inline-flex items-center gap-1 text-xs text-red-500 hover:underline"
        >
          <X className="w-4 h-4" />
          Remove
        </button>
      </div>

      {/* Hidden Input */}
      <input type="file" accept="image/*" className="hidden" />
    </div>
  );
};

export default UploadPhoto;
