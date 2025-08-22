"use client";
import { ChartBarDefault } from "@/components/ChartBarDefault";
import { Card, CardBody, Progress, Button } from "@heroui/react";
import {
  ChartArea,
  ArrowRight,
  BookOpen,
  Award,
  Clock,
  FileText,
  Users,
  TrendingUp,
} from "lucide-react";
import React, { useState, useEffect } from "react";

// Data
const subjects = [
  "পরিসংখ্যান",
  "উচ্চতর গণিত",
  "জীববিজ্ঞান",
  "রসায়ন",
  "পদার্থবিজ্ঞান",
  "তথ্য ও যোগাযোগ প্রযুক্তি",
  "ইংরেজি",
  "বাংলা",
];

const historyData = [
  {
    title: "প্রিমিয়াম কোর্স",
    time: "2 mins ago",
    icon: <BookOpen size={16} />,
  },
  { title: "ফ্রি কোর্স", time: "15 mins ago", icon: <BookOpen size={16} /> },
  { title: "প্রিমিয়াম এক্সাম", time: "30 mins ago", icon: <Award size={16} /> },
  { title: "ফ্রি এক্সাম", time: "1 hour ago", icon: <Award size={16} /> },
  {
    title: "নতুন নোট আপলোড",
    time: "2 hours ago",
    icon: <FileText size={16} />,
  },
];

const leaderboard = [
  { rank: 1, name: "Jane Doe", role: "Product Designer", xp: 45 },
  { rank: 2, name: "John Smith", role: "Science Student", xp: 42 },
  { rank: 3, name: "Alice Johnson", role: "Math Enthusiast", xp: 38 },
  { rank: 4, name: "Robert Brown", role: "Biology Learner", xp: 35 },
  { rank: 5, name: "Emma Wilson", role: "Chemistry Student", xp: 32 },
];

// Reusable Components
const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => (
  <header className="text-center mb-6">
    <h1 className="text-2xl md:text-3xl font-bold text-theme mb-2">{title}</h1>
    {description && (
      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
        {description}
      </p>
    )}
  </header>
);

const SectionCard = ({
  title,
  icon,
  children,
  compact = false,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  compact?: boolean;
}) => (
  <Card className="w-full mb-5" radius="lg">
    <CardBody
      className={`p-4 md:p-5 bg-white dark:bg-dark-2 ${
        compact ? "" : "space-y-4"
      }`}
    >
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {children}
    </CardBody>
  </Card>
);

const FeatureCard = ({
  title,
  description,
  color = "blue",
}: {
  title: string;
  description: string;
  color?: "blue" | "purple" | "green" | "red";
}) => {
  const colorClasses = {
    blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    purple:
      "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
    green:
      "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800",
    red: "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800",
  };

  return (
    <Card
      isPressable
      className={`border-2 ${colorClasses[color]} transition-all hover:scale-105`}
      radius="lg"
    >
      <CardBody className="p-3 md:p-4">
        <h4 className="font-semibold mb-1 text-base">{title}</h4>
        <p className="text-sm opacity-80 mb-2">{description}</p>
        <Button size="sm" color="primary" variant="flat" className="text-xs">
          এক্সপ্লোর করুন
        </Button>
      </CardBody>
    </Card>
  );
};

const ComingSoonCard = () => (
  <Card
    className="bg-gray-100 dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-700"
    radius="lg"
  >
    <CardBody className="p-3 text-center">
      <div className="text-gray-500 dark:text-gray-400 text-sm">
        Coming Soon
      </div>
    </CardBody>
  </Card>
);

const ProgressItem = ({ subject }: { subject: string }) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <p className="text-sm">{subject}</p>
      <span className="text-xs text-gray-500">70%</span>
    </div>
    <Progress value={70} color="success" size="sm" radius="sm" />
  </div>
);

