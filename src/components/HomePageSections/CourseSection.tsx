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

  const colors = [
    "#1E40AF",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
    "#06B6D4",
  ];
  const darkColors = [
    "#60A5FA",
    "#059669",
    "#D97706",
    "#DC2626",
    "#A78BFA",
    "#06B6D4",
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E0EBFF] via-[#FFF5E6] to-[#E0EBFF] dark:from-[#1A202C] dark:via-[#3B1A1A] dark:to-[#1A202C] animate-gradient-slow -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E40AF] dark:text-[#60A5FA]">
            আমাদের কোর্স সমূহ
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#1E40AF] via-[#10B981] to-[#F59E0B]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl bg-gradient-to-b from-[#E6F0FF] via-[#F0F8E6] to-[#E6F0FF] dark:from-[#2A2E3B] dark:via-[#3B2A2A] dark:to-[#2A2E3B] group"
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
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: colors[index % colors.length] }}
                >
                  {course.title}
                </h3>
                <p className="text-[#6B7280] dark:text-[#A1A1AA] mb-4">
                  {course.description}
                </p>
                <Link
                  href="#"
                  className="font-medium inline-flex items-center"
                  style={{
                    color: colors[(index + 1) % colors.length],
                  }}
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
