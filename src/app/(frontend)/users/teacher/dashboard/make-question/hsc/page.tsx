"use client";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import React, { useState } from "react";
import physics1 from "../../../../../../../../data/books-chapters/physics1";

const subjectNames = [
  { key: "বাংলা", label: "বাংলা" },
  { key: "ইংরেজি", label: "ইংরেজি" },
  { key: "পদার্থবিজ্ঞান", label: "পদার্থবিজ্ঞান" },
  { key: "রসায়ন", label: "রসায়ন" },
  { key: "জীববিজ্ঞান", label: "জীববিজ্ঞান" },
  { key: "উচ্চতর গনিত", label: "উচ্চতর গনিত" },
  { key: "তথ্য ও যোগাযোগ প্রজুক্তি", label: "তথ্য ও যোগাযোগ প্রজুক্তি" },
];

const subjectPapers = [
  { key: "১ম পত্র", label: "১ম পত্র" },
  { key: "২য় পত্র", label: "২য় পত্র" },
];

interface Topic {
  sl: number;
  title: string;
}

interface Question {
  id: number;
  text: string;
}

const Page: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [selectedPaper, setSelectedPaper] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [questionType, setQuestionType] = useState<string>("");
  const [questionMode, setQuestionMode] = useState<string>("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]);

  const mockQuestions: Question[] = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    text: `Sample Question ${i + 1}`,
  }));

  const handleFetchQuestions = () => {
    setQuestions(mockQuestions);
  };

  const toggleQuestion = (id: number) => {
    if (selectedQuestions.includes(id)) {
      setSelectedQuestions(selectedQuestions.filter((q) => q !== id));
    } else {
      setSelectedQuestions([...selectedQuestions, id]);
    }
  };

  const handleRefreshQuestions = () => {
    setQuestions(
      mockQuestions.map((q) => ({ ...q, text: `${q.text} (refreshed)` }))
    );
    setSelectedQuestions([]);
  };

  return (
    <div className="p-10 container mx-auto space-y-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-theme-dark">
        Teacher Question Maker
      </h1>

      {/* User Details */}
      <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-md">
        <Input label="Institute Name" />
        <Input label="Exam Name" />
        <Input label="Instructor Name" />
        <Input label="Total Marks" />
        <Input label="Total Time" />
      </div>

      {/* Subject & Paper Selection */}
      <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-md">
        <Select
          className="w-full"
          label="বিষয় নির্বাচন করুন"
          value={selectedSubject}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedSubject(e.target.value)
          }
        >
          {subjectNames.map((subN) => (
            <SelectItem key={subN.key}>{subN.label}</SelectItem>
          ))}
        </Select>

        {selectedSubject && (
          <Select
            className="w-full"
            label="পত্র নির্বাচন করুন"
            value={selectedPaper}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedPaper(e.target.value)
            }
          >
            {subjectPapers.map((subP) => (
              <SelectItem key={subP.key}>{subP.label}</SelectItem>
            ))}
          </Select>
        )}

        {/* Auto-fill Subject Name */}
        {selectedSubject && selectedPaper && (
          <Input
            label="Subject Name + Paper"
            value={`${selectedSubject} - ${selectedPaper}`}
            readOnly
          />
        )}

        {/* Topic Selection */}
        {selectedPaper && (
          <Select
            className="w-full"
            label="টপিক নির্বাচন করুন"
            value={selectedTopic}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedTopic(e.target.value)
            }
          >
            {physics1.map((topic: Topic) => (
              <SelectItem key={topic.sl}>{topic.title}</SelectItem>
            ))}
          </Select>
        )}

        {/* Question Type */}
        {selectedTopic && (
          <Select
            className="w-full"
            label="সৃজনশীল/বহুনির্বাচনি নির্বাচন করুন"
            value={questionType}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setQuestionType(e.target.value)
            }
          >
            <SelectItem key="cq">সৃজনশীল</SelectItem>
            <SelectItem key="mcq">বহুনির্বাচনি</SelectItem>
          </Select>
        )}

        {/* Question Mode */}
        {questionType && (
          <Select
            className="w-full"
            label="প্রশ্নের ধরন নির্বাচন করুন"
            value={questionMode}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setQuestionMode(e.target.value)
            }
          >
            <SelectItem key="board">বোর্ড স্ট্যান্ডার্ড</SelectItem>
            <SelectItem key="random">এলোমেলো</SelectItem>
          </Select>
        )}

        {/* Fetch Questions */}
        {questionMode && (
          <div className="md:col-span-2 flex justify-center mt-4">
            <Button size="lg" onClick={handleFetchQuestions}>
              Fetch Questions
            </Button>
          </div>
        )}
      </div>

      {/* Selected Questions Preview */}
      {questions.length > 0 && (
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Selected Questions Preview
          </h2>
          <div className="max-h-80 overflow-y-auto space-y-2">
            {questions.map((q) => (
              <div
                key={q.id}
                className={`p-3 rounded-md cursor-pointer border ${
                  selectedQuestions.includes(q.id)
                    ? "bg-theme text-white border-theme"
                    : "bg-gray-50 border-gray-200"
                }`}
                onClick={() => toggleQuestion(q.id)}
              >
                {q.text}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <Button onClick={handleRefreshQuestions}>Refresh Questions</Button>
            <div className="space-x-2">
              <Button>Download PDF without answer</Button>
              <Button>Download PDF with answer</Button>
              <Button>Print</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
