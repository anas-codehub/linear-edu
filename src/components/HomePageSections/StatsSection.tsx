import React from "react";
import { Users, BookOpen, Award, Trophy } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { label: "মোট শিক্ষার্থী", value: "1,200+", icon: Users },
    { label: "কোর্স সম্পন্ন", value: "350+", icon: BookOpen },
    { label: "শিক্ষক", value: "45+", icon: Award },
    { label: "পুরস্কার জেতা", value: "12+", icon: Trophy },
  ];

  const colors = ["#1E40AF", "#10B981", "#F59E0B", "#EF4444"];
  const darkColors = ["#60A5FA", "#059669", "#D97706", "#DC2626"];

  return (
    <section className="py-20 relative  overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#1E40AF]/10 dark:bg-[#60A5FA]/20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[#10B981]/10 dark:bg-[#059669]/20 blur-3xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#1E40AF] dark:text-[#60A5FA]">
            শিক্ষার্থীদের সাফল্য
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
            আমাদের শিক্ষার্থীরা যা অর্জন করেছে তা দেখুন
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col items-center p-8 rounded-3xl shadow-lg bg-white dark:bg-[#1F2937] hover:-translate-y-3 transform transition-all duration-500"
              >
                <div
                  className="p-4 rounded-full mb-4"
                  style={{
                    backgroundColor: colors[idx] + "20",
                  }}
                >
                  <Icon
                    size={32}
                    color={colors[idx]}
                    className="dark:text-white"
                  />
                </div>
                <span
                  className="text-3xl font-bold mb-2"
                  style={{ color: colors[idx] }}
                >
                  {stat.value}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-center">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
