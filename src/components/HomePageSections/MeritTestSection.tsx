import Link from "next/link";
import React from "react";

const MeritTestSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E6F0FF] via-[#FFE6E6] to-[#E6F0FF] dark:from-[#1A202C] dark:via-[#3B1A1A] dark:to-[#1A202C] animate-gradient-slow -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative">
        <div className="bg-gradient-to-b from-[#F0F8FF] via-[#FFEFF0] to-[#F0F8FF] dark:from-[#2A2E3B] dark:via-[#3B2A2A] dark:to-[#2A2E3B] rounded-xl p-8 md:p-12 shadow-md transition-all hover:shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] dark:text-[#60A5FA] mb-4">
            মেধা যাচাই
          </h2>
          <p className="text-[#6B7280] dark:text-[#A1A1AA] md:text-lg mb-8 max-w-2xl mx-auto">
            আমাদের মেধা যাচাই প্রক্রিয়ার মাধ্যমে শিক্ষার্থীদের দক্ষতা ও জ্ঞানের
            মান যাচাই করা হয়। অংশগ্রহণ করুন এবং আপনার যোগ্যতা প্রমাণ করুন।
          </p>
          <Link
            href="/medha-jachai"
            className="inline-block bg-red-400 hover:bg-red-500 text-white transition px-8 py-3 rounded-lg font-medium"
          >
            এখন যাচাই করুন
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MeritTestSection;
