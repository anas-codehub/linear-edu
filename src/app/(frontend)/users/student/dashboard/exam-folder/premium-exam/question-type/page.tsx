"use client";
import { Checkbox, Divider, Button } from "@heroui/react";
import {
  BriefcaseMedical,
  CheckCircle,
  Crown,
  FlaskConical,
  GraduationCap,
  University,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const PremiumExamPage = () => {
  const [selectedStandards, setSelectedStandards] = useState<string[]>([]);

  const toggleStandard = (standard: string) => {
    if (selectedStandards.includes(standard)) {
      setSelectedStandards(
        selectedStandards.filter((item) => item !== standard)
      );
    } else {
      setSelectedStandards([...selectedStandards, standard]);
    }
  };

  const standards = [
    {
      id: "engineering",
      label: "Engineering",
      icon: <FlaskConical className="text-green-600" />,
    },
    {
      id: "varsity",
      label: "Varsity",
      icon: <University className="text-green-600" />,
    },
    {
      id: "medical",
      label: "Medical",
      icon: <BriefcaseMedical className="text-green-600" />,
    },
    {
      id: "academic",
      label: "Academic",
      icon: <GraduationCap className="text-green-600" />,
    },
    {
      id: "main-book",
      label: "Main Book",
      icon: <Crown className="text-green-600" />,
    },
  ];

  return (
    <div className="mt-10 container mx-auto">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-3xl text-green-700 dark:text-green-400 font-bold">
          প্রিমিয়াম এক্সাম
        </h1>
      </div>

      <Divider className="bg-green-600 dark:bg-green-500 mt-5" />

      <div className="p-6">
        {/* Standards Selection Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              প্রশ্নের স্ট্যান্ডার্ড
            </h2>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            আপনার পছন্দের স্ট্যান্ডার্ড সমূহ নির্বাচন করুন:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {standards.map((standard) => (
              <div
                key={standard.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  selectedStandards.includes(standard.label)
                    ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20 shadow-md"
                    : "border-gray-200 bg-gray-50 dark:bg-gray-800 hover:border-amber-400 dark:hover:border-amber-500"
                }`}
                onClick={() => toggleStandard(standard.label)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-lg">{standard.icon}</div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {standard.label}
                    </span>
                  </div>
                  {selectedStandards.includes(standard.label) ? (
                    <CheckCircle className="text-amber-600 dark:text-amber-500 text-xl" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons (show only if at least one is selected) */}
        {selectedStandards.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button
              as={Link}
              radius="sm"
              href="/users/student/dashboard/exam-folder/premium-exam/question-type/be-sure"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-800"
              size="lg"
            >
              পরীক্ষা শুরু করুন
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumExamPage;
