import { Award, Medal, Star, Trophy } from "lucide-react";
import React from "react";

const achievements = [
  {
    icon: <Award className="w-10 h-10 text-[#4DA8FF]" />,
    title: "অলিম্পিয়াড জয়",
    count: "50+",
  },
  {
    icon: <Medal className="w-10 h-10 text-[#FF6B6B]" />,
    title: "প্রতিযোগিতায় অংশগ্রহণ",
    count: "200+",
  },
  {
    icon: <Star className="w-10 h-10 text-[#4DA8FF]" />,
    title: "উজ্জ্বল শিক্ষার্থী",
    count: "150+",
  },
  {
    icon: <Trophy className="w-10 h-10 text-[#FF6B6B]" />,
    title: "সাফল্যের স্বীকৃতি",
    count: "30+",
  },
];

const AchievementSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E6F0FF] via-[#FFE6E6] to-[#E6F0FF] dark:from-[#1A202C] dark:via-[#3B1A1A] dark:to-[#1A202C] animate-gradient-slow -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A8A] dark:text-[#60A5FA]">
            আমাদের সাফল্য
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#4DA8FF] via-[#FF6B6B] to-[#4DA8FF]"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-b from-[#F0F8FF] via-[#FFEFF0] to-[#F0F8FF] dark:from-[#2A2E3B] dark:via-[#3B2A2A] dark:to-[#2A2E3B]"
            >
              {/* Icon with hover glow */}
              <div className="flex justify-center mb-4 transition-transform duration-300 hover:scale-125">
                <div className="relative">
                  {achievement.icon}
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4DA8FF]/20 via-[#FF6B6B]/20 to-[#4DA8FF]/20 opacity-0 hover:opacity-50 transition-opacity duration-500"></span>
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-[#1E3A8A] dark:text-[#60A5FA] mb-2">
                {achievement.count}
              </h3>
              <p className="text-[#6B7280] dark:text-[#A1A1AA]">
                {achievement.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
