"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { Button, Select, SelectItem } from "@heroui/react";
import Image from "next/image";

interface ExamPageProps {
  params: Record<string, string>;
}

interface Chapter {
  id: string;
  name: string;
}

const ExamPage = ({ params }: ExamPageProps) => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "পরীক্ষা";

  // Strongly typed chapters
  const chapters: Chapter[] = [
    { id: "ch1", name: "অধ্যায় ১: মৌলিক ধারণা" },
    { id: "ch2", name: "অধ্যায় ২: সূত্র ও সমীকরণ" },
    { id: "ch3", name: "অধ্যায় ৩: অনুশীলন প্রশ্ন" },
    { id: "ch4", name: "অধ্যায় ৪: উন্নত বিষয়" },
  ];

  // Store selected chapterId
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

  const handleStartExam = () => {
    if (!selectedChapter) return;
    const chapterName =
      chapters.find((ch) => ch.id === selectedChapter)?.name || "";
    alert(`${title} - ${chapterName} পরীক্ষাটি শুরু হয়েছে ✅`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdfdfd] via-[#f9f9f9] to-[#fdfdfd] dark:from-dark-1 dark:via-dark-2 dark:to-dark-1 px-6">
      <div className="bg-white dark:bg-dark-3 shadow-xl rounded-3xl p-10 max-w-xl w-full text-center border border-yellow-500 dark:border-gray-800">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#EF4444] to-[#F87171] bg-clip-text text-transparent mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
          এই অংশে <span className="font-semibold">{title}</span> বিষয়ের পরীক্ষার
          প্রশ্ন থাকবে।
        </p>

        {/* Common Thumbnail */}
        <div className="mt-6 relative w-full h-64">
          <Image
            src="/homepage/pic2.png"
            alt="pic"
            fill
            className="object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Chapter Selection */}
        <div className="mt-8 text-left">
          <label className="block text-gray-800 dark:text-gray-200 font-medium mb-2">
            অধ্যায় নির্বাচন করুন:
          </label>
          <Select
            placeholder="একটি অধ্যায় বেছে নিন"
            className="w-full"
            selectedKeys={selectedChapter ? [selectedChapter] : []}
            onSelectionChange={(keys) => {
              const selected = Array.from(keys)[0];
              setSelectedChapter(selected as string);
            }}
          >
            {chapters.map((chapter) => (
              <SelectItem key={chapter.id}>{chapter.name}</SelectItem>
            ))}
          </Select>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <Button
            color="danger"
            isDisabled={!selectedChapter}
            className="px-8 py-6 text-lg font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50"
            onPress={handleStartExam}
          >
            পরীক্ষা শুরু করুন
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExamPage;
