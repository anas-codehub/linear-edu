"use client";

import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";

type ButtonColor =
  | "success"
  | "warning"
  | "default"
  | "primary"
  | "secondary"
  | "danger"
  | undefined;

const subjects: { name: string; color: ButtonColor }[] = [
  { name: "পদার্থবিজ্ঞান", color: "success" },
  { name: "উচ্চতর গণিত", color: "success" },
  { name: "রসায়ন", color: "success" },
  { name: "জীববিজ্ঞান", color: "success" },
  { name: "তথ্য ও যোগাযোগ প্রযুক্তি", color: "warning" },
  { name: "বাংলা", color: "warning" },
  { name: "ইংরেজি", color: "warning" },
  { name: "সাধারণ জ্ঞান", color: "warning" },
  { name: "পরিসংখ্যান", color: "warning" },
];

const Page = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-xl font-semibold text-center mb-8">
        দ্রুত প্র্যাকটিস
      </h1>

      <div className="flex flex-col items-center gap-4">
        {subjects.map((subject, index) => (
          <Link
            key={index}
            href={`/users/student/dashboard/fast-practice/choose-paper/${encodeURIComponent(
              subject.name
            )}`}
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
