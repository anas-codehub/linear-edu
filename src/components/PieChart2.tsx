"use client";

import * as React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Goal } from "lucide-react";
import Image from "next/image";

// Chart data with color for each type
const chartData = [
  { name: "ভুল", value: 70, fill: "#FFCD56" },
  { name: "সঠিক", value: 82, fill: "#4BC0C0" },
  { name: "স্কিপড", value: 221, fill: "#36A2EB" },
];

export function PieChart2() {
  const total = chartData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <Card className="h-[305px] w-[150px] flex items-center justify-center bg-white dark:bg-dark-2 border-none shadow-md">
      <div className="flex flex-col w-full items-center gap-3 px-4">
        {/* Header */}
        <div className="flex items-center gap-1">
          <Goal className="text-[#f49e25]" size={18} />
          <p className="text-md font-semibold">এক্টিভিটি</p>
        </div>

        {/* Legend */}
        <div className="text-sm flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <Image
              src="/homepage/ellipse 5.png"
              alt="Right"
              height={10}
              width={10}
            />
            <p>৮২ সঠিক</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/homepage/ellipse 4.png"
              alt="Wrong"
              height={10}
              width={10}
            />
            <p>৭০ ভুল</p>
          </div>

          <div className="flex gap-2 items-center">
            <Image
              src="/homepage/ellipse 3.png"
              alt="Skipped"
              height={10}
              width={10}
            />
            <p>২২১ স্কিপড</p>
          </div>
        </div>

        {/* Pie Chart with ChartContainer */}
        <div className="relative">
          <ChartContainer
            className="overflow-visible"
            style={{ width: 130, height: 130 }}
            config={{ width: 130, height: 130 }}
          >
            <PieChart width={130} height={130}>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="value"
                innerRadius={30}
                outerRadius={50}
                paddingAngle={2}
                stroke="none"
                isAnimationActive={false}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>
      </div>
    </Card>
  );
}
