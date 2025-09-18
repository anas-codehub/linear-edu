"use client";
import { Award, Medal, Star, Trophy } from "lucide-react";
import React from "react";

const achievements = [
  { icon: Award, title: "অলিম্পিয়াড জয়", count: "50+" },
  { icon: Medal, title: "প্রতিযোগিতায় অংশগ্রহণ", count: "200+" },
  { icon: Star, title: "উজ্জ্বল শিক্ষার্থী", count: "150+" },
  { icon: Trophy, title: "সাফল্যের স্বীকৃতি", count: "30+" },
];

const AchievementSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full  -z-10"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-1">
            আমাদের সাফল্য
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-brand-2"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center p-8 rounded-3xl shadow-lg bg-white hover:-translate-y-3 transform transition-all duration-500"
              >
                <div className="p-4 rounded-full mb-4 bg-amber-100">
                  <Icon size={32} className="text-brand-2" />
                </div>
                <span className="text-3xl font-bold mb-2 text-brand-1">
                  {achievement.count}
                </span>
                <span className="text-gray-500 text-center">
                  {achievement.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
