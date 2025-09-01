"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HomeFooter from "@/components/Footers/HomeFooter";
import HeroSection from "@/components/HomePageSections/HeroSection";
import StatsSection from "@/components/HomePageSections/StatsSection";
import VideoSection from "@/components/HomePageSections/VideoSection";
import CourseSection from "@/components/HomePageSections/CourseSection";
import MeritTestSection from "@/components/HomePageSections/MeritTestSection";
import LeaderBoardSection from "@/components/HomePageSections/LeaderBoardSection";
import OlympiadSection from "@/components/HomePageSections/OlympiadSection";
import AchievementSection from "@/components/HomePageSections/AchievementSection";
import TestimonialSection from "@/components/HomePageSections/TestimonialSection";
import WhyWeSection from "@/components/HomePageSections/WhyWeSection";

export default function Home() {
  return (
    <>
      <main className="bg-white dark:bg-[#121212] transition-colors duration-500">
        <HeroSection />

        <StatsSection />

        <VideoSection />

        <CourseSection />

        <MeritTestSection />

        <LeaderBoardSection />

        <OlympiadSection />

        <AchievementSection />

        <TestimonialSection />

        <WhyWeSection />

        <HomeFooter />
      </main>
    </>
  );
}
