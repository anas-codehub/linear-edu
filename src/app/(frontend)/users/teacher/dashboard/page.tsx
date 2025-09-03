"use client";
import { Accordion, AccordionItem, Button, Image } from "@heroui/react";
import { BookOpen, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import NextImage from "next/image";
import Link from "next/link";
import { subjects } from "../../../../../../data/sub";
import HomeFooter from "@/components/Footers/HomeFooter";
import QuestionShow from "@/components/QuestionShow";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <div className="container mx-auto flex justify-center flex-col items-center gap-6 px-4">
        <div
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2 cursor-pointer mb-4 self-start"
        >
          <h2 className="text-xl font-bold">← Back</h2>
        </div>
        <QuestionShow />
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto flex justify-center flex-col items-center gap-10 px-4">
        {/* hero */}
        <div className="bg-theme/50 max-w-6xl w-full rounded-lg">
          <div className="flex justify-center items-center flex-col gap-4 py-10 px-4 text-center">
            <h1 className="text-base text-white">প্রশ্ন তৈরি এখন আরও সহজে</h1>
            <p>
              ২ লক্ষাধিক প্রশ্ন থেকে টাইপিং ও প্রুফ রিডিংয়ের ঝামেলা ছাড়াই যেকোনো
              বিষয়ের প্রশ্ন বানান মিনিটেই মাত্র তিনটি ধাপেঃ
            </p>
            <p>
              প্রশ্ন সিলেক্ট করুন {">"} পেইজ সেটআপ করুন {">"} ডাউনলোড করুন
            </p>
          </div>
        </div>

        {/* সর্বশেষ তৈরি প্রশ্ন */}
        <div className="max-w-2xl w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-xl font-bold">সর্বশেষ তৈরি প্রশ্ন</h2>
          <div
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <h2 className="text-xl font-bold">সব দেখুন</h2>
            <ChevronDown className="transition-transform duration-300" />
          </div>
        </div>

        {/* preview cards */}
        <div className="flex flex-wrap gap-6 justify-center w-full max-w-2xl">
          {[1, 2].map((item) => (
            <div key={item} className="border w-full sm:w-[48%] p-4 rounded-lg">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <Image
                  removeWrapper
                  alt="HeroUI hero Image"
                  as={NextImage}
                  height={200}
                  src="/homepage/anas.jpg"
                  width={300}
                  className="object-contain w-full sm:w-[150px] h-[150px] sm:h-[200px]"
                />
                <div className="flex flex-col justify-between items-center gap-4 w-full sm:w-auto">
                  <p>text.pdf</p>
                  <Button className="bg-theme w-full sm:w-auto" radius="none">
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* বিষয়ভিত্তিক প্রশ্ন */}
        <div className="max-w-2xl w-full flex flex-col gap-4">
          <h2>বিষয়ভিত্তিক প্রশ্ন</h2>
          <div>
            <Accordion variant="splitted" className="w-full max-w-2xl mx-auto">
              {subjects.map((subject) => (
                <AccordionItem
                  key={subject.id}
                  aria-label={`Accordion ${subject.id}`}
                  startContent={<BookOpen className="w-5 h-5 text-theme" />}
                  title={
                    <div className="flex justify-between items-center w-full">
                      <span>{subject.title}</span>
                      <span className="text-xs font-semibold text-gray-500 bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                        {subject.topics.length} টি অধ্যায়
                      </span>
                    </div>
                  }
                  className="text-gray-800 bg-white dark:bg-dark-2 font-medium hover:text-theme"
                >
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 p-3 border-t">
                    {subject.topics.map((topic) => (
                      <li key={topic.id}>
                        <Link
                          href={topic.link}
                          className="text-theme hover:underline hover:text-theme-dark transition"
                        >
                          {topic.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <HomeFooter />
      </div>
    </>
  );
};

export default Page;
