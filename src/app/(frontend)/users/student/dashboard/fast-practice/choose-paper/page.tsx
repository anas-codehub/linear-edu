"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type ButtonColor =
  | "success"
  | "warning"
  | "default"
  | "primary"
  | "secondary"
  | "danger"
  | undefined;

const subjects: { name: string; color: ButtonColor }[] = [
  { name: "১ম পত্র", color: "warning" },
  { name: "২য় পত্র", color: "warning" },
];

const Page = () => {
  const searchParams = useSearchParams();
  const selectedSubject = searchParams.get("subject");
  const router = useRouter();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-xl font-semibold text-center mb-2">
        দ্রুত প্র্যাকটিস
      </h1>

      {selectedSubject && (
        <h2 className="text-lg text-center font-bold mb-6">
          {selectedSubject}
        </h2>
      )}

      {/* Back Icon */}
      <div className="mb-6 flex justify-center">
        <ArrowLeft size={20} className="text-blue-600" />
        <Link className="text-blue-600" href="/users/student/dashboard">
          Back
        </Link>
      </div>

      <div className="flex flex-col items-center gap-4">
        {subjects.map((subject, index) => (
          <Button
            key={index}
            radius="sm"
            color={subject.color}
            className="w-full max-w-5xl py-6 text-lg"
          >
            {subject.name}
          </Button>
        ))}
      </div>
    </main>
  );
};

export default Page;
