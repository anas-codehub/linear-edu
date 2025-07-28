"use client";
import React, { useState, ChangeEvent } from "react";
import QuestionCard from "@/components/QuestionCards/QuestionCards";
import { Button, Input, Tab, Tabs } from "@heroui/react";
import { ArrowLeft, Eye, Pencil, Search } from "lucide-react";
import Link from "next/link";
import questionDataBoard from "../../../../../../../../../data/questionDataBoard";
import questionDataColleges from "../../../../../../../../../data/questionDataColleges";

// Define a type for question items
interface QuestionItem {
  title: string;
  duration: string;
  questions: string;
}

const Page: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("college");

  // Filter function with type annotation
  const filterData = (data: QuestionItem[]) =>
    data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Handler for input change with proper typing
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handler for Tabs change, the value is string
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <div className="flex items-center gap-2 mb-6">
          <ArrowLeft size={20} className="text-blue-600" />
          <Link
            href="/users/student/dashboard"
            className="text-blue-600 hover:underline"
          >
            Back
          </Link>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-8">HSC Bangla 1st Paper - CQ</h1>

        {/* Action Buttons */}
        <div className="flex justify-end items-center gap-3 mb-6">
          <Button
            color="warning"
            variant="bordered"
            radius="sm"
            startContent={<Eye />}
          >
            Question
          </Button>
          <Button
            color="warning"
            variant="solid"
            radius="sm"
            startContent={<Pencil />}
          >
            Practice
          </Button>
        </div>

        {/* Search and Tabs */}
        <div className="space-y-6">
          {/* Search */}
          <Input
            radius="full"
            startContent={<Search />}
            placeholder="Search for exams..."
            className="max-w-xl w-full"
            value={searchTerm}
            onChange={handleSearchChange}
          />

          {/* Tabs */}
          <Tabs
            color="warning"
            variant="light"
            aria-label="Tabs variants"
            className="w-full"
            selectedKey={activeTab}
            onSelectionChange={(key) => setActiveTab(String(key))}
          >
            <Tab key="college" title="কলেজ" value="college">
              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {filterData(questionDataColleges).map((item, index) => (
                  <QuestionCard
                    key={index}
                    title={item.title}
                    duration={item.duration}
                    questions={item.questions}
                  />
                ))}
              </div>
            </Tab>

            <Tab key="board" title="বোর্ড" value="board">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {filterData(questionDataBoard).map((item, index) => (
                  <QuestionCard
                    key={index}
                    title={item.title}
                    duration={item.duration}
                    questions={item.questions}
                  />
                ))}
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Page;
