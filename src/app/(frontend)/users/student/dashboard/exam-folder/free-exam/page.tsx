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
    <div className="min-h-screen bg-white dark:bg-dark-2 py-8 px-4">
      <div className="container mx-auto max-w-4xl bg-white dark:bg-dark-3 rounded-2xl shadow-lg p-6 md:p-8">
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#EF4444]">
            ফ্রি এক্সাম
          </h1>
          <p className="mt-2">
            বিনামূল্যে পরীক্ষা দিন এবং নিজের দক্ষতা যাচাই করুন
          </p>
          <Divider className="mt-5 w-24 bg-[#EF4444] h-1 rounded-full" />
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold">কোন বিষয় পরিক্ষা দিতে চাও?</h2>
          <p className="mt-2 mb-6">নিচ থেকে আপনার পছন্দের বিষয় নির্বাচন করুন</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8">
            {subjects.map((subject, index) => (
              <Card
                key={index}
                className="h-[150px] w-[200px] bg-gradient-to-r from-[#E6F0FF] via-[#FFE6E6] to-[#E6F0FF] dark:from-[#1A202C] dark:via-[#3B1A1A] dark:to-[#1A202C] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg border-0"
                isPressable
                onPress={() =>
                  router.push(
                    `/users/student/dashboard/exam-folder/free-exam/${subject.slug}?title=${subject.name}`
                  )
                }
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
      </div>
    </div>
  );
};

export default SubjectSelectionPage;
