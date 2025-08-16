import Link from "next/link";
import React from "react";

const MeritTestSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            মেধা যাচাই
          </h2>
          <p className="text-gray-600 dark:text-gray-300 md:text-lg mb-8 max-w-2xl mx-auto">
            আমাদের মেধা যাচাই প্রক্রিয়ার মাধ্যমে শিক্ষার্থীদের দক্ষতা ও জ্ঞানের
            মান যাচাই করা হয়। অংশগ্রহণ করুন এবং আপনার যোগ্যতা প্রমাণ করুন।
          </p>
          <Link
            href="/medha-jachai"
            className="inline-block bg-amber-500 hover:bg-amber-600 transition px-8 py-3 rounded-lg font-medium text-black"
          >
            এখন যাচাই করুন
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MeritTestSection;
