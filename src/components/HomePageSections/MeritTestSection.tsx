import Link from "next/link";
import React from "react";

const MeritTestSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-[#1E40AF]/10 dark:bg-[#10B981]/20 blur-3xl animate-pulse-slow -z-10"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-[#F59E0B]/10 dark:bg-[#8B5CF6]/20 blur-3xl animate-pulse-slow -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative">
        <div
          className="bg-gradient-to-b from-[#1E40AF]/5 via-[#10B981]/5 to-[#F59E0B]/5 
                        dark:from-[#1E40AF]/20 dark:via-[#8B5CF6]/20 dark:to-[#06B6D4]/20 
                        rounded-xl p-8 md:p-12 shadow-md transition-all hover:shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E40AF] dark:text-[#10B981] mb-4">
            মেধা যাচাই
          </h2>
          <p className="text-[#1E40AF]/70 dark:text-[#8B5CF6]/80 md:text-lg mb-8 max-w-2xl mx-auto">
            আমাদের মেধা যাচাই প্রক্রিয়ার মাধ্যমে শিক্ষার্থীদের দক্ষতা ও জ্ঞানের
            মান যাচাই করা হয়। অংশগ্রহণ করুন এবং আপনার যোগ্যতা প্রমাণ করুন।
          </p>
          <Link
            href="/medha-jachai"
            className="inline-block bg-[#EF4444] hover:bg-[#F59E0B] dark:bg-[#8B5CF6] dark:hover:bg-[#06B6D4] text-white transition px-8 py-3 rounded-lg font-medium"
          >
            এখন যাচাই করুন
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MeritTestSection;
