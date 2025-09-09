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
      icon: <FlaskConical className="text-blue-500" />,
    },
    {
      id: "varsity",
      label: "Varsity",
      icon: <University className="text-purple-500" />,
    },
    {
      id: "medical",
      label: "Medical",
      icon: <BriefcaseMedical className="text-red-500" />,
    },
    {
      id: "academic",
      label: "Academic",
      icon: <GraduationCap className="text-green-500" />,
    },
    {
      id: "main-book",
      label: "Main Book",
      icon: <Crown className="text-yellow-500" />,
    },
  ];

  return (
    <div className="mt-10 container mx-auto">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-3xl font-bold">প্রিমিয়াম এক্সাম</h1>
      </div>

      <Divider className="bg-orange-100 mt-5" />

      <div className="p-6">
        {/* Standards Selection Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold text-slate-800">
              প্রশ্নের স্ট্যান্ডার্ড
            </h2>
          </div>

          <p className="text-sm text-slate-600 mb-4">
            আপনার পছন্দের স্ট্যান্ডার্ড সমূহ নির্বাচন করুন:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {standards.map((standard) => (
              <div
                key={standard.id}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  selectedStandards.includes(standard.label)
                    ? "border-orange-400  shadow-md"
                    : "border-slate-200 bg-slate-50 hover:border-orange-300"
                }`}
                onClick={() => toggleStandard(standard.label)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-lg">{standard.icon}</div>
                    <span className="font-medium">{standard.label}</span>
                  </div>
                  {selectedStandards.includes(standard.label) ? (
                    <CheckCircle className="text-orange-500 text-xl" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons (show only if at least one is selected) */}
        {selectedStandards.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button className="flex-1 bg-theme text-white" size="lg">
              পরীক্ষা শুরু করুন
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumExamPage;
