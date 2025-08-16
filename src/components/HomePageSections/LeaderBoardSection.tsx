import { Trophy } from "lucide-react";
import React from "react";

const LeaderBoardSection = () => {
  const leaderboard = [
    { rank: 1, name: "আব্দুর রাহমান", score: 98 },
    { rank: 2, name: "রিতেশ দাস অর্ক", score: 95 },
    { rank: 3, name: "প্রান্ত সাহা", score: 93 },
    { rank: 4, name: "ঝঙ্কর মাহবুব", score: 90 },
    { rank: 5, name: "সুমিত সাহা", score: 88 },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            শীর্ষ শিক্ষার্থী লিডারবোর্ড
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaderboard.map((student) => (
            <div
              key={student.rank}
              className={`bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow ${
                student.rank === 1 ? "border-2 border-amber-400" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {student.rank === 1 ? (
                    <Trophy className="w-6 h-6 text-amber-500 mr-2" />
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400 font-medium mr-2">
                      #{student.rank}
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {student.name}
                  </h3>
                </div>
                <span className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-sm font-medium">
                  {student.score}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                <div
                  className="bg-amber-500 h-2 rounded-full"
                  style={{ width: `${student.score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeaderBoardSection;
