import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const OlympiadSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            আমাদের অলিম্পিয়াড প্রোগ্রাম
          </h2>
          <p className="text-gray-600 dark:text-gray-300 md:text-lg mb-8 max-w-2xl mx-auto">
            আমাদের অলিম্পিয়াড প্রোগ্রাম শিক্ষার্থীদের গণিত, বিজ্ঞান, কম্পিউটার
            ও ভাষার দক্ষতা বাড়ানোর জন্য একটি প্রতিযোগিতামূলক প্ল্যাটফর্ম। এটি
            অংশগ্রহণকারীদের সমস্যা সমাধান, সৃজনশীল চিন্তাভাবনা ও আত্মবিশ্বাস
            উন্নত করতে সাহায্য করে।
          </p>

          <div className="flex justify-center">
            <Button
              as={Link}
              href="/users/student/dashboard"
              variant="solid"
              radius="sm"
              className="bg-theme text-white hover:bg-theme-dark transition-colors w-full sm:w-auto text-lg px-8 py-6"
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
