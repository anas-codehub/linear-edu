"use client";
import { BooksSection } from "@/components/StudentDashSections/BooksSection";
import { HistorySection } from "@/components/StudentDashSections/HistorySection";
import { LeaderboardSection } from "@/components/StudentDashSections/LeaderboardSection";
import { LearningSection } from "@/components/StudentDashSections/LearningSection";
import { NotesSection } from "@/components/StudentDashSections/NotesSection";
import { OlympiadSection } from "@/components/StudentDashSections/OlympiadSection";
import { PerformanceSection } from "@/components/StudentDashSections/PerformanceSection";
import { ProgressSection } from "@/components/StudentDashSections/ProgressSection";
import { TestingSection } from "@/components/StudentDashSections/TestingSection";
import { Card, CardBody, Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";

// Main Page Component
const Page = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 1024);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-6 pb-28 md:pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Mobile View */}
        {isMobile ? (
          <div className="flex flex-col">
            <LearningSection />
            <TestingSection />
            <PerformanceSection />
            <ProgressSection />
            <LeaderboardSection />
            <HistorySection />
            <OlympiadSection />
            <BooksSection />
            <NotesSection />
          </div>
        ) : (
          /* Desktop View */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <LearningSection />
              <TestingSection />
              <PerformanceSection />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <OlympiadSection />
                <BooksSection />
              </div>

              <NotesSection />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <ProgressSection />
              <LeaderboardSection />
              <HistorySection />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
