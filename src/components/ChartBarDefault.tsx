"use client";

import { CalendarDays, Info, TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@heroui/react";

// Daily data for the current month
const dailyDataForMonth = [
  { day: "1", points: 86 },
  { day: "5", points: 135 },
  { day: "10", points: 97 },
  { day: "15", points: 173 },
  { day: "20", points: 209 },
  { day: "25", points: 214 },
  { day: "30", points: 245 },
];

export function ChartBarDefault() {
  // Get current month and year
  const currentDate = new Date();
  const monthName = currentDate.toLocaleString("bn-BD", { month: "long" });
  const year = currentDate.getFullYear();

  return (
    <Card className="w-full h-full bg-white dark:bg-gray-800 border-none">
      <CardHeader className="p-4 pb-0">
        <CardTitle>
          <div className="flex justify-center items-center gap-2">
            <CalendarDays size={24} className="text-[#f49e25]" />
            <p className="text-lg sm:text-xl">মাসিক পয়েন্ট</p>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="light" isIconOnly size="sm">
                  <Info size={16} />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-sm font-bold">মাসিক পয়েন্ট চার্ট</div>
                  <div className="text-xs text-gray-500">
                    এই মাসের আপনার দৈনিক অর্জিত পয়েন্ট
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[300px] p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={dailyDataForMonth}
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
              formatter={(value) => [`${value} পয়েন্ট`, "পয়েন্ট"]}
              labelFormatter={(label) => `দিন: ${label}`}
            />
            <Bar
              dataKey="points"
              fill="#f49e25"
              radius={[4, 4, 0, 0]}
              barSize={24}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <div className="p-4 pt-0 flex items-center justify-center">
        <div className="flex gap-2 items-center text-sm sm:text-base">
          {monthName}, {year}
          <TrendingUp className="h-4 w-4 text-[#f49e25]" />
        </div>
      </div>
    </Card>
  );
}
