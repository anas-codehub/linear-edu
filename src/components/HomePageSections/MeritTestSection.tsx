"use client";
import Link from "next/link";
import React from "react";

const MeritTestSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full -z-10"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full  -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative">
        <div className="bg-amber-50 rounded-xl p-8 md:p-12 shadow-md transition-all">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-1 mb-4">
            মেধা যাচাই
          </h2>
          <p className="text-green-600 md:text-lg mb-8 max-w-2xl mx-auto">
            আমাদের মেধা যাচাই প্রক্রিয়ার মাধ্যমে শিক্ষার্থীদের দক্ষতা ও জ্ঞানের
            মান যাচাই করা হয়। অংশগ্রহণ করুন এবং আপনার যোগ্যতা প্রমাণ করুন।
          </p>
          <Link
            href="/medha-jachai"
            className="inline-block bg-brand-1 hover:bg-brand-2 text-white transition px-8 py-3 rounded-lg font-medium"
          >
            এখন যাচাই করুন
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MeritTestSection;
