"use client";
import { Card, CardBody, Button, Progress, Divider, Checkbox } from "@heroui/react";
import { Clock, ArrowLeft, CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const ExamPaperMCQ = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // মিনিটকে সেকেন্ডে কনভার্ট
  const examTimeFromSettings = parseInt(searchParams.get("time") || "0", 10) * 60;

  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  const [timeLeft, setTimeLeft] = useState(examTimeFromSettings);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sample MCQ questions (10 questions for better testing)
  const questions = Array.from({ length: 10 }, (_, i) => ({
    id: `${i + 1}`,
    question: `পদার্থবিজ্ঞান প্রশ্ন ${i + 1}: নিউটনের সূত্র সম্পর্কিত?`,
    options: [
      { id: "a", text: "বিকল্প A" },
      { id: "b", text: "বিকল্প B" },
      { id: "c", text: "বিকল্প C" },
      { id: "d", text: "বিকল্প D" },
    ],
    correctAnswer: "a",
  }));

  // Timer effect
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleOptionSelect = (questionId: string, optionId: string) => {
    if (!selectedOptions[questionId]) {
      setSelectedOptions({ ...selectedOptions, [questionId]: optionId });
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const calculateScore = () => {
    return questions.filter((q) => selectedOptions[q.id] === q.correctAnswer).length;
  };

  const calculateResults = () => {
    const correct = questions.filter((q) => selectedOptions[q.id] === q.correctAnswer).length;
    const wrong = questions.filter((q) => selectedOptions[q.id] && selectedOptions[q.id] !== q.correctAnswer).length;
    const skipped = questions.length - correct - wrong;

    return { correct, wrong, skipped };
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const calculateProgress = () => {
    return (Object.keys(selectedOptions).length / questions.length) * 100;
  };

  if (isSubmitted) {
    const { correct, wrong, skipped } = calculateResults();

    return (
      <div className="min-h-screen bg-amber-50 dark:bg-gray-900 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-green-200 dark:border-green-900/50">
            <CardBody className="p-6 md:p-8">
              <div className="text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-4">পরীক্ষা সম্পন্ন!</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  আপনার উত্তরগুলি সফলভাবে জমা দেওয়া হয়েছে।
                </p>

                {/* Score Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-xl">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <CheckCircle2 className="text-green-600 dark:text-green-400" />
                      <h2 className="text-xl font-semibold text-green-800 dark:text-green-300">সঠিক</h2>
                    </div>
                    <p className="text-4xl font-bold text-green-700 dark:text-green-400">{correct}</p>
                  </div>

                  <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-xl">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <XCircle className="text-red-600 dark:text-red-400" />
                      <h2 className="text-xl font-semibold text-red-800 dark:text-red-300">ভুল</h2>
                    </div>
                    <p className="text-4xl font-bold text-red-700 dark:text-red-400">{wrong}</p>
                  </div>

                  <div className="bg-amber-100 dark:bg-amber-900/30 p-4 rounded-xl">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <HelpCircle className="text-amber-600 dark:text-amber-400" />
                      <h2 className="text-xl font-semibold text-amber-800 dark:text-amber-300">ছেড়েছি</h2>
                    </div>
                    <p className="text-4xl font-bold text-amber-700 dark:text-amber-400">{skipped}</p>
                  </div>
                </div>

                {/* Detailed Results */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">বিস্তারিত ফলাফল</h2>

                  <div className="space-y-6">
                    {questions.map((question, index) => {
                      const userAnswer = selectedOptions[question.id];
                      const isCorrect = userAnswer === question.correctAnswer;
                      const isSkipped = !userAnswer;

                      return (
                        <div
                          key={question.id}
                          className={`p-4 rounded-xl border-2 ${
                            isCorrect
                              ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800/50"
                              : isSkipped
                              ? "bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800/50"
                              : "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800/50"
                          }`}
                        >
                          <div className="flex items-start gap-3 mb-3">
                            {isCorrect ? (
                              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                            ) : isSkipped ? (
                              <HelpCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                            )}
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                              {index + 1}. {question.question}
                            </h3>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-8">
                            {question.options.map((option) => {
                              const isUserAnswer = userAnswer === option.id;
                              const isCorrectOption = option.id === question.correctAnswer;

                              return (
                                <div
                                  key={option.id}
                                  className={`p-2 rounded-lg border-2 ${
                                    isCorrectOption
                                      ? "border-green-500 bg-green-100 dark:bg-green-800/30"
                                      : isUserAnswer
                                      ? "border-red-500 bg-red-100 dark:bg-red-800/30"
                                      : "border-gray-200 dark:border-gray-700"
                                  }`}
                                >
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium text-gray-800 dark:text-gray-200">
                                      {option.id}. {option.text}
                                    </span>
                                    {isCorrectOption && (
                                      <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                                    )}
                                    {isUserAnswer && !isCorrectOption && (
                                      <XCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {!isCorrect && !isSkipped && (
                            <p className="mt-3 ml-8 text-sm text-red-600 dark:text-red-400">
                              আপনার উত্তর: {userAnswer}, সঠিক উত্তর: {question.correctAnswer}
                            </p>
                          )}

                          {isSkipped && (
                            <p className="mt-3 ml-8 text-sm text-amber-600 dark:text-amber-400">
                              আপনি এই প্রশ্নের উত্তর দেননি, সঠিক উত্তর: {question.correctAnswer}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <Button
                  className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-800"
                  size="lg"
                  onPress={() => router.push("/dashboard")}
                >
                  ড্যাশবোর্ডে ফিরে যান
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 dark:bg-gray-900 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <Card className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-green-200 dark:border-green-900/50">
          <CardBody className="p-6 md:p-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <Button
                  isIconOnly
                  variant="light"
                  onPress={() => router.back()}
                  className="text-green-700 dark:text-green-400"
                >
                  <ArrowLeft />
                </Button>
                <h1 className="text-2xl font-bold text-green-700 dark:text-green-400">
                  পদার্থবিজ্ঞান পরীক্ষা ({questions.length} MCQ)
                </h1>
              </div>

              <div className="flex items-center gap-3 bg-amber-100 dark:bg-amber-900/30 px-4 py-2 rounded-full">
                <Clock className="text-amber-600 dark:text-amber-400" />
                <span className="font-mono text-lg font-bold text-amber-700 dark:text-amber-300">
                  {formatTime(timeLeft)}
                </span>
                <span className="text-xs text-amber-600 dark:text-amber-400">(পরীক্ষা)</span>
              </div>
            </div>

            <Divider className="bg-green-200 dark:bg-green-800/50 mb-6" />

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">অগ্রগতি</span>
                <span className="text-sm font-medium text-green-700 dark:text-green-400">
                  {Object.keys(selectedOptions).length}/{questions.length} প্রশ্ন উত্তরিত
                </span>
              </div>
              <Progress value={calculateProgress()} color="success" className="w-full" size="sm" />
            </div>

            {/* Timer Warning for testing */}
            {timeLeft <= 10 && (
              <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg mb-6 text-center">
                <p className="text-amber-700 dark:text-amber-300 font-medium">
                  ⚡ সময় শেষ হতে {timeLeft} সেকেন্ড বাকি!
                </p>
              </div>
            )}

            {/* All Questions in One Page */}
            <div className="space-y-8 max-h-[50vh] overflow-y-auto pr-2">
              {questions.map((question, index) => (
                <div key={question.id} className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    {index + 1}. {question.question}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {question.options.map((option) => (
                      <div
                        key={option.id}
                        onClick={() => handleOptionSelect(question.id, option.id)}
                        className={`p-3 rounded-lg border-2 cursor-pointer transition-all
                            ${
                              selectedOptions[question.id] === option.id
                                ? "border-green-500 bg-green-100 dark:bg-green-800/30"
                                : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 hover:border-green-300 dark:hover:border-green-600"
                            }`}
                      >
                        <div className="flex items-center gap-3">
                          <Checkbox
                            isSelected={selectedOptions[question.id] === option.id}
                            color="success"
                            isDisabled={!!selectedOptions[question.id]}
                          />
                          <span className="text-gray-800 dark:text-gray-200">{option.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Divider className="bg-green-200 dark:bg-green-800/50 my-6" />

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                onPress={handleSubmit}
                isDisabled={Object.keys(selectedOptions).length === 0}
                className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-800 px-10 py-3 text-lg font-medium"
                size="lg"
              >
                জমা দিন ({Object.keys(selectedOptions).length}/{questions.length})
              </Button>
            </div>

            {/* Instructions */}
            <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
              <p className="text-sm text-amber-700 dark:text-amber-300 text-center">
                💡 নির্দেশনা: কমপক্ষে ১টি প্রশ্নের উত্তর দিলে জমা দিতে পারবেন। সময় শেষ হয়ে গলে স্বয়ংক্রিয়ভাবে জমা
                হয়ে যাবে।
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ExamPaperMCQ;
