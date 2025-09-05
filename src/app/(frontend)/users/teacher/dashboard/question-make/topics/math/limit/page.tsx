"use client";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Select,
  SelectItem,
  Checkbox,
  Input,
} from "@heroui/react";
import { Search } from "lucide-react";
import Link from "next/link";

interface Question {
  id: number;
  text: string;
  options: string[];
  answer: string;
  explanation?: string;
}

const questionsData: Question[] = [
  {
    id: 1,
    text: "ম্যাট্রিক্সটি প্রতিসম হলে m = কত?",
    options: ["-2", "0", "4", "5"],
    answer: "0",
    explanation: "Symmetric matrix এর ক্ষেত্রে diagonal elements সমান হতে হয়।",
  },
  {
    id: 2,
    text: "ম্যাট্রিক্সের অনুরূপী (conjugate) ম্যাট্রিক্স কোনটি?",
    options: ["A", "B", "C", "D"],
    answer: "B",
    explanation: "Conjugate transpose নিলে কমপ্লেক্স কনজুগেট নিতে হয়।",
  },
  {
    id: 3,
    text: "কোনটি মৌলিক সংখ্যা?",
    options: ["4", "6", "7", "9"],
    answer: "7",
    explanation: "7 এর divisors শুধুমাত্র 1 এবং 7।",
  },
  {
    id: 4,
    text: "sin 30° এর মান কত?",
    options: ["1", "1/2", "√2/2", "√3/2"],
    answer: "1/2",
    explanation: "Trigonometric identity অনুসারে sin 30° = 1/2।",
  },
  {
    id: 5,
    text: "π এর মান কত?",
    options: ["3.12", "3.14", "3.15", "3.16"],
    answer: "3.14",
    explanation: "π হলো circle এর circumference / diameter।",
  },
  {
    id: 6,
    text: "2x + 3 = 7 হলে x =",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "2x + 3 = 7 → 2x = 4 → x = 2",
  },
  {
    id: 7,
    text: "C++ কোন ধরনের ভাষা?",
    options: ["High-level", "Low-level", "Middle-level", "Assembly"],
    answer: "Middle-level",
    explanation: "C++ supports both high-level and low-level programming.",
  },
  {
    id: 8,
    text: "কোনটি অ্যালজেব্রা সমস্যা?",
    options: [
      "x + 2 = 5",
      "Circle Area",
      "Speed Calculation",
      "Chemical Reaction",
    ],
    answer: "x + 2 = 5",
    explanation: "This is a simple algebraic equation.",
  },
  {
    id: 9,
    text: "Python কোন ধরনের ভাষা?",
    options: ["Compiled", "Interpreted", "Markup", "Machine"],
    answer: "Interpreted",
    explanation: "Python is an interpreted language.",
  },
  {
    id: 10,
    text: "কোনটি রাসায়নিক প্রতিক্রিয়া?",
    options: ["H2 + O2 → H2O", "2+3=5", "x² + y² = z²", "sin²θ + cos²θ = 1"],
    answer: "H2 + O2 → H2O",
    explanation: "This is a chemical reaction combining hydrogen and oxygen.",
  },
];

