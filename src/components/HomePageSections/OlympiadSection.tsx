import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const OlympiadSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E6F0FF] via-[#FFE6E6] to-[#E6F0FF] dark:from-[#1A202C] dark:via-[#3B1A1A] dark:to-[#1A202C] animate-gradient-slow -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <div className="bg-gradient-to-b from-[#F0F8FF] via-[#FFEFF0] to-[#F0F8FF] dark:from-[#2A2E3B] dark:via-[#3B2A2A] dark:to-[#2A2E3B] rounded-2xl p-8 md:p-12 shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A] dark:text-[#60A5FA] mb-4">
            আমাদের অলিম্পিয়াড প্রোগ্রাম
          </h2>
          <p className="text-[#6B7280] dark:text-[#A1A1AA] md:text-lg mb-8 max-w-2xl mx-auto">
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
              className="bg-[#FF6B6B] hover:bg-[#FF4C4C] text-white transition-colors w-full sm:w-auto text-lg px-8 py-4"
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
