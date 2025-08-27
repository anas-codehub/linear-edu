import React from "react";

const StatsSection = () => {
  const stats = [
    { label: "মোট শিক্ষার্থী", value: "1,200+" },
    { label: "কোর্স সম্পন্ন", value: "350+" },
    { label: "শিক্ষক", value: "45+" },
    { label: "পুরস্কার জেতা", value: "12+" },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E6F0FF] via-[#FFE6E6] to-[#E6F0FF] dark:from-[#1A202C] dark:via-[#3B1A1A] dark:to-[#1A202C] animate-gradient-slow -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] dark:text-[#60A5FA]">
            আমাদের শিক্ষার্থীদের সাফল্য
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#4DA8FF] via-[#FF6B6B] to-[#4DA8FF]"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-6 text-center shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl bg-gradient-to-b from-[#F0F8FF] via-[#FFEFF0] to-[#F0F8FF] dark:from-[#2A2E3B] dark:via-[#3B2A2A] dark:to-[#2A2E3B]"
            >
              <span className="block text-4xl md:text-5xl font-bold text-[#FF6B6B] dark:text-[#4DA8FF] mb-2">
                {stat.value}
              </span>
              <span className="text-lg text-[#6B7280] dark:text-[#A1A1AA]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
