"use client";
import {
  Card,
  CardBody,
  Input,
  Switch,
  Tab,
  Tabs,
  Button,
  Divider,
} from "@heroui/react";
import { Clock, File, TriangleAlert } from "lucide-react";
import Link from "next/link";
import React, { useState, Key } from "react";

const Page = () => {
  const [examTime, setExamTime] = useState("");
  const [examType, setExamType] = useState<Key>("mcq");
  const [negativeMarking, setNegativeMarking] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      examTime,
      examType,
      negativeMarking,
    });
    alert("পরীক্ষার সেটিংস সফলভাবে সংরক্ষণ হয়েছে!");
  };

  return (
    <div className="min-h-screen bg-amber-50 dark:bg-gray-900 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-green-200 dark:border-green-900/50">
          <CardBody className="p-6 md:p-8">
            {/* Header Section */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">
                প্রিমিয়াম এক্সাম
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                পরীক্ষার সেটিংস কনফিগার করুন
              </p>
              <Divider className="bg-green-600 dark:bg-green-500 my-6" />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Left Column - Time Input */}
                <div className="flex flex-col space-y-6">
                  <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-xl">
                    <h2 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-4 flex items-center gap-2">
                      <Clock className="text-green-600 dark:text-green-400" />
                      মোট সময়
                    </h2>
                    <div className="flex flex-col">
                      <Input
                        variant="bordered"
                        radius="sm"
                        type="number"
                        value={examTime}
                        onChange={(e) => setExamTime(e.target.value)}
                        placeholder="মিনিটে সময় লিখুন"
                        className="text-lg py-3"
                        required
                        classNames={{
                          inputWrapper:
                            "border-green-300 dark:border-green-700 hover:border-green-500 dark:hover:border-green-500",
                        }}
                      />
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        পরীক্ষার মোট সময় মিনিটে নির্ধারণ করুন
                      </p>
                    </div>
                  </div>

                  {/* Negative Marking Section */}
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-6 rounded-xl">
                    <h2 className="text-xl font-semibold text-amber-800 dark:text-amber-300 mb-4 flex items-center gap-2">
                      <TriangleAlert className="text-amber-600 dark:text-amber-400" />
                      নেগেটিভ মার্কিং
                    </h2>
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300">
                          নেগেটিভ মার্কিং সক্রিয় করুন
                        </span>
                        <Switch
                          isSelected={negativeMarking}
                          onValueChange={setNegativeMarking}
                          color="warning"
                        />
                      </div>
                      {negativeMarking && (
                        <p className="text-amber-700 dark:text-amber-300 bg-amber-200 dark:bg-amber-800/50 p-2 rounded-md text-sm mt-2">
                          ⚠️ ১টি ভূলের জন্য ০.২৫ মার্কস কাটা যাবে
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column - Exam Type */}
                <div className="flex flex-col space-y-6">
                  <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-xl h-full">
                    <h2 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-4 flex items-center gap-2">
                      <File className="text-green-600 dark:text-green-400" />
                      প্রশ্নের ধরণ
                    </h2>
                    <div className="flex flex-col justify-center">
                      <Tabs
                        aria-label="Exam type options"
                        size="lg"
                        // selectedKey={examType} // have to fix this
                        onSelectionChange={setExamType}
                        className="justify-center"
                        color="success"
                      >
                        <Tab key="mcq" title="MCQ" className="text-lg">
                          <div className="p-4 text-center text-gray-600 dark:text-gray-400">
                            <p>বহু নির্বাচনী প্রশ্ন</p>
                            <p className="text-sm mt-2">
                              একাধি থেকে সঠিক উত্তর নির্বাচন করুন
                            </p>
                          </div>
                        </Tab>
                        <Tab key="cq" title="CQ" className="text-lg">
                          <div className="p-4 text-center text-gray-600 dark:text-gray-400">
                            <p>সৃজনশীল প্রশ্ন</p>
                            <p className="text-sm mt-2">
                              বিস্তারিত উত্তর লিখুন
                            </p>
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confirmation Section */}
              <div className="mt-10 text-center">
                <Button
                  as={Link}
                  href={`/users/student/dashboard/exam-folder/premium-exam/question-type/be-sure/exam-paper-mcq?time=${examTime}`}
                  size="lg"
                  radius="sm"
                  className="bg-green-600 hover:bg-green-700 text-white px-10 py-3 text-lg font-medium dark:bg-green-700 dark:hover:bg-green-800"
                >
                  পরীক্ষা শুরু করুন
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Page;
