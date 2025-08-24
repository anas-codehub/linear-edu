"use client";

import { CalendarDays, Info, TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  LineChart,
  CartesianGrid,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import { useMemo } from "react";

// Function to generate data for all days in current month
const generateMonthlyData = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get number of days in current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Generate data for all days with smooth progression
  const data = [];
  let currentPoints = 50; // Starting points

  for (let day = 1; day <= daysInMonth; day++) {
    // Add some random fluctuation but maintain upward trend
    const fluctuation = Math.random() * 40 - 20; // -20 to +20
    const dailyIncrease = 6 + Math.random() * 4; // 6-10 points daily increase

    currentPoints += dailyIncrease + fluctuation;

    // Ensure points don't go below 0
    currentPoints = Math.max(30, currentPoints);

    data.push({
      day: day.toString(),
      points: Math.round(currentPoints),
      date: `${day}/${month + 1}`,
    });
  }

  return data;
};

export function LinearBar() {
  const monthlyData = useMemo(() => generateMonthlyData(), []);

  // Get current month and year
  const currentDate = new Date();
  const monthName = currentDate.toLocaleString("bn-BD", { month: "long" });
  const year = currentDate.getFullYear();
  const daysInMonth = monthlyData.length;

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
                    এই মাসের আপনার দৈনিক অর্জিত পয়েন্ট ({daysInMonth} দিন)
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[300px] p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={monthlyData}
            margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#374151"
              opacity={0.3}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              interval={Math.floor(daysInMonth / 10)} // Show ~10 labels
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                background: "#ffffff",
                borderColor: "#e5e7eb",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                fontSize: "14px",
              }}
              formatter={(value) => [`${value} পয়েন্ট`, "পয়েন্ট"]}
              labelFormatter={(label) => `দিন: ${label}`}
            />
            <Line
              type="monotone"
              dataKey="points"
              stroke="#f49e25"
              strokeWidth={3}
              dot={{ fill: "#f49e25", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: "#ff6b00" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
      <div className="p-4 pt-0 flex items-center justify-center">
        <div className="flex gap-2 items-center text-sm sm:text-base">
          {monthName}, {year} ({daysInMonth} দিন)
          <TrendingUp className="h-4 w-4 text-[#f49e25]" />
        </div>
      </div>
    </Card>
  );
}
