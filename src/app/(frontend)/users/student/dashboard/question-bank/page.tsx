"use client";
import { Card, Input, Tab, Tabs } from "@heroui/react";
import { Search } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const subjects = [
    {
      name: "বাংলা",
      paper: "১ম পত্র",
      color: "bg-amber-400",
      href: "/users/student/dashboard/question-bank/hsc-ban-1st-test-paper",
    },
    { name: "বাংলা", paper: "২য় পত্র", color: "bg-pink-400" },
    { name: "ইংলিশ", paper: "১ম পত্র", color: "bg-purple-400" },
    { name: "ইংলিশ", paper: "২য় পত্র", color: "bg-indigo-400" },
    { name: "তথ্য ও যোগাযোগ প্রযুক্তি", color: "bg-blue-400" },
    { name: "পদার্থবিজ্ঞান", paper: "১ম পত্র", color: "bg-green-400" },
    { name: "পদার্থবিজ্ঞান", paper: "২য় পত্র", color: "bg-emerald-400" },
    { name: "রসায়ন", paper: "১ম পত্র", color: "bg-red-400" },
    { name: "রসায়ন", paper: "২য় পত্র", color: "bg-rose-400" },
    { name: "উচ্চতর গণিত", paper: "১ম পত্র", color: "bg-teal-400" },
    { name: "উচ্চতর গণিত", paper: "২য় পত্র", color: "bg-cyan-400" },
    { name: "জীববিজ্ঞান", paper: "১ম পত্র", color: "bg-lime-400" },
    { name: "জীববিজ্ঞান", paper: "২য় পত্র", color: "bg-yellow-400" },
    { name: "পরিসংখ্যান", paper: "১ম পত্র", color: "bg-sky-400" },
    { name: "পরিসংখ্যান", paper: "২য় পত্র", color: "bg-orange-400" },
  ];

  return (
    <div className="transition-all duration-300 ease-in-out  ">
      {/* Header */}
      <div className="container mx-auto font-baloo px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center">
          প্রশ্ন ব্যাংক
        </h1>
      </div>

      {/* Tabs & Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="w-full">
          <Tabs
            aria-label="Options"
            variant="light"
            radius="full"
            color="warning"
            selectedKey={selectedTab || undefined}
            onSelectionChange={(key) => setSelectedTab(key as string)}
            className="w-full sm:w-auto"
          >
            <Tab key="subject-wise" title="বিষয় ভিত্তিক" />
            <Tab key="inst-wise" title="প্রতিষ্ঠান ভিত্তিক" />
            <Tab key="model-test" title="মডেল টেস্ট" />
          </Tabs>
        </div>
        <div className="w-full sm:w-auto">
          <Input
            className="w-full sm:max-w-xs"
            placeholder="প্রশ্ন খুঁজুন"
            variant="bordered"
            radius="full"
            startContent={<Search className="text-xl" />}
          />
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-6 sm:mt-8 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
          {selectedTab === "subject-wise" && (
            <>
              <div className="mb-4 sm:mb-6">
                <p className="text-xl sm:text-2xl font-semibold">
                  বিষয় ভিত্তিক
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  সকল বিষয়ের প্রশ্নব্যাংক
                </p>
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
                {subjects.map((subject, index) => (
                  <Link
                    key={index}
                    href={subject.href || "#"}
                    className={`flex flex-col justify-center items-start gap-1 p-3 sm:p-4 w-full h-32 sm:h-40 rounded-xl sm:rounded-2xl ${subject.color} shadow-md hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-200 cursor-pointer`}
                  >
                    <p className="text-xl sm:text-2xl text-white font-semibold">
                      {subject.name}
                    </p>
                    {subject.paper && (
                      <p className="text-base sm:text-lg text-white">
                        {subject.paper}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </>
          )}

          {selectedTab === "inst-wise" && (
            <>
              <div className="mb-4 sm:mb-6">
                <p className="text-xl sm:text-2xl font-semibold">
                  প্রতিষ্ঠান ভিত্তিক
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  বিগত বছরের ভর্তি পরীক্ষার প্রশ্ন
                </p>
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
                {subjects.map((subject, index) => (
                  <div
                    key={index}
                    className={`flex flex-col justify-center items-start gap-1 p-3 sm:p-4 w-full h-32 sm:h-40 rounded-xl sm:rounded-2xl ${subject.color} shadow-md hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-200 cursor-pointer`}
                  >
                    <p className="text-xl sm:text-2xl text-white font-semibold">
                      {subject.name}
                    </p>
                    {subject.paper && (
                      <p className="text-base sm:text-lg text-white">
                        {subject.paper}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {selectedTab === "model-test" && (
            <Card className="p-4 sm:p-6 text-center">
              <p className="text-base sm:text-lg">
                মডেল টেস্ট প্রশ্ন শীঘ্রই যুক্ত হবে...
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
