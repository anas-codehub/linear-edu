import { User } from "lucide-react";
import React from "react";

const LeaderBoardSection = () => {
  const leaderboard = [
    { rank: 1, name: "আব্দুর রাহমান", college: "ABC College", points: 98 },
    { rank: 2, name: "রিতেশ দাস অর্ক", college: "XYZ College", points: 95 },
    { rank: 3, name: "প্রান্ত সাহা", college: "LMN College", points: 93 },
    { rank: 4, name: "ঝঙ্কর মাহবুব", college: "PQR College", points: 90 },
    { rank: 5, name: "সুমিত সাহা", college: "DEF College", points: 88 },
  ];

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-yellow-100 dark:bg-yellow-900 border-yellow-400";
      case 2:
        return "bg-gray-100 dark:bg-gray-700 border-gray-400";
      case 3:
        return "bg-gray-100 dark:bg-gray-700 border-gray-400";
      default:
        return "bg-gradient-to-b from-[#F0F8FF] via-[#FFEFF0] to-[#F0F8FF] dark:from-[#2A2E3B] dark:via-[#3B2A2A] dark:to-[#2A2E3B] border-gray-300 dark:border-gray-600";
    }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E6F0FF] via-[#FFE6E6] to-[#E6F0FF] dark:from-[#1A202C] dark:via-[#3B1A1A] dark:to-[#1A202C] animate-gradient-slow -z-10"></div>

      {/* Title */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] dark:text-[#60A5FA]">
          শিক্ষার্থীর লিডারবোর্ড
        </h2>
        <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#4DA8FF] via-[#FF6B6B] to-[#4DA8FF]"></div>
      </div>

      {/* Leaderboard Rows */}
      <div className="flex flex-col justify-center items-center gap-4 relative z-10">
        {leaderboard.map((student) => (
          <div
            key={student.rank}
            className={`flex items-center justify-between w-full max-w-md md:max-w-2xl px-6 py-3 rounded-2xl shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl border ${getRankStyle(
              student.rank
            )}`}
          >
            {/* Rank / Medal */}
            <div className="flex items-center w-16 justify-center">
              {student.rank === 1 ? (
                <span className="text-yellow-500 font-bold text-lg">🥇</span>
              ) : student.rank === 2 ? (
                <span className="text-gray-500 font-bold text-lg">🥈</span>
              ) : student.rank === 3 ? (
                <span className="text-orange-500 font-bold text-lg">🥉</span>
              ) : (
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {student.rank}th
                </p>
              )}
            </div>

            {/* User Avatar */}
            <User className="w-10 h-10 text-gray-600 dark:text-gray-300" />

            {/* Name & College */}
            <div className="flex flex-col flex-1 ml-4">
              <p className="font-semibold text-[#1E3A8A] dark:text-[#60A5FA]">
                {student.name}
              </p>
              <p className="text-sm text-[#6B7280] dark:text-[#A1A1AA]">
                {student.college}
              </p>
            </div>

            {/* Points */}
            <p className="font-bold text-[#FF6B6B] dark:text-[#4DA8FF] w-12 text-right">
              {student.points} PTS
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeaderBoardSection;
