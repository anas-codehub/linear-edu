"use client";
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
        return "bg-amber-100 border-amber-400";
      case 2:
        return "bg-green-100 border-green-400";
      case 3:
        return "bg-green-100 border-green-400";
      default:
        return "bg-amber-50 border-green-300";
    }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10"></div>

      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600">
          শিক্ষার্থীর লিডারবোর্ড
        </h2>
        <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-amber-500"></div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 relative z-10">
        {leaderboard.map((student) => (
          <div
            key={student.rank}
            className={`flex items-center justify-between w-full max-w-md md:max-w-2xl px-6 py-3 rounded-2xl shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl border ${getRankStyle(
              student.rank
            )}`}
          >
            <div className="flex items-center w-16 justify-center">
              {student.rank === 1 ? (
                <span className="text-amber-600 font-bold text-lg">🥇</span>
              ) : student.rank === 2 ? (
                <span className="text-green-600 font-bold text-lg">🥈</span>
              ) : student.rank === 3 ? (
                <span className="text-green-600 font-bold text-lg">🥉</span>
              ) : (
                <p className="text-green-600 font-medium">{student.rank}th</p>
              )}
            </div>

            <User className="w-10 h-10 text-green-600" />

            <div className="flex flex-col flex-1 ml-4">
              <p className="font-semibold text-green-600">{student.name}</p>
              <p className="text-green-600 text-sm">{student.college}</p>
            </div>

            <p className="font-bold w-12 text-right text-green-600">
              {student.points} PTS
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeaderBoardSection;
