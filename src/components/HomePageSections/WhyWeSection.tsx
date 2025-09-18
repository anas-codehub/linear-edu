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
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full -z-10"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-1">
            কেন আমরাই সেরা?
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-brand-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 bg-white"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-6 rounded-lg bg-brand-2/20 text-brand-2">
                <FaCheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-brand-1 mb-4">
                {item.title}
              </h3>
              <ul className="space-y-3">
                {item.desc.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-brand-1 mr-2 mt-0.5 flex-shrink-0"
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
                    <span className="text-brand-1">{point}</span>
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
