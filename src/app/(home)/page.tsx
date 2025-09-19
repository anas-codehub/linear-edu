import HomeFooter from "@/components/Footers/HomeFooter";
import AchievementSection from "@/components/HomePageSections/AchievementSection";
import CourseSection from "@/components/HomePageSections/CourseSection";
import HeroSection from "@/components/HomePageSections/HeroSection";
import LeaderBoardSection from "@/components/HomePageSections/LeaderBoardSection";
import MeritTestSection from "@/components/HomePageSections/MeritTestSection";
import OlympiadSection from "@/components/HomePageSections/OlympiadSection";
import StatsSection from "@/components/HomePageSections/StatsSection";
import TestimonialSection from "@/components/HomePageSections/TestimonialSection";
import VideoSection from "@/components/HomePageSections/VideoSection";
import WhyWeSection from "@/components/HomePageSections/WhyWeSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <VideoSection />
      <CourseSection />
      <MeritTestSection />
      <LeaderBoardSection />
      <OlympiadSection />
      <AchievementSection />
      <TestimonialSection />
      {/* <WhyWeSection /> */}
      <HomeFooter />
    </div>
  );
}
