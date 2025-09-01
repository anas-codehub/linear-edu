"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhyWeSection = () => {
  const whyChooseUs = [
    {
      title: "Structured Academic Excellence",
      desc: [
        "3 Exams per Subject",
        "21 Exams per Month",
        "Assignment System",
        "Lecture Sheets Provided",
        "Regular Class & Exam Activity",
      ],
    },
    {
      title: "Smart Systems & Expert Support",
      desc: [
        "Expert Teacher Panel",
        "30 Students per Batch",
        "Website-Based Maintenance",
        "Multimedia Classrooms",
        "Smart Attendance System",
      ],
    },
    {
      title: "Student-Centered Care & Development",
      desc: [
        "Monthly Guardian Meeting",
        "Doubt Solving & ICU Class Support",
        "Inspired Extra-Curricular Activities",
        "24/7 Online & Offline Support",
      ],
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#4DA8FF]/10 dark:bg-[#10B981]/20 blur-3xl animate-pulse-slow -z-10"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#FF6B6B]/10 dark:bg-[#8B5CF6]/20 blur-3xl animate-pulse-slow -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#1E40AF] dark:text-[#60A5FA]">
            কেন আমরাই সেরা?
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#4DA8FF] via-[#FF6B6B] to-[#4DA8FF]"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 bg-gradient-to-b from-[#F0F8FF] via-[#FFEFF0] to-[#F0F8FF] dark:from-[#2A2E3B] dark:via-[#3B2A2A] dark:to-[#2A2E3B]"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-6 rounded-lg bg-[#4DA8FF]/20 dark:bg-[#FF6B6B]/20 text-[#4DA8FF] dark:text-[#FF6B6B]">
                <FaCheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[#1E3A8A] dark:text-[#60A5FA] mb-4">
                {item.title}
              </h3>
              <ul className="space-y-3">
                {item.desc.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-[#4DA8FF] dark:text-[#FF6B6B] mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#1E3A8A] dark:text-[#60A5FA]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWeSection;
