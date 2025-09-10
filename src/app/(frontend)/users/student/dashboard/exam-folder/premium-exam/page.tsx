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
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      <div className="max-w-5xl bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-green-200 dark:border-green-900/50">
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400">
            প্রিমিয়াম এক্সাম
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            প্রিমিয়াম প্রশ্নে পরীক্ষা দিন এবং নিজের দক্ষতা যাচাই করুন
          </p>
          <Divider className="mt-5 w-24 bg-green-600 dark:bg-green-500 h-1 rounded-full" />
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            কোন বিষয় পরিক্ষা দিতে চাও?
          </h2>
          <p className="mt-2 mb-6 text-gray-600 dark:text-gray-400">
            নিচ থেকে আপনার পছন্দের বিষয় নির্বাচন করুন
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {subjects.map((subject, index) => (
              <Card
                key={index}
                className="aspect-square bg-gradient-to-r from-green-50 via-amber-50 to-green-50 dark:from-green-900/20 dark:via-amber-900/20 dark:to-green-900/20 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg border border-green-200 dark:border-green-800/50"
                isPressable
                onPress={() =>
                  router.push(
                    `/users/student/dashboard/exam-folder/premium-exam/${subject.slug}?title=${subject.name}`
                  )
                }
              >
                <CardBody className="flex flex-col items-center justify-center p-4">
                  <span className="text-2xl mb-2">{subject.icon}</span>
                  <span className="text-sm font-medium text-center text-gray-800 dark:text-gray-200">
                    {subject.name}
                  </span>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectSelectionPage;
