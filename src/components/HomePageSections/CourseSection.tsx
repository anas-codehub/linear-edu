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
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            আমাদের কোর্স সমূহ
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="relative h-64">
                <Image
                  src={course.src}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {course.description}
                </p>
                <Link
                  href="#"
                  className="text-amber-500 hover:text-amber-600 font-medium inline-flex items-center"
                >
                  বিস্তারিত জানুন
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
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
