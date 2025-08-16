"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@heroui/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { useParams } from "next/navigation";

type ButtonColor =
  | "success"
  | "warning"
  | "default"
  | "primary"
  | "secondary"
  | "danger"
  | undefined;

const subjects: { name: string; color: ButtonColor; href?: string }[] = [
  {
    name: "১ম পত্র",
    color: "warning",
    href: "/users/student/dashboard/fast-practice/choose-paper/subject/choose-chapter",
  },
  { name: "২য় পত্র", color: "warning" },
];

const Page = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const params = useParams();

  useEffect(() => {
    const subject = decodeURIComponent((params?.subject as string) || "");
    setSelectedSubject(subject);
  }, [params]);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="relative mb-2">
        {/* Back button aligned to left */}
        <Link
          href="/users/student/dashboard/fast-practice"
          className="absolute left-0 flex items-center gap-1 text-blue-600"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </Link>

        {/* Centered heading */}
        <h1 className="text-xl font-semibold text-center">মেধা যাচাই</h1>
      </div>

      {selectedSubject && (
        <h2 className="text-lg text-center font-bold mb-6">
          {selectedSubject}
        </h2>
      )}

      <div className="flex flex-col items-center gap-4">
        {subjects.map((subject, index) => (
          <Link
            href={subject.href ?? "#"}
            key={index}
            className="w-full max-w-5xl"
          >
            <Button
              radius="sm"
              color={subject.color}
              className="w-full py-6 text-lg"
            >
              {subject.name}
            </Button>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Page;
