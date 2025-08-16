import React from "react";

const StatsSection = () => {
  const stats = [
    { label: "মোট শিক্ষার্থী", value: "1,200+" },
    { label: "কোর্স সম্পন্ন", value: "350+" },
    { label: "শিক্ষক", value: "45+" },
    { label: "পুরস্কার জেতা", value: "12+" },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            আমাদের শিক্ষার্থীদের সাফল্য
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6 text-center border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow"
            >
              <span className="block text-4xl md:text-5xl font-bold text-amber-500 mb-2">
                {stat.value}
              </span>
              <span className="text-lg text-gray-600 dark:text-gray-300">
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
