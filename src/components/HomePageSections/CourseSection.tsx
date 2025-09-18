"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseSection = () => {
  const courses = [
    {
      src: "/homepage/pic2.png",
      title: "গণিত কোর্স",
      description: "প্রাথমিক থেকে উচ্চতর গণিতের সম্পূর্ণ কোর্স",
    },
    {
      src: "/homepage/pic2.png",
      title: "বিজ্ঞান কোর্স",
      description: "বিজ্ঞানের সকল শাখার উপর বিশেষ কোর্স",
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0  -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-1">
            আমাদের কোর্স সমূহ
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-brand-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl bg-white group"
            >
              <div className="relative">
                <Image
                  src={course.src}
                  alt={course.title}
                  width={1000}
                  height={1000}
                  className="object-contain group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-brand-1">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Link
                  href="#"
                  className="font-medium inline-flex items-center text-brand-2"
                >
                  বিস্তারিত জানুন
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
