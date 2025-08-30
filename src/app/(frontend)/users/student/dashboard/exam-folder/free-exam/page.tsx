"use client";
import { Divider, Card, CardBody, Button } from "@heroui/react";
import React from "react";

const Page = () => {
  // Sample subjects data
  const subjects = [
    { name: "পদার্থবিজ্ঞান", icon: "⚛️" },
    { name: "রসায়ন", icon: "🧪" },
    { name: "গণিত", icon: "∫" },
    { name: "জীববিজ্ঞান", icon: "🧬" },
    { name: "ইংরেজি", icon: "🔤" },
    { name: "বাংলা", icon: "📝" },
    { name: "ইতিহাস", icon: "📜" },
    { name: "ভূগোল", icon: "🌎" },
    { name: "সাধারণ জ্ঞান", icon: "💡" },
    { name: "তথ্য ও যোগাযোগ প্রযুক্তি", icon: "💻" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-2 py-8 px-4">
      <div className="container mx-auto max-w-4xl bg-white dark:bg-dark-3 rounded-2xl shadow-lg p-6 md:p-8">
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#EF4444] ">
            ফ্রি এক্সাম
          </h1>
          <p className=" mt-2">
            বিনামূল্যে পরীক্ষা দিন এবং নিজের দক্ষতা যাচাই করুন
          </p>
          <Divider className="mt-5 w-24 bg-[#EF4444] h-1 rounded-full" />
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold ">
            কোন বিষয় পরিক্ষা দিতে চাও?
          </h2>
          <p className=" mt-2 mb-6">
            নিচ থেকে আপনার পছন্দের বিষয় নির্বাচন করুন
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-8">
            {subjects.map((subject, index) => (
              <Card
                key={index}
                className="h-[150px] w-[200px] bg-gradient-to-r from-[#E6F0FF] via-[#FFE6E6] to-[#E6F0FF] dark:from-[#1A202C] dark:via-[#3B1A1A] dark:to-[#1A202C]  cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg border-0"
                isPressable
                onPress={() => console.log(`Selected: ${subject.name}`)}
              >
                <CardBody className="flex flex-col items-center justify-center p-4">
                  <span className="text-2xl mb-2">{subject.icon}</span>
                  <span className="text-sm font-medium text-center">
                    {subject.name}
                  </span>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        {/* <div className="mt-10 bg-purple-50 rounded-xl p-5 border border-purple-200">
          <h3 className="text-lg font-semibold text-[#EF4444] mb-3">
            পরিক্ষার নিয়মাবলী
          </h3>
          <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1">
            <li>পরিক্ষার সময় ২৫ মিনিট</li>
            <li>মোট প্রশ্ন ২৫ টি</li>
            <li>প্রতিটি সঠিক উত্তরের জন্য ১ নম্বর</li>
            <li>ভুল উত্তরের জন্য -০.২৫ করে নম্বর কাটা যাবে</li>
            <li>পরিক্ষা শেষে ফলাফল দেখতে পারবেন</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Page;