const LeaderboardItem = ({ person }: { person: (typeof leaderboard)[0] }) => (
  <div
    className={`flex items-center p-2 md:p-3 rounded-lg ${
      person.rank <= 3
        ? "bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800"
        : "bg-gray-50 dark:bg-gray-800"
    }`}
  >
    <div
      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
        person.rank <= 3
          ? "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300"
          : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
      }`}
    >
      {person.rank}
    </div>
    <div className="ml-3 flex-1 min-w-0">
      <p className="text-sm font-medium truncate">{person.name}</p>
      <p className="text-xs text-gray-500 truncate">{person.role}</p>
    </div>
    <div className="text-sm font-semibold text-amber-600 dark:text-amber-400">
      {person.xp}xp
    </div>
  </div>
);

const HistoryItem = ({ item }: { item: (typeof historyData)[0] }) => (
  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
    <div className="flex items-center gap-2">
      <div className="p-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-full">
        {item.icon}
      </div>
      <span className="text-sm">{item.title}</span>
    </div>
    <span className="text-xs text-gray-500">{item.time}</span>
  </div>
);

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
        <SectionHeader
          title="এডু-প্ল্যাটফর্ম"
          description="আপনার শিক্ষার যাত্রাকে আরও সহজ এবং কার্যকর করে তুলুন আমাদের সম্পূর্ণ রিসোর্সের সাথে"
        />

        {/* Mobile View - Correct Order */}
        {isMobile ? (
          <div className="flex flex-col">
            {/* আমাদের সাথে শিখ */}
            <SectionCard
              title="আমাদের সাথে শিখ"
              icon={<BookOpen className="text-blue-500" size={18} />}
            >
              <div className="grid grid-cols-1 gap-3">
                <FeatureCard
                  title="ফ্রি কোর্স"
                  description="বিনামূল্যে শিখুন বিভিন্ন বিষয়"
                  color="blue"
                />
                <FeatureCard
                  title="প্রিমিয়াম কোর্স"
                  description="এক্সপার্টদের সাথে গভীরভাবে শিখুন"
                  color="purple"
                />
              </div>
            </SectionCard>

            {/* নিজেকে যাচাই কর */}
            <SectionCard
              title="নিজেকে যাচাই কর"
              icon={<Award className="text-amber-500" size={18} />}
            >
              <div className="grid grid-cols-1 gap-3">
                <FeatureCard
                  title="ফ্রি এক্সাম"
                  description="বিনামূল্যে পরীক্ষা দিন"
                  color="green"
                />
                <FeatureCard
                  title="প্রিমিয়াম এক্সাম"
                  description="বিস্তারিত ফলাফল সহ পরীক্ষা"
                  color="red"
                />
              </div>
            </SectionCard>

            {/* পারফরম্যান্স বিশ্লেষণ */}
            <SectionCard
              title="পারফরম্যান্স বিশ্লেষণ"
              icon={<TrendingUp className="text-emerald-500" size={18} />}
            >
              <div className="bg-white dark:bg-dark-2 rounded-xl p-3">
                <ChartBarDefault />
              </div>
            </SectionCard>

            {/* তোমার প্রগ্রেস রিপোর্ট */}
            <SectionCard
              title="তোমার প্রগ্রেস রিপোর্ট"
              icon={<ChartArea className="text-orange-500" size={18} />}
            >
              <div className="space-y-3">
                {subjects.map((subject) => (
                  <ProgressItem key={subject} subject={subject} />
                ))}
              </div>
              <Button
                className="w-full mt-4"
                color="primary"
                variant="flat"
                size="sm"
              >
                বিস্তারিত দেখুন <ArrowRight size={14} className="ml-1" />
              </Button>
            </SectionCard>

            {/* সাপ্তাহিক লিডারবোর্ড */}
            <SectionCard
              title="সাপ্তাহিক লিডারবোর্ড"
              icon={<Users className="text-amber-500" size={18} />}
            >
              <div className="space-y-2">
                {leaderboard.map((person) => (
                  <LeaderboardItem key={person.rank} person={person} />
                ))}
              </div>
              <Button className="w-full mt-3" variant="flat" size="sm">
                সম্পূর্ণ লিডারবোর্ড দেখুন{" "}
                <ArrowRight size={14} className="ml-1" />
              </Button>
            </SectionCard>

            {/* সাম্প্রতিক কার্যক্রম */}
            <SectionCard
              title="সাম্প্রতিক কার্যক্রম"
              icon={<Clock className="text-purple-500" size={18} />}
            >
              <div className="space-y-3">
                {historyData.map((item, index) => (
                  <HistoryItem key={index} item={item} />
                ))}
              </div>
            </SectionCard>

            {/* অলিম্পিয়াড */}
            <SectionCard
              title="অলিম্পিয়াড"
              icon={<Award className="text-amber-500" size={18} />}
              compact
            >
              <div className="space-y-3">
                <ComingSoonCard />
                <ComingSoonCard />
              </div>
            </SectionCard>

            {/* বই পত্র */}
            <SectionCard
              title="বই পত্র"
              icon={<BookOpen className="text-blue-500" size={18} />}
              compact
            >
              <div className="space-y-3">
                <ComingSoonCard />
                <ComingSoonCard />
                <ComingSoonCard />
              </div>
            </SectionCard>

            {/* নোট্‌স */}
            <SectionCard
              title="নোট্‌স"
              icon={<FileText className="text-teal-500" size={18} />}
            >
              <div className="grid grid-cols-1 gap-3">
                <ComingSoonCard />
                <ComingSoonCard />
              </div>
            </SectionCard>
          </div>
        ) : (
          /* Desktop View - Original Layout */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <SectionCard
                title="আমাদের সাথে শিখ"
                icon={<BookOpen className="text-blue-500" size={18} />}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <FeatureCard
                    title="ফ্রি কোর্স"
                    description="বিনামূল্যে শিখুন বিভিন্ন বিষয়"
                    color="blue"
                  />
                  <FeatureCard
                    title="প্রিমিয়াম কোর্স"
                    description="এক্সপার্টদের সাথে গভীরভাবে শিখুন"
                    color="purple"
                  />
                </div>
              </SectionCard>

              <SectionCard
                title="নিজেকে যাচাই কর"
                icon={<Award className="text-amber-500" size={18} />}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <FeatureCard
                    title="ফ্রি এক্সাম"
                    description="বিনামূল্যে পরীক্ষা দিন"
                    color="green"
                  />
                  <FeatureCard
                    title="প্রিমিয়াম এক্সাম"
                    description="বিস্তারিত ফলাফল সহ পরীক্ষা"
                    color="red"
                  />
                </div>
              </SectionCard>

              <SectionCard
                title="পারফরম্যান্স বিশ্লেষণ"
                icon={<TrendingUp className="text-emerald-500" size={18} />}
              >
                <div className="bg-white dark:bg-dark-2 rounded-xl p-3">
                  <ChartBarDefault />
                </div>
              </SectionCard>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SectionCard
                  title="অলিম্পিয়াড"
                  icon={<Award className="text-amber-500" size={18} />}
                  compact
                >
                  <div className="space-y-3">
                    <ComingSoonCard />
                    <ComingSoonCard />
                  </div>
                </SectionCard>

                <SectionCard
                  title="বই পত্র"
                  icon={<BookOpen className="text-blue-500" size={18} />}
                  compact
                >
                  <div className="space-y-3">
                    <ComingSoonCard />
                    <ComingSoonCard />
                    <ComingSoonCard />
                  </div>
                </SectionCard>
              </div>

              <SectionCard
                title="নোট্‌স"
                icon={<FileText className="text-teal-500" size={18} />}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <ComingSoonCard />
                  <ComingSoonCard />
                </div>
              </SectionCard>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <SectionCard
                title="তোমার প্রগ্রেস রিপোর্ট"
                icon={<ChartArea className="text-orange-500" size={18} />}
              >
                <div className="space-y-3">
                  {subjects.map((subject) => (
                    <ProgressItem key={subject} subject={subject} />
                  ))}
                </div>
                <Button
                  className="w-full mt-4"
                  color="primary"
                  variant="flat"
                  size="sm"
                >
                  বিস্তারিত দেখুন <ArrowRight size={14} className="ml-1" />
                </Button>
              </SectionCard>

              <SectionCard
                title="সাপ্তাহিক লিডারবোর্ড"
                icon={<Users className="text-amber-500" size={18} />}
              >
                <div className="space-y-2">
                  {leaderboard.map((person) => (
                    <LeaderboardItem key={person.rank} person={person} />
                  ))}
                </div>
                <Button className="w-full mt-3" variant="flat" size="sm">
                  সম্পূর্ণ লিডারবোর্ড দেখুন{" "}
                  <ArrowRight size={14} className="ml-1" />
                </Button>
              </SectionCard>

              <SectionCard
                title="সাম্প্রতিক কার্যক্রম"
                icon={<Clock className="text-purple-500" size={18} />}
              >
                <div className="space-y-3">
                  {historyData.map((item, index) => (
                    <HistoryItem key={index} item={item} />
                  ))}
                </div>
              </SectionCard>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
