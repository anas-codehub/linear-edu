"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardBody, Button, Checkbox, Input } from "@heroui/react";
import Link from "next/link";

const allQuestions = [
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
];

export default function QuestionMake_QuestionData() {
  const searchParams = useSearchParams();
  const [questions, setQuestions] = useState<typeof allQuestions>([]);
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const selected = searchParams.get("selected");
    if (selected) {
      const ids: number[] = JSON.parse(selected);
      const selectedQs = allQuestions.filter((q) => ids.includes(q.id));
      setQuestions(selectedQs);
    }
  }, [searchParams]);

  const toggleAccordion = (id: number) => {
    setExpandedQuestions((prev) => (prev.includes(id) ? prev.filter((q) => q !== id) : [...prev, id]));
  };

  const shuffleQuestions = () => {
    setQuestions((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  const addAnotherQuestion = () => {
    if (inputValue.trim() !== "") {
      setQuestions((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: inputValue,
          options: [],
          answer: "",
          explanation: "",
        },
      ]);
      setInputValue("");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Create Question Overview</h2>

      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Please write file name"
          radius="none"
          variant="bordered"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          radius="sm"
          as={Link}
          href={`/users/teacher/dashboard/question-make/topics/math/limit?selected=${encodeURIComponent(
            JSON.stringify(questions.map((q) => q.id))
          )}`}
        >
          Add More Questions
        </Button>
        <Button radius="sm" color="success" onClick={shuffleQuestions}>
          Shuffle Questions
        </Button>
      </div>

      <div className="flex flex-col gap-6">
        {questions.map((q) => {
          const isExpanded = expandedQuestions.includes(q.id);
          return (
            <Card key={q.id} className="shadow-md border rounded-2xl">
              <CardBody>
                <div className="flex items-center gap-2 mb-3">
                  <Checkbox />
                  <span className="font-medium">{q.text}</span>
                  <span
                    className="ml-2 px-2 py-0.5 bg-gray-200 text-gray-800 text-xs rounded-full cursor-default"
                    title="DB-25"
                  >
                    DB-25
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-8 mb-3">
                  {q.options.map((opt, idx) => (
                    <div key={idx} className="flex gap-2 items-center">
                      <span>
                        {String.fromCharCode(65 + idx)}. {opt}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pl-8 mb-2">
                  <Button variant="bordered" color="success" size="sm" onClick={() => toggleAccordion(q.id)}>
                    {isExpanded ? "Hide Answer & Solution" : "Show Answer & Solution"}
                  </Button>
                </div>

                {isExpanded && (
                  <div className="pl-8 mt-2 text-green-600">
                    <p className="font-semibold">✅ Answer: {q.answer}</p>
                    {q.explanation && <p className="mt-1 text-green-700">{q.explanation}</p>}
                  </div>
                )}
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
