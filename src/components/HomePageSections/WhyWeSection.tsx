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
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            কেন আমরাই সেরা?
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mb-6 text-amber-500">
                <FaCheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {item.title}
              </h3>
              <ul className="space-y-3">
                {item.desc.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0"
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
                    <span className="text-gray-600 dark:text-gray-300">
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
