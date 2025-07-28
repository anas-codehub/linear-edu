"use client";
import { Checkbox, cn } from "@heroui/react";
import { Coins } from "lucide-react";
import React from "react";

const features = [
  {
    title: "মক পরীক্ষা",
    description: "নিজের ইচ্ছেমত বিষয় ও অধ্যায়ভিত্তিক পরীক্ষা",
  },
  {
    title: "পূর্ণ টেস্ট পেপার",
    description: "বিগত ২০ বছরের সকল অ্যাডমিশন টেস্ট এর প্রশ্ন ও সমাধান",
  },
  {
    title: "মডেল টেস্ট",
    description:
      "ভর্তি পরীক্ষার অনুরূপ পেপার/সাবজেক্ট ফাইনাল এবং ফাইনাল মডেল টেস্ট",
  },
  {
    title: "সাপ্তাহিক প্ল্যান",
    description: "সিলেবাস ভাগ করে ২৪ সপ্তাহে MCQ/লিখিত পরীক্ষা",
  },
];

const plans = [
  { price: "500 taka", duration: "1 month" },
  { price: "900 taka", duration: "3 months" },
  { price: "1500 taka", duration: "6 months" },
  { price: "2500 taka", duration: "1 year" },
];

const Page = () => {
  const [selectedPlan, setSelectedPlan] = React.useState<number | null>(null);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-xl shadow-sm hover:shadow-md transition duration-200"
          >
            <div className="p-2 rounded-lg">
              <Coins size={28} className="text-yellow-500" />
            </div>
            <div>
              <p className="text-base sm:text-lg font-semibold">{item.title}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Checkbox Plans */}
      <div className="flex flex-col items-center gap-10">
        {plans.map((plan, index) => (
          <Checkbox
            key={index}
            color="warning"
            isSelected={selectedPlan === index}
            onValueChange={() => setSelectedPlan(index)}
            classNames={{
              base: cn(
                "inline-flex w-full max-w-md bg-white dark:bg-gray-800",
                "hover:bg-content2 items-center justify-start",
                "cursor-pointer rounded-lg gap-2 p-5 border-2 border-transparent",
                "data-[selected=true]:border-primary w-full max-w-6xl"
              ),
              label: "w-full",
            }}
          >
            <div className="ml-2 flex flex-col gap-1">
              <span>{plan.price}</span>
              <span>{plan.duration}</span>
            </div>
          </Checkbox>
        ))}
      </div>
    </div>
  );
};

export default Page;
