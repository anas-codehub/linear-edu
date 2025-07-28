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

const chartData = [
  { day: "S", desktop: 186 },
  { day: "M", desktop: 305 },
  { day: "T", desktop: 237 },
  { day: "W", desktop: 73 },
  { day: "T", desktop: 209 },
  { day: "F", desktop: 214 },
  { day: "S", desktop: 214 },
];

export function ChartBarDefault() {
  return (
    <Card className="w-full h-full bg-white dark:bg-gray-800 border-none">
      <CardHeader className="p-4 pb-0">
        <CardTitle>
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
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[300px] p-4">
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
  );
}
