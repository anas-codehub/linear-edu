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
        {/* Header Section */}
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

        {/* Student Information Section */}
        <div className="border-2 border-black rounded-3xl px-6 py-3 mt-8">
          <div className="space-y-2">
            {/* Student Name Row */}
            <div className="flex items-center">
              <span className="font-medium w-36">Student Name</span>
              <span className="mx-4">:</span>
              <div className="flex-1"></div>
            </div>

            {/* ID Row */}
            <div className="flex items-center">
              <span className="font-medium w-36">ID</span>
              <span className="mx-4">:</span>
              <div className="flex-1 flex items-center gap-6">
                <span className="font-semibold">Correct Answer:</span>
                <div className="flex gap-1 flex-wrap">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                    (num) => (
                      <span key={num} className="text-sm">
                        {num}___
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Obtained Marks Row */}
            <div className="flex items-center">
              <span className="font-medium w-36">Obtained Marks</span>
              <span className="mx-4">:</span>
              <div className="flex-1 flex items-center gap-12">
                <span className="font-semibold">Written:</span>
                <span className="font-semibold">MCQ:</span>
                <span className="font-semibold">Correct:</span>
                <span className="font-semibold">Incorrect</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
