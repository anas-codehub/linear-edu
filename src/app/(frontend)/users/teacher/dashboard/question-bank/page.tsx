"use client";
import { Accordion, AccordionItem } from "@heroui/react";
import React from "react";
import { subjects } from "../../../../../../../data/sub";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import HomeFooter from "@/components/Footers/HomeFooter";

const Page = () => {
  // Split subjects into 2 columns
  const mid = Math.ceil(subjects.length / 2);
  const col1 = subjects.slice(0, mid);
  const col2 = subjects.slice(mid);

  return (
    <div className="w-full flex flex-col justify-center items-center mt-12 px-4">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-center text-theme mb-8">
        বিষয় তালিকা
      </h1>

      {/* Two-column layout */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First column */}
        <Accordion variant="splitted" className="w-full space-y-4">
          {col1.map((subject) => (
            <AccordionItem
              key={subject.id}
              aria-label={`Accordion ${subject.id}`}
              startContent={
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-theme/10">
                  <BookOpen className="w-5 h-5 text-theme" />
                </div>
              }
              title={
                <div className="flex justify-between items-center w-full">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    {subject.title}
                  </span>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                    {subject.topics.length} টি অধ্যায়
                  </span>
                </div>
              }
              className="bg-white dark:bg-dark-2 text-gray-800 dark:text-gray-200 
                         font-medium border rounded-xl shadow-sm hover:shadow-md 
                         transition duration-200"
            >
              {/* Scrollable topics */}
              <div className="max-h-48 overflow-y-auto">
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 p-3">
                  {subject.topics.map((topic) => (
                    <li key={topic.id}>
                      <Link
                        href={topic.link}
                        className="block px-3 py-2 rounded-lg border border-transparent
                                   hover:bg-theme/10 hover:text-theme hover:border-theme/30
                                   transition-colors duration-200"
                      >
                        {topic.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Second column */}
        <Accordion variant="splitted" className="w-full space-y-4">
          {col2.map((subject) => (
            <AccordionItem
              key={subject.id}
              aria-label={`Accordion ${subject.id}`}
              startContent={
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-theme/10">
                  <BookOpen className="w-5 h-5 text-theme" />
                </div>
              }
              title={
                <div className="flex justify-between items-center w-full">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    {subject.title}
                  </span>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                    {subject.topics.length} টি অধ্যায়
                  </span>
                </div>
              }
              className="bg-white dark:bg-dark-2 text-gray-800 dark:text-gray-200 
                         font-medium border rounded-xl shadow-sm hover:shadow-md 
                         transition duration-200"
            >
              {/* Scrollable topics */}
              <div className="max-h-48 overflow-y-auto">
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 p-3">
                  {subject.topics.map((topic) => (
                    <li key={topic.id}>
                      <Link
                        href={topic.link}
                        className="block px-3 py-2 rounded-lg border border-transparent
                                   hover:bg-theme/10 hover:text-theme hover:border-theme/30
                                   transition-colors duration-200"
                      >
                        {topic.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <HomeFooter />
    </div>
  );
};

export default Page;
