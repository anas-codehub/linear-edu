"use client";
import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
      <div
        className="bg-white shadow-lg"
        style={{
          width: "210mm",
          height: "297mm",
          padding: "20mm",
        }}
      >
        <div className="flex justify-between items-end gap-6">
          <div className="p-2 px-4 border rounded-md whitespace-nowrap">
            <p className="font-bold text-base">Time: 40min</p>
          </div>

          <div className="relative px-10 py-4 text-center rounded-2xl border-2">
            <div className="absolute inset-1 border-2 rounded-2xl"></div>
            <div className="relative">
              <p className="font-extrabold text-xl tracking-wide">
                LINEAR EDUCATIONAL INSTITUTE
              </p>
              <p className="font-medium mt-2">
                Math 1<sup>st</sup> Paper Exam
              </p>
              <p className="mt-1">Chapter: 7+10</p>
              <p className="mt-1">Instructor: Engr. Tariqul Islam</p>
            </div>
          </div>

          <div className="p-2 px-4 border rounded-md whitespace-nowrap">
            <p className="font-bold text-base">Total Marks: 20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
