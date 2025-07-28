"use client";
import React, { useState, ChangeEvent } from "react";
import { Button, Input, Tab, Tabs } from "@heroui/react";
import { ArrowLeft, Bookmark, FlagIcon, Lock, Pencil } from "lucide-react";
import Link from "next/link";

const questions = Array(4).fill({
  number: 1,
  text: '"বিশ্ব" শব্দের অর্থ কী?',
  tag: "BB 20",
});

const LockedButton = () => (
  <Button
    className="w-full max-w-6xl"
    color="warning"
    variant="solid"
    radius="md"
    size="md"
    startContent={<Lock className="h-5 w-5" />}
  >
    <span className="text-sm">
      ব্যাখ্যা আনলক করতে চটি প্রিমিয়াম এ আপগ্রেড করো
    </span>
  </Button>
);

const QuestionCard = ({ number, text, tag }: any) => (
  <div className="bg-white dark:bg-dark-2 p-4 rounded-md space-y-4 w-full max-w-6xl mx-auto mt-5">
    <div className="text-sm">
      <span className="mr-2">{number}.</span>
      <span className="font-semibold">{text}</span>
    </div>
    <div className="flex gap-4 justify-end">
      <p className="bg-blue-900 text-white w-fit rounded-2xl px-2">{tag}</p>
      <FlagIcon size={20} />
      <Bookmark size={20} />
    </div>
    <LockedButton />
  </div>
);

const MoreButton = () => (
  <Button
    className="w-full max-w-6xl mt-5"
    color="warning"
    variant="solid"
    radius="md"
    size="md"
    startContent={<Lock className="h-5 w-5" />}
  >
    আরো প্রশ্ন দেখতে চাইলে চর্চা প্রিমিয়াম আনলক করো
  </Button>
);

const renderTabContent = () => (
  <>
    {questions.map((q, i) => (
      <QuestionCard key={i} {...q} />
    ))}
    <MoreButton />
  </>
);

const Page: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("college");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);
  const handleTabChange = (value: string) => setActiveTab(value);

  return (
    <div className="py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <ArrowLeft size={20} className="text-blue-600" />
          <Link
            href="/users/student/dashboard"
            className="text-blue-600 hover:underline"
          >
            Back
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">ক ভাণ্ডার (Bangla 1st)</h1>

        <div className="flex justify-end items-center gap-3 mb-6">
          <Button
            color="warning"
            variant="solid"
            radius="sm"
            startContent={<Pencil />}
          >
            Practice
          </Button>
        </div>

        <div className="space-y-6">
          <Tabs
            color="warning"
            variant="light"
            className="w-full"
            selectedKey={activeTab}
            onSelectionChange={(key) => setActiveTab(String(key))}
          >
            <Tab key="poddo" title="পদ্য" value="college">
              {renderTabContent()}
            </Tab>
            <Tab key="goddo" title="গদ্য" value="board">
              {renderTabContent()}
            </Tab>
            <Tab key="Upannyash" title="উপন্ন্যাশ" value="board">
              {renderTabContent()}
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Page;
