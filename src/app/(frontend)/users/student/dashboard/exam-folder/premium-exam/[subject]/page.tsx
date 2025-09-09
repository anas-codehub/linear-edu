"use client";
import {
  Accordion,
  AccordionItem,
  Button,
  Checkbox,
  Divider,
  Input,
} from "@heroui/react";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

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
      alert("Please choose a subject");
    }
  };

  // Example Data
  const papers = [
    {
      title: "১ম পত্র",
      total: "৩০/৬৩৭০ টি প্রশ্ন",
      subjects: [
        {
          name: "ভৌতগণিত ও পরিমাপ",
          progress: "১৫/৫৭৭",
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
          topics: [
            "সরল রৈখিক গতি",
            "বৃত্তাকার গতি",
            "আপেক্ষিক গতি",
            "প্রক্ষেপ গতি",
          ],
        },
        {
          name: "নিউটনিয়ান বলবিদ্যা",
          progress: "০/৫৮২",
          topics: [
            "নিউটনের প্রথম সূত্র",
            "নিউটনের দ্বিতীয় সূত্র",
            "নিউটনের তৃতীয় সূt্র",
            "বলের প্রয়োগ ও সমস্যা সমাধান",
          ],
        },
        {
          name: "কাজ, ক্ষমতা, ও শক্তি",
          progress: "০/৫৫৮",
          topics: [
            "কাজের ধারণা ও গণনা",
            "গতিশক্তি ও স্থিতিশক্তি",
            "ক্ষমতা ও এর প্রয়োগ",
            "শক্তির সংরক্ষণ সূত্র",
          ],
        },
        {
          name: "মহাকর্ষ ও অভিকর্ষ",
          progress: "০/৫০৮",
          topics: [
            "নিউটনের মহাকর্ষ সূত্র",
            "অভিকর্ষজ ত্বরণ",
            "কৃত্রিম উপগ্রহের গতি",
            "গ্রহ-নক্ষত্রের গতি",
          ],
        },
        {
          name: "পদার্থের গাঠনিক ধর্ম",
          progress: "০/৫৭৬",
          topics: [
            "ইয়ংয়ের গুণাঙ্ক",
            "পীড়ন ও বিকৃতি",
            "স্থিতিস্থাপকতার সীমা",
            "হুকের সূত্র ও প্রয়োগ",
          ],
        },
        {
          name: "পদার্থবৃত্ত গতি",
          progress: "০/৫৫৫",
          topics: [
            "সরল স্পন্দন গতি",
            "দুলকের গতি",
            "বসন্ত কম্পন",
            "তরঙ্গ গতির মূল বিষয়",
          ],
        },
        {
          name: "তরল",
          progress: "০/৪৮৪",
          topics: [
            "তরলের চাপ ও প্যাসকেলের সূত্র",
            "আর্কিমিডিসের সূত্র",
            "বার্নোলির সমীকরণ",
            "সান্দ্রতা ও পৃষ্ঠটান",
          ],
        },
        {
          name: "আদর্শ গ্যাস ও গ্যাসের গতি তত্ত্ব",
          progress: "০/৫৪৫",
          topics: [
            "গ্যাসের আণবিক গতিতত্ত্ব",
            "আদর্শ গ্যাসের সমীকরণ",
            "গ্যাসের গতিশক্তি",
            "ম্যাক্সওয়েল বিতরণ",
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
          topics: [
            "ওহমের সূত্র",
            "বৈদ্যুতিক শক্তি ও ক্ষমতা",
            "কিরশফের সূত্র",
            "বিভিন্ন প্রকার সার্কিট",
          ],
        },
        {
          name: "তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ও চৌম্বক ক্ষেত্র",
          progress: "০/৫৭৭",
          topics: [
            "চৌম্বক ক্ষেত্র ও চৌম্বক বল",
            "বায়ো-স্যাভার সূত্র",
            "অ্যাম্পিয়ারের সূত্র",
            "চার্জ কণার গতি",
          ],
        },
        {
          name: "তড়িৎচৌম্বকীয় আবেশ",
          progress: "০/৫৫৫",
          topics: [
            "ফ্যারাডের সূত্র",
            "লেনজের সূত্র",
            "পারস্পরিক আবেশ",
            "এসি জেনারেটর",
          ],
        },
        {
          name: "জ্যামিতিক আলোকবিজ্ঞান",
          progress: "০/৫৫৫",
          topics: [
            "প্রতিফলন ও প্রতিসরণ",
            "দর্পণ ও লেন্স",
            "আলোর বিচ্ছুরণ",
            "অপটিক্যাল যন্ত্রপাতি",
          ],
        },
        {
          name: "তরঙ্গ আলোকবিজ্ঞান",
          progress: "১৫/৫৩৭",
          topics: [
            "হাইগেন্সের নীতি",
            "ব্যতিচার ও অপবর্তন",
            "পোলারাইজেশন",
            "ডবল স্লিট এক্সপেরিমেন্ট",
          ],
        },
        {
          name: "আধুনিক পদার্থ বিজ্ঞান",
          progress: "০/৫৪৮",
          topics: [
            "কোয়ান্টাম তত্ত্ব",
            "ফটো ইলেকট্রিক এফেক্ট",
            "বোর মডেল",
            "এক্স-রে ও তাদের ধর্ম",
          ],
        },
        {
          name: "পরমাণু মডেল ও নিউক্লিয়ার পদার্থবিদ্যা",
          progress: "০/৫৫৯",
          topics: [
            "রাদারফোর্ড মডেল",
            "তেজস্ক্রিয় ক্ষয়",
            "নিউক্লিয়ার ফিশন ও ফিউশন",
            "বাইন্ডিং এনার্জি",
          ],
        },
        {
          name: "সেমিকন্ডাক্টর ও ইলেকট্রনিক্স",
          progress: "০/৫৪২",
          topics: [
            "সেমিকন্ডাক্টর ডিভাইস",
            "ডায়োড ও ট্রানজিস্টর",
            "লজিক গেট",
            "ডিজিটাল ইলেকট্রনিক্স",
          ],
        },
        {
          name: "জ্যোতির্বিজ্ঞান",
          progress: "০/৫৪৮",
          topics: [
            "গ্রহ ও নক্ষত্র",
            "গ্যালাক্সি ও মহাবিশ্ব",
            "সৌরজগত",
            "মহাকাশ অভিযান",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <div className="mx-auto container flex flex-col justify-center items-center">
        <div className="mt-10">
          <p className="text-2xl">প্রিমিয়াম এক্সাম</p>
        </div>

        <Divider className="mt-2" />

        <p className="mt-5 text-xl">কোন বিষয়ে পরীক্ষা দিতে চাও?</p>

        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {papers.map((paper, paperIndex) => (
              <div key={paperIndex} className="border rounded-xl p-3">
                {/* Paper Header */}
                <div className="flex justify-between items-center p-3 border-b">
                  <Checkbox
                    isSelected={isPaperSelected(paperIndex, paper.subjects)}
                    isIndeterminate={isPaperIndeterminate(
                      paperIndex,
                      paper.subjects
                    )}
                    onValueChange={() =>
                      handlePaperToggle(paperIndex, paper.subjects)
                    }
                  />
                  <span className="text-lg font-semibold">{paper.title}</span>
                  <span className="text-sm text-gray-400">{paper.total}</span>
                </div>

                {/* Subjects Accordion */}
                <Accordion>
                  {paper.subjects.map((subj, i) => {
                    return (
                      <AccordionItem
                        key={`${paperIndex}-${i}`}
                        aria-label={subj.name}
                        title={
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-2">
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
                              />
                              <span>{subj.name}</span>
                            </div>
                            <span className="text-sm text-gray-400">
                              {subj.progress}
                            </span>
                          </div>
                        }
                      >
                        <div className="p-2">
                          <p className="text-sm text-gray-400 mb-3">
                            <b>{subj.name}</b> এর অন্তর্ভুক্ত বিষয়সমূহ:
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
                                  className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg"
                                >
                                  <Checkbox
                                    size="sm"
                                    isSelected={isTopicSelected}
                                    onValueChange={() =>
                                      handleTopicToggle(topicKey)
                                    }
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
            ))}
          </div>
        </div>
      </div>
      <Divider className="bg-theme" />
      <div className="w-full max-w-6xl mx-auto flex justify-center items-center gap-5 mt-5 mb-5">
        <Input
          radius="sm"
          label="প্রশ্ন সংখ্যা"
          className="w-full max-w-lg"
          variant="bordered"
          classNames={{
            inputWrapper: "border-warning",
          }}
        />
        <div className="flex justify-center items-center gap-5">
          <Button size="lg" radius="sm" color="warning">
            আরেকটি বিষয় যুক্ত কর
          </Button>
          <Button
            as={Link}
            href="/users/student/dashboard/exam-folder/premium-exam/question-type"
            size="lg"
            radius="sm"
            color="warning"
            onClick={(e) => {
              const hasSelectedSubjects = selectedSubjects.length > 0;
              const hasSelectedTopics = selectedTopics.length > 0;

              if (!hasSelectedSubjects && !hasSelectedTopics) {
                e.preventDefault(); // stop navigation
                alert("Please choose a subject");
              }
            }}
          >
            এগিয়ে যাও
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page;
