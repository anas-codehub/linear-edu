"use client";
import React from "react";
import { Users, BookOpen, Award, Trophy } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { label: "মোট শিক্ষার্থী", value: "1,200+", icon: Users },
    { label: "কোর্স সম্পন্ন", value: "350+", icon: BookOpen },
    { label: "শিক্ষক", value: "45+", icon: Award },
    { label: "পুরস্কার জেতা", value: "12+", icon: Trophy },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-1">
            শিক্ষার্থীদের সাফল্য
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            আমাদের শিক্ষার্থীরা যা অর্জন করেছে তা দেখুন
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col items-center p-8 rounded-3xl shadow-lg bg-white hover:-translate-y-3 transform transition-all duration-500"
              >
                <div className="p-4 rounded-full mb-4 bg-amber-100">
                  <Icon size={32} className="text-brand-2" />
                </div>
                <span className="text-3xl font-bold mb-2 text-brand-1">
                  {stat.value}
                </span>
                <span className="text-gray-500 text-center">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