export default function Page() {
  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]);
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const questionsPerPage = 5;
  const totalPages = Math.ceil(questionsData.length / questionsPerPage);

  const toggleQuestionSelection = (id: number) => {
    setSelectedQuestions((prev) =>
      prev.includes(id) ? prev.filter((q) => q !== id) : [...prev, id]
    );
  };

  const toggleAccordion = (id: number) => {
    setExpandedQuestions((prev) =>
      prev.includes(id) ? prev.filter((q) => q !== id) : [...prev, id]
    );
  };

  const currentQuestions = questionsData.slice(
    (currentPage - 1) * questionsPerPage,
    currentPage * questionsPerPage
  );

  return (
    <div className="container mx-auto p-6">
      {/* Filter Section */}
      <div className="flex flex-wrap gap-3 mb-6">
        <Select label="বিষয় নির্বাচন করুন">
          <SelectItem key="math">গণিত</SelectItem>
          <SelectItem key="physics">পদার্থবিজ্ঞান</SelectItem>
          <SelectItem key="chemistry">রসায়ন</SelectItem>
        </Select>

        <Select label="অধ্যায় নির্বাচন করুন">
          <SelectItem key="algebra">অ্যালজেব্রা</SelectItem>
          <SelectItem key="calculus">ক্যালকুলাস</SelectItem>
        </Select>

        <div className="flex justify-between gap-5 w-full">
          <div className="flex gap-2 flex-wrap">
            <Button variant="bordered" color="warning">
              All
            </Button>
            <Button variant="bordered" color="warning">
              MCQ
            </Button>
            <Button variant="bordered" color="warning">
              CQ
            </Button>
            <Button variant="bordered" color="warning">
              গানিতিক
            </Button>
            <Button variant="bordered" color="warning">
              জ্ঞানমূলক
            </Button>
            <Button variant="bordered" color="warning">
              ছোট লিখিত/সংক্ষিপ্ত..
            </Button>
          </div>
          <Input
            placeholder="Search"
            startContent={<Search />}
            variant="bordered"
          />
        </div>
      </div>

      {/* Select All Checkbox */}
      <div className="flex items-center gap-2 mb-2 pl-2">
        <Checkbox
          isSelected={selectedQuestions.length === questionsData.length}
          onChange={() => {
            if (selectedQuestions.length === questionsData.length) {
              setSelectedQuestions([]);
            } else {
              setSelectedQuestions(questionsData.map((q) => q.id));
            }
          }}
        />
        <span className="font-medium">Select All</span>
      </div>

      {/* Info Section */}
      <div className="text-red-500 mb-5">
        <p>
          প্রশ্ন, উত্তর, সমাধান বা ব্যাখ্যায় কোনো ভুল পেলে এই বাটনে ক্লিক করে
          রিপোর্ট করুন। এমনকি বানান ভুল, চিত্র ভুল, চিত্র অস্পষ্ট, সমীকরণ ভেঙে
          গেছে / কেটে গেছে ইত্যাদি যেকোনো ধরণের ভুল পেলে রিপোর্ট করুন।
        </p>
      </div>

      {/* Question List */}
      <div className="flex flex-col gap-6">
        {currentQuestions.map((q) => {
          const isExpanded = expandedQuestions.includes(q.id);
          return (
            <Card key={q.id} className="shadow-md border rounded-2xl">
              <CardBody>
                <div className="flex items-center gap-2 mb-3">
                  <Checkbox
                    isSelected={selectedQuestions.includes(q.id)}
                    onChange={() => toggleQuestionSelection(q.id)}
                  />
                  <span className="font-medium">
                    {q.id}. {q.text}
                  </span>

                  {/* Board / Badge with tooltip */}
                  <span
                    className="ml-2 px-2 py-0.5 bg-gray-200 text-gray-800 text-xs rounded-full cursor-default"
                    title="DB-25"
                  >
                    DB-25
                  </span>
                </div>

                {/* Options (non-selectable) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-8 mb-3">
                  {q.options.map((opt, idx) => (
                    <div key={idx} className="flex gap-2 items-center">
                      <span>
                        {String.fromCharCode(65 + idx)}. {opt}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Show Answer & Solution Button */}
                <div className="pl-8 mb-2">
                  <Button
                    variant="bordered"
                    color="success"
                    size="sm"
                    onClick={() => toggleAccordion(q.id)}
                  >
                    {isExpanded
                      ? "Hide Answer & Solution"
                      : "Show Answer & Solution"}
                  </Button>
                </div>

                {/* Accordion content: Answer + Explanation */}
                {isExpanded && (
                  <div className="pl-8 mt-2 text-green-600">
                    <p className="font-semibold">✅ Answer: {q.answer}</p>
                    {q.explanation && (
                      <p className="mt-1 text-green-700">{q.explanation}</p>
                    )}
                  </div>
                )}
              </CardBody>
            </Card>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        <Button
          variant="bordered"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </Button>
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            variant={currentPage === i + 1 ? "solid" : "bordered"}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
        <Button
          variant="bordered"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>

      {/* Bottom Buttons */}
      <div className="flex justify-between items-center mt-6">
        <Button
          as={Link}
          href={`/users/teacher/dashboard/question-make/topics/math/limit/question-data?selected=${encodeURIComponent(
            JSON.stringify(selectedQuestions)
          )}`}
          color="primary"
          variant="solid"
        >
          Create Question({selectedQuestions.length})
        </Button>
        <Button color="secondary" variant="shadow">
          Practice Mode
        </Button>
      </div>
    </div>
  );
}
