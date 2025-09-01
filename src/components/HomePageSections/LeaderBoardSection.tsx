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
        return "bg-[#F59E0B]/20 dark:bg-[#F59E0B]/40 border-[#F59E0B]";
      case 2:
        return "bg-[#10B981]/20 dark:bg-[#10B981]/40 border-[#10B981]";
      case 3:
        return "bg-[#1E40AF]/20 dark:bg-[#1E40AF]/40 border-[#1E40AF]";
      default:
        return "bg-[#E6F0FF]/30 dark:bg-[#2A2E3B]/40 border-[#06B6D4]";
    }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E40AF]/5 via-[#10B981]/5 to-[#F59E0B]/5 dark:from-[#1E40AF]/20 dark:via-[#8B5CF6]/20 dark:to-[#06B6D4]/20 animate-gradient-slow -z-10"></div>

      {/* Title */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E40AF] dark:text-[#10B981]">
          শিক্ষার্থীর লিডারবোর্ড
        </h2>
        <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#EF4444] to-[#F59E0B]"></div>
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
                <span className="text-[#F59E0B] font-bold text-lg">🥇</span>
              ) : student.rank === 2 ? (
                <span className="text-[#10B981] font-bold text-lg">🥈</span>
              ) : student.rank === 3 ? (
                <span className="text-[#1E40AF] font-bold text-lg">🥉</span>
              ) : (
                <p className="text-[#06B6D4] dark:text-[#8B5CF6] font-medium">
                  {student.rank}th
                </p>
              )}
            </div>

            {/* User Avatar */}
            <User className="w-10 h-10 text-[#06B6D4] dark:text-white" />

            {/* Name & College */}
            <div className="flex flex-col flex-1 ml-4">
              <p className="font-semibold text-[#1E40AF] dark:text-[#10B981]">
                {student.name}
              </p>
              <p className="text-[#06B6D4]/80 dark:text-white text-sm">
                {student.college}
              </p>
            </div>

            {/* Points */}
            <p className="font-bold  w-12 text-right">{student.points} PTS</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeaderBoardSection;
