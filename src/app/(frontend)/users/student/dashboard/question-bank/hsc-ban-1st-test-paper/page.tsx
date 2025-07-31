"use client";
import { Button, Card, CardBody } from "@heroui/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8 flex flex-col">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex gap-2 items-center mb-4">
          <ArrowLeft size={20} className="text-blue-600" />
          <Link
            className="text-blue-600"
            href="/users/student/dashboard/fast-practice"
          >
            Back
          </Link>
        </div>
        <p className="text-3xl font-bold mb-2">HSC Bangla 1st Test Paper</p>
        <p className="text-xl">
          <b>HSC Bangla 1st Test Paper</b> এর{" "}
          <b>Digital Test Paper (ডিজিটাল টেস্ট পেপার)</b> এ তুমি পাবে{" "}
          <b>বাংলা ১ম পত্র</b> এর সকল বোর্ড প্রশ্ন <b>(HSC Board Question)</b>।
          এইচএসসি এক্সামে A+ নিশ্চিত করতে এখনই বাংলা এর questions practice করে
          নাও।
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        <Link href="/users/student/dashboard/question-bank/hsc-ban-1st-test-paper/mcq">
          <Card className="h-48 w-48 bg-amber-400 ">
            <CardBody className="flex items-center justify-center text-3xl font-bold text-white">
              MCQ
            </CardBody>
          </Card>
        </Link>

        <Link href="/users/student/dashboard/question-bank/hsc-ban-1st-test-paper/cq">
          <Card className="h-48 w-48 bg-amber-400 ">
            <CardBody className="flex items-center justify-center text-3xl font-bold text-white">
              CQ
            </CardBody>
          </Card>
        </Link>

        <Link href="/users/student/dashboard/question-bank/hsc-ban-1st-test-paper/kVandar">
          <Card className="h-48 w-48 bg-amber-400 ">
            <CardBody className="flex items-center justify-center text-3xl font-bold text-white">
              ক ভাণ্ডার
            </CardBody>
          </Card>
        </Link>

        <Link href="/users/student/dashboard/question-bank/hsc-ban-1st-test-paper/khaVandar">
          <Card className="h-48 w-48 bg-amber-400 ">
            <CardBody className="flex items-center justify-center text-3xl font-bold text-white">
              খ ভাণ্ডার
            </CardBody>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default page;
