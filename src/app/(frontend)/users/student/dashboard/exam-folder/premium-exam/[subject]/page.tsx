"use client";
import {
  Accordion,
  AccordionItem,
  Button,
  Checkbox,
  Divider,
  Input,
  Progress,
} from "@heroui/react";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [questionCount, setQuestionCount] = useState("30");

  // Handle individual topic toggle
  const handleTopicToggle = (topicKey: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topicKey)
        ? prev.filter((k) => k !== topicKey)
        : [...prev, topicKey]
    );
  };

  // Handle subject/chapter checkbox toggle - selects/deselects all topics in that subject
  const handleSubjectToggle = (
    paperIndex: number,
    subjectIndex: number,
    topics: string[]
  ) => {
    const subjectKey = `${paperIndex}-${subjectIndex}`;
    const topicKeys = topics.map(
      (_, i) => `${paperIndex}-${subjectIndex}-${i}`
    );

    setSelectedSubjects((prev) => {
      const newSelected = prev.includes(subjectKey)
        ? prev.filter((k) => k !== subjectKey)
        : [...prev, subjectKey];
      return newSelected;
    });

    // Also toggle all topics in this subject
    setSelectedTopics((prev) => {
      const allTopicsSelected = topicKeys.every((key) => prev.includes(key));
      if (allTopicsSelected) {
        // Remove all topics of this subject
        return prev.filter((key) => !topicKeys.includes(key));
      } else {
        // Add all topics of this subject
        const newTopics = topicKeys.filter((key) => !prev.includes(key));
        return [...prev, ...newTopics];
      }
    });
  };

  // Handle paper checkbox toggle - selects/deselects ALL subjects and topics in that paper
  const handlePaperToggle = (paperIndex: number, subjects: any[]) => {
    const subjectKeys = subjects.map((_, i) => `${paperIndex}-${i}`);
    const allTopicKeys = subjects.flatMap((subject, i) =>
      subject.topics.map((_: any, j: any) => `${paperIndex}-${i}-${j}`)
    );

    const allSubjectsSelected = subjectKeys.every((key) =>
      selectedSubjects.includes(key)
    );

    setSelectedSubjects((prev) => {
      if (allSubjectsSelected) {
        // Remove all subjects of this paper
        return prev.filter((key) => !subjectKeys.includes(key));
      } else {
        // Add all subjects of this paper
        const newSubjects = subjectKeys.filter((key) => !prev.includes(key));
        return [...prev, ...newSubjects];
      }
    });

    // Also toggle all topics in this paper
    setSelectedTopics((prev) => {
      if (allSubjectsSelected) {
        // Remove all topics of this paper
        return prev.filter((key) => !allTopicKeys.includes(key));
      } else {
        // Add all topics of this paper
        const newTopics = allTopicKeys.filter((key) => !prev.includes(key));
        return [...prev, ...newTopics];
      }
    });
  };

  // Check if all subjects in a paper are selected (for paper checkbox state)
  const isPaperSelected = (paperIndex: number, subjects: any[]) => {
    const subjectKeys = subjects.map((_, i) => `${paperIndex}-${i}`);
    // Paper is only selected if ALL subjects are explicitly selected
    return (
      subjectKeys.length > 0 &&
      subjectKeys.every((key) => selectedSubjects.includes(key))
    );
  };

  // Check if some (but not all) subjects in a paper are selected (for indeterminate state)
  const isPaperIndeterminate = (paperIndex: number, subjects: any[]) => {
    const subjectKeys = subjects.map((_, i) => `${paperIndex}-${i}`);
    const selectedCount = subjectKeys.filter((key) =>
      selectedSubjects.includes(key)
    ).length;

    // Also check if any topics are individually selected
    const hasIndividualTopics = subjects.some((subject, i) => {
      const topicKeys = subject.topics.map(
        (_: any, j: any) => `${paperIndex}-${i}-${j}`
      );
      return topicKeys.some((key: any) => selectedTopics.includes(key));
    });

    return (
      (selectedCount > 0 && selectedCount < subjectKeys.length) ||
      (selectedCount === 0 && hasIndividualTopics)
    );
  };

  // Check if all topics in a subject are selected
  const isSubjectSelected = (
    paperIndex: number,
    subjectIndex: number,
    topics: string[]
  ) => {
    return selectedSubjects.includes(`${paperIndex}-${subjectIndex}`);
  };

  // Check if some topics in a subject are selected
  const isSubjectIndeterminate = (
    paperIndex: number,
    subjectIndex: number,
    topics: string[]
  ) => {
    const topicKeys = topics.map(
      (_, i) => `${paperIndex}-${subjectIndex}-${i}`
    );
    const selectedCount = topicKeys.filter((key) =>
      selectedTopics.includes(key)
    ).length;
    const isSubjectFullySelected = selectedSubjects.includes(
      `${paperIndex}-${subjectIndex}`
    );
    return (
      !isSubjectFullySelected &&
      selectedCount > 0 &&
      selectedCount < topicKeys.length
    );
  };

  // Handle proceed button click
  const handleProceed = (e: React.MouseEvent) => {
    const hasSelectedSubjects = selectedSubjects.length > 0;
    const hasSelectedTopics = selectedTopics.length > 0;

    if (!hasSelectedSubjects && !hasSelectedTopics) {
      e.preventDefault(); // stop navigation
      alert("দয়া করে একটি বিষয় নির্বাচন করুন");
    }
  };

  // Calculate selection stats
  const totalSelectedSubjects = selectedSubjects.length;
  const totalSelectedTopics = selectedTopics.length;

  // Example Data
  const papers = [
    {
      title: "১ম পত্র",
      total: "৩০/৬৩৭০ টি প্রশ্ন",
      subjects: [
        {
          name: "ভৌতগণিত ও পরিমাপ",
          progress: "১৫/৫৭৭",
          progressValue: 25,
          topics: [
            "পদার্থবিজ্ঞানের পরিসর ও পরিমাপ",
            "স্কেলার ও ভেক্টর রাশি",
            "মাত্রা ও মাত্রা বিশ্লেষণ",
            "গণনায় ত্রুটি ও নির্ভুলতা",
          ],
        },
        {
          name: "ভেক্টর",
          progress: "১৫/৫৫৪",
          progressValue: 30,
          topics: [
            "ভেক্টরের সংযোগ ও বিয়োগ",
            "ভেক্টরের গুণন",
            "একক ভেক্টর ও অবস্থান ভেক্টর",
            "ভেক্টরের উপাংশ",
          ],
        },
        {
          name: "গতি বিদ্যা",
          progress: "০/৮৫৫",
          progressValue: 0,
          topics: [
            "সরল রৈখিক গতি",
            "বৃত্তাকার গতি",
            "আপেক্ষিক গতি",
            "প্রক্ষেপ গতি",
          ],
        },
      ],
    },
    {
      title: "২য় পত্র",
      total: "২১/৫০৫৫ টি প্রশ্ন",
      subjects: [
        {
          name: "তাপবিদ্যা",
          progress: "০/৫৪৪",
          progressValue: 0,
          topics: [
            "তাপের পরিমাণ ও তাপমাত্রা",
            "তাপ সম্প্রসারণ",
            "অবস্থার পরিবর্তন",
            "তাপগতিবিদ্যার সূত্রসমূহ",
          ],
        },
        {
          name: "স্থির তড়িৎ",
          progress: "৬/৫৬৯",
          progressValue: 10,
          topics: [
            "কুলম্বের সূত্র",
            "বিভব ও বিভব পার্থক্য",
            "ক্যাপাসিটর ও ক্যাপাসিট্যান্স",
            "গাউসের সূত্র",
          ],
        },
        {
          name: "চল তড়িৎ",
          progress: "০/৫২২",
          progressValue: 0,
          topics: [
            "ওহমের সূত্র",
            "বৈদ্যুতিক শক্তি ও ক্ষমতা",
            "কিরশফের সূত্র",
            "বিভিন্ন প্রকার সার্কিট",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50 dark:bg-gray-900 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-800 dark:text-green-400 mb-2">
            প্রিমিয়াম এক্সাম
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            কোন বিষয়ে পরীক্ষা দিতে চাও?
          </p>
          <Divider className="bg-green-600 dark:bg-green-500 mt-5" />
        </div>

        {/* Selection Stats */}

        {/* Papers Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {papers.map((paper, paperIndex) => (
            <div
              key={paperIndex}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-green-200 dark:border-green-900/50"
            >
              {/* Paper Header */}
              <div className="flex justify-between items-center p-4 bg-green-600 dark:bg-green-700">
                <div className="flex items-center gap-3">
                  <Checkbox
                    isSelected={isPaperSelected(paperIndex, paper.subjects)}
                    isIndeterminate={isPaperIndeterminate(
                      paperIndex,
                      paper.subjects
                    )}
                    onValueChange={() =>
                      handlePaperToggle(paperIndex, paper.subjects)
                    }
                    classNames={{
                      base: "rounded-full",
                      icon: "text-white",
                    }}
                    className="text-white"
                    color="success"
                  />
                  <span className="text-lg font-semibold text-white">
                    {paper.title}
                  </span>
                </div>
                <span className="text-sm text-white bg-green-800 dark:bg-green-900 px-2 py-1 rounded-full">
                  {paper.total}
                </span>
              </div>

              {/* Subjects Accordion */}
              <div className="p-4">
                <Accordion variant="splitted" className="gap-2">
                  {paper.subjects.map((subj, i) => {
                    return (
                      <AccordionItem
                        key={`${paperIndex}-${i}`}
                        aria-label={subj.name}
                        classNames={{
                          base: "px-3 py-2 data-[hover=true]:bg-green-50 dark:data-[hover=true]:bg-green-900/20 rounded-lg",
                          title: "text-gray-700 dark:text-gray-300",
                          content: "pt-2 pb-4",
                        }}
                        title={
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-3">
                              <Checkbox
                                isSelected={isSubjectSelected(
                                  paperIndex,
                                  i,
                                  subj.topics
                                )}
                                isIndeterminate={isSubjectIndeterminate(
                                  paperIndex,
                                  i,
                                  subj.topics
                                )}
                                onValueChange={() =>
                                  handleSubjectToggle(
                                    paperIndex,
                                    i,
                                    subj.topics
                                  )
                                }
                                color="success"
                              />
                              <span className="font-medium text-gray-800 dark:text-gray-200">
                                {subj.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {subj.progress}
                              </span>
                              <Progress
                                value={subj.progressValue}
                                className="max-w-16"
                                size="sm"
                                color="success"
                                classNames={{
                                  indicator: "bg-green-600",
                                }}
                              />
                            </div>
                          </div>
                        }
                      >
                        <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            <b className="text-green-700 dark:text-green-400">
                              {subj.name}
                            </b>{" "}
                            এর অন্তর্ভুক্ত বিষয়সমূহ:
                          </p>
                          <div className="space-y-2">
                            {subj.topics.map((topic, topicIndex) => {
                              const topicKey = `${paperIndex}-${i}-${topicIndex}`;
                              const isTopicSelected =
                                selectedTopics.includes(topicKey) ||
                                selectedSubjects.includes(`${paperIndex}-${i}`);
                              return (
                                <div
                                  key={topicIndex}
                                  className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg border border-green-100 dark:border-green-900/50"
                                >
                                  <Checkbox
                                    size="sm"
                                    isSelected={isTopicSelected}
                                    onValueChange={() =>
                                      handleTopicToggle(topicKey)
                                    }
                                    color="success"
                                  />
                                  <span className="text-sm text-gray-700 dark:text-gray-300">
                                    {topic}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            </div>
          ))}
        </div>

        {/* Action Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-green-200 dark:border-green-900/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="w-full md:w-1/3">
              <Input
                radius="sm"
                label="প্রশ্ন সংখ্যা"
                className="w-full"
                variant="bordered"
                value={questionCount}
                onChange={(e) => setQuestionCount(e.target.value)}
                type="number"
                min="1"
                classNames={{
                  label: "text-gray-700 dark:text-gray-400",
                  input: "text-gray-800 dark:text-gray-200",
                  inputWrapper:
                    "border-green-300 dark:border-green-700 hover:border-green-500 dark:hover:border-green-500",
                }}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-2/3 justify-end">
              {/* <Button
                size="lg"
                radius="sm"
                color="default"
                variant="bordered"
                className="border-amber-500 text-amber-600 dark:text-amber-400 dark:border-amber-600"
              >
                আরেকটি বিষয় যুক্ত কর
              </Button> */}
              <Button
                as={Link}
                href="/users/student/dashboard/exam-folder/premium-exam/question-type"
                size="lg"
                radius="sm"
                className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-800"
                onClick={handleProceed}
                isDisabled={
                  totalSelectedSubjects === 0 && totalSelectedTopics === 0
                }
              >
                এগিয়ে যাও ({totalSelectedSubjects + totalSelectedTopics})
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
