import { Award, Medal, Star, Trophy } from "lucide-react";
import React from "react";

const AchievementSection = () => {
  const achievements = [
    {
      icon: <Award className="w-10 h-10 text-amber-500" />,
      title: "অলিম্পিয়াড জয়",
      count: "50+",
    },
    {
      icon: <Medal className="w-10 h-10 text-amber-500" />,
      title: "প্রতিযোগিতায় অংশগ্রহণ",
      count: "200+",
    },
    {
      icon: <Star className="w-10 h-10 text-amber-500" />,
      title: "উজ্জ্বল শিক্ষার্থী",
      count: "150+",
    },
    {
      icon: <Trophy className="w-10 h-10 text-amber-500" />,
      title: "সাফল্যের স্বীকৃতি",
      count: "30+",
    },
  ];
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            আমাদের সাফল্য
          </h2>
          <div className="w-20 h-1 bg-theme mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">{achievement.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {achievement.count}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
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
