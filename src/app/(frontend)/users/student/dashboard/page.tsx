"use client";
import { CardContent } from "@/components/ui/card";
import {
  Card,
  CardBody,
  Progress,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  CardHeader,
} from "@heroui/react";
import {
  Target,
  ClipboardPenLine,
  ChartLineIcon,
  Presentation,
  LibraryBig,
  MessageCircleQuestion,
  CalendarDays,
  Info,
  TrendingUp,
  ChartArea,
  Bell,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const chartData = [
  { day: "S", desktop: 186 },
  { day: "M", desktop: 305 },
  { day: "T", desktop: 237 },
  { day: "W", desktop: 73 },
  { day: "T", desktop: 209 },
  { day: "F", desktop: 214 },
  { day: "S", desktop: 214 },
];

const gridItems = [
  {
    href: "/fastPractice",
    icon: <Target size={34} className="text-[#f49e25]" />,
    label: "মেধা যাচাই",
  },
  {
    href: "/mock-exam",
    icon: <ClipboardPenLine size={34} className="text-[#f49e25]" />,
    label: "মক পরীক্ষা",
  },
  {
    href: "/leaderboard",
    icon: <ChartLineIcon size={34} className="text-[#f49e25]" />,
    label: "লিডারবোর্ড",
  },
  {
    href: "/practice-exam",
    icon: <Presentation size={34} className="text-[#f49e25]" />,
    label: "সকল কোর্সসমূহ",
  },
  {
    href: "/users/student/dashboard/question-bank",
    icon: <LibraryBig size={34} className="text-[#f49e25]" />,
    label: "প্রশ্ন ব্যাংক",
  },
  {
    label: "নোটিফিকেশন",
    icon: <Bell size={34} className="text-[#f49e25]" />,
    href: "/settings",
  },
];

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

export default function DashboardPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {gridItems.map((item, i) => (
            <Link href={item.href} key={i}>
              <Card radius="sm" className="h-full">
                <CardBody className="flex flex-col items-center justify-center h-36 p-4 bg-white dark:bg-dark-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  {item.icon}
                  <p className="mt-2 text-center">{item.label}</p>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
        <div>
          <Card className="h-full bg-white dark:bg-gray-800 border-none">
            <CardHeader className="p-4 pb-0">
              <div className="flex justify-center items-center gap-2">
                <CalendarDays size={24} className="text-[#f49e25]" />
                <p className="text-lg sm:text-xl">সাপ্তাহিক পয়েন্ট</p>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="light" isIconOnly size="sm">
                      <Info size={16} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <div className="text-sm font-bold">
                        সাপ্তাহিক পয়েন্ট চার্ট
                      </div>
                      <div className="text-xs text-gray-500">
                        গত সপ্তাহের আপনার অর্জিত পয়েন্ট
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </CardHeader>
            <CardContent className="h-[200px] p-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
                >
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6b7280" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6b7280" }}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#ffffff",
                      borderColor: "#e5e7eb",
                      borderRadius: "0.5rem",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Bar
                    dataKey="desktop"
                    fill="#f49e25"
                    radius={[4, 4, 0, 0]}
                    barSize={24}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
            <div className="p-4 pt-0 flex items-center justify-center">
              <div className="flex gap-2 items-center text-sm sm:text-base">
                May 11 - May 17, 2025
                <TrendingUp className="h-4 w-4 text-[#f49e25]" />
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="w-full" radius="sm">
              <div className="p-4 sm:p-6 bg-white dark:bg-dark-2">
                <div className="flex flex-col md:flex-row gap-4">
                  <Image
                    src="/homepage/pic2.png"
                    alt="Course Thumbnail"
                    width={160}
                    height={120}
                    className="rounded-md object-cover w-full md:w-40 h-auto"
                  />
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">
                      SSC 2025 বাংলা ২য় পত্র ক্র্যাশ কোর্স
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center gap-2">
                      <Progress
                        className="w-full h-2 sm:h-3"
                        value={92}
                        color="primary"
                      />
                      <span className="text-sm whitespace-nowrap">
                        ৯২% সম্পন্ন হয়েছে
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {["▶️ ৩০টি", "📄 ৩০টি", "⏰ ৩০ঘণ্টা"].map((item, i) => (
                        <span
                          key={i}
                          className="bg-opacity-20 px-3 py-1 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="my-4 border-t border-gray-200 dark:border-gray-700" />
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                  <div className="flex items-center gap-2">
                    {[1, 2, 3].map((i) => (
                      <Image
                        key={i}
                        src={`/homepage/${i}.png`}
                        alt="icon"
                        width={20}
                        height={20}
                      />
                    ))}
                    <span className="text-sm sm:text-base">
                      শেখার জন্য প্রস্তুত?
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" color="warning" radius="sm">
                      শেখা শুরু কর
                    </Button>
                    <Button
                      size="sm"
                      variant="bordered"
                      color="warning"
                      radius="sm"
                    >
                      কোর্স হোম
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div>
          <Card className="w-full" radius="sm">
            <CardBody className="p-4 sm:p-6 bg-white dark:bg-dark-2">
              <div className="flex items-center gap-3 mb-4">
                <ChartArea className="text-[#f49e25]" size={24} />
                <h3 className="text-lg font-semibold">
                  তোমার প্রগ্রেস রিপোর্ট
                </h3>
              </div>
              <div className="space-y-3">
                {subjects.map((subject) => (
                  <div key={subject}>
                    <p className="mb-1 text-sm">{subject}</p>
                    <Progress
                      value={70}
                      color="success"
                      size="sm"
                      radius="sm"
                    />
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

        <div>
          <Card className="w-full" radius="sm">
            <CardBody className="p-4 sm:p-6 bg-white dark:bg-dark-2">
              <div className="flex items-center gap-3 mb-4">
                <ChartLineIcon className="text-[#f49e25]" size={24} />
                <h3 className="text-lg font-semibold">সাপ্তাহিক লিডারবোর্ড</h3>
              </div>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((rank) => (
                  <Card
                    radius="sm"
                    className="mb-2 shadow-none border border-default-400"
                    key={rank}
                  >
                    <CardBody className="p-3 bg-white dark:bg-dark-2 shadow-none">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/homepage/anas.jpg"
                            alt="User"
                            width={36}
                            height={36}
                            className="rounded-full"
                          />
                          <div>
                            <div className="text-sm font-medium">Jane Doe</div>
                            <div className="text-xs text-gray-500">
                              Product Designer
                            </div>
                          </div>
                        </div>
                        <div className="text-sm">
                          <span className="font-bold">{rank}</span>
                          <span className="text-gray-500 ml-2">45xp</span>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
