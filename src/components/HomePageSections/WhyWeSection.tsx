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
    <section className="py-16 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E6F0FF] via-[#FFE6E6] to-[#E6F0FF] dark:from-[#1A202C] dark:via-[#3B1A1A] dark:to-[#1A202C] animate-gradient-slow -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A] dark:text-[#60A5FA]">
            কেন আমরাই সেরা?
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#4DA8FF] via-[#FF6B6B] to-[#4DA8FF]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#F0F8FF] via-[#FFEFF0] to-[#F0F8FF] dark:from-[#2A2E3B] dark:via-[#3B2A2A] dark:to-[#2A2E3B] rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="w-12 h-12 bg-[#4DA8FF]/20 dark:bg-[#FF6B6B]/20 rounded-lg flex items-center justify-center mb-6 text-[#4DA8FF] dark:text-[#FF6B6B]">
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
