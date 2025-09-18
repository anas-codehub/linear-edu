"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const OlympiadSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full z-10"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full z-10"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative">
        <div className="bg-amber-50 rounded-xl p-8 md:p-12 shadow-md transition-all ">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-1 mb-4">
            আমাদের অলিম্পিয়াড প্রোগ্রাম
          </h2>
          <p className="text-green-600 md:text-lg mb-8 max-w-2xl mx-auto">
            আমাদের অলিম্পিয়াড প্রোগ্রাম শিক্ষার্থীদের গণিত, বিজ্ঞান, কম্পিউটার
            ও ভাষার দক্ষতা বাড়ানোর জন্য একটি প্রতিযোগিতামূলক প্ল্যাটফর্ম। এটি
            অংশগ্রহণকারীদের সমস্যা সমাধান, সৃজনশীল চিন্তাভাবনা ও আত্মবিশ্বাস
            উন্নত করতে সাহায্য করে।
          </p>

          <div className="flex justify-center">
            <Button
              as={Link}
              href="/olympiad"
              variant="solid"
              radius="lg"
              className="bg-brand-1 hover:bg-brand-2 text-white transition px-8 py-3 rounded-lg font-medium"
            >
              এখনই যুক্ত হন
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OlympiadSection;
