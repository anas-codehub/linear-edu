"use client";
import { Divider, Card, CardBody } from "@heroui/react";
import React from "react";
import { useRouter } from "next/navigation";

const SubjectSelectionPage = () => {
  const router = useRouter();

  const subjects = [
    { name: "পদার্থবিজ্ঞান", icon: "⚛️", slug: "physics" },
    { name: "রসায়ন", icon: "🧪", slug: "chemistry" },
    { name: "গণিত", icon: "∫", slug: "math" },
    { name: "জীববিজ্ঞান", icon: "🧬", slug: "biology" },
    { name: "ইংরেজি", icon: "🔤", slug: "english" },
    { name: "বাংলা", icon: "📝", slug: "bangla" },
    { name: "ইতিহাস", icon: "📜", slug: "history" },
    { name: "ভূগোল", icon: "🌎", slug: "geography" },
    { name: "সাধারণ জ্ঞান", icon: "💡", slug: "gk" },
    { name: "তথ্য ও যোগাযোগ প্রযুক্তি", icon: "💻", slug: "ict" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 dark:from-gray-900 dark:to-gray-800 py-4 px-4 sm:py-8">
      <div className="container mx-auto max-w-6xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
        <div className="flex flex-col items-center justify-center text-center mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 dark:text-red-500">
            ফ্রি এক্সাম
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
            বিনামূল্যে পরীক্ষা দিন এবং নিজের দক্ষতা যাচাই করুন
          </p>
          <Divider className="mt-3 sm:mt-5 w-16 sm:w-24 bg-red-500 dark:bg-red-600 h-0.5 sm:h-1 rounded-full" />
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100">
            কোন বিষয় পরিক্ষা দিতে চাও?
          </h2>
          <p className="mt-2 mb-4 sm:mb-6 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            নিচ থেকে আপনার পছন্দের বিষয় নির্বাচন করুন
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {subjects.map((subject, index) => (
              <Card
                key={index}
                className="h-28 sm:h-32 md:h-36 lg:h-40 w-full bg-gradient-to-br from-blue-100/70 via-red-100/70 to-blue-100/70 dark:from-blue-900/30 dark:via-red-900/30 dark:to-blue-900/30 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md border border-gray-200/50 dark:border-gray-700/50"
                isPressable
                onPress={() =>
                  router.push(
                    `/users/student/dashboard/exam-folder/free-exam/${subject.slug}?title=${subject.name}`
                  )
                }
              >
                <CardBody className="flex flex-col items-center justify-center p-2 sm:p-3 md:p-4">
                  <span className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">
                    {subject.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-center text-gray-800 dark:text-gray-200 leading-tight">
                    {subject.name}
                  </span>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            নির্বাচিত বিষয়ের উপর বিনামূল্যে পরীক্ষা দিয়ে নিজের জ্ঞান যাচাই করুন
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubjectSelectionPage;
