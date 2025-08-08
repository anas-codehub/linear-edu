"use client";

import { Divider, Progress } from "@heroui/react";
import {
  Award,
  Crown,
  Flame,
  Gem,
  Infinity as InfinityIcon,
  Medal,
  Shield,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const leagues = [
  {
    name: "আয়রন লীগ",
    getIcon: (size: number) => (
      <Shield size={size} fill="gray" className="text-gray-400" />
    ),
    progress: 20,
  },
  {
    name: "ব্রোঞ্জ লীগ",
    getIcon: (size: number) => (
      <Medal size={size} fill="#cd7f32" className="text-amber-700" />
    ),
    progress: 40,
  },
  {
    name: "সিলভার লীগ",
    getIcon: (size: number) => (
      <Award size={size} fill="#c0c0c0" className="text-gray-400" />
    ),
    progress: 60,
  },
  {
    name: "গোল্ড লীগ",
    getIcon: (size: number) => (
      <Crown size={size} fill="#FFD700" className="text-yellow-500" />
    ),
    progress: 80,
  },
  {
    name: "ডায়মন্ড লীগ",
    getIcon: (size: number) => (
      <Gem size={size} fill="#00FFFF" className="text-cyan-400" />
    ),
    progress: 90,
  },
  {
    name: "ইনফিনিটি লীগ",
    getIcon: (size: number) => (
      <InfinityIcon size={size} className="text-purple-500" />
    ),
    progress: 100,
  },
];

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-7xl container mx-auto px-4 sm:px-6 md:px-20 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl sm:text-2xl font-bold">লিডারবোর্ড</p>
        <Flame className="text-warning" size={24} />
      </div>

      <Divider className="mb-6" />

      {/* Unified League List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 mb-8">
        {leagues.map((league, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveIndex(index);
                }
              }}
              className={`
                flex flex-col items-center cursor-pointer rounded-md p-3 sm:p-4
                transition-all duration-300
                select-none
                ${
                  isActive
                    ? "bg-warning/30 scale-110 shadow-lg"
                    : "bg-transparent opacity-60 hover:opacity-100 scale-95 hover:scale-105"
                }
                min-h-[110px] sm:min-h-[130px]
              `}
            >
              {league.getIcon(isActive ? 80 : 50)}
              <p
                className={`mt-2 font-semibold text-center text-sm sm:text-base ${
                  isActive ? "text-warning" : "text-muted-foreground"
                }`}
              >
                {league.name}
              </p>
              {isActive && (
                <Progress
                  className="w-full mt-3"
                  color="warning"
                  value={league.progress}
                  size="sm"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Leaderboard List */}
      <div className="space-y-3">
        <div className="flex justify-between items-center p-3 bg-warning/10 dark:bg-warning/20 rounded-sm">
          <Link href={"/users/student/dashboard"}>
            <p className="font-medium text-warning cursor-pointer hover:underline text-sm sm:text-base">
              Talat Mahmud Anas (You)
            </p>
          </Link>
          <div className="text-right">
            <p className="font-semibold text-sm sm:text-base">2500</p>
            <p className="text-xs sm:text-sm text-muted-foreground">14 XP</p>
          </div>
        </div>

        {[
          { name: "Abdur Rahman", score: 2400, xp: 12 },
          { name: "Pritom", score: 2300, xp: 10 },
          { name: "Ratul", score: 2200, xp: 8 },
          { name: "Onsi", score: 2100, xp: 6 },
        ].map((player, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-3 bg-white dark:bg-dark-2 rounded-sm"
          >
            <p className="font-medium text-sm sm:text-base">{player.name}</p>
            <div className="text-right">
              <p className="font-semibold text-sm sm:text-base">
                {player.score}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {player.xp} XP
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
