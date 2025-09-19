"use client";

import { Button } from "@heroui/react";
import { Calendar, Clock, Medal, School, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OlympiadPage = () => {
  const olympiadEvents = [
    {
      id: 1,
      title: "গণিত অলিম্পিয়াড",
      date: "১৫ অক্টোবর ২০২৪",
      time: "সকাল ৯:০০ - ১২:০০",
      level: "জাতীয় পর্যায়",
      prize: "ট্রফি + বৃত্তি",
    },
    {
      id: 2,
      title: "পদার্থবিজ্ঞান অলিম্পিয়াড",
      date: "২২ অক্টোবর ২০২৪",
      time: "সকাল ৯:০০ - ১২:০০",
      level: "আন্তর্জাতিক পর্যায়",
      prize: "মেডেল + গবেষণা অনুদান",
    },
    {
      id: 3,
      title: "রসায়ন অলিম্পিয়াড",
      date: "২৯ অক্টোবর ২০২৪",
      time: "সকাল ৯:০০ - ১২:০০",
      level: "আঞ্চলিক পর্যায়",
      prize: "সনদপত্র + ল্যাব সরঞ্জাম",
    },
  ];

  const testimonials = [
    {
      quote:
        "অলিম্পিয়াড আমাকে পাঠ্যবইয়ের বাইরে চিন্তা করতে এবং বাস্তব বিশ্বের সমস্যায় ধারণা প্রয়োগ করতে চ্যালেঞ্জ করেছে।",
      name: "আয়েশা রহমান",
      school: "ঢাকা রেসিডেনসিয়াল মডেল কলেজ",
    },
    {
      quote:
        "পদার্থবিজ্ঞান প্রতিযোগিতা জেতা আমাকে আন্তর্জাতিক গবেষণা সুযোগের দরজা খুলে দিয়েছে।",
      name: "রহিম আহমেদ",
      school: "নটর ডেম কলেজ",
    },
    {
      quote:
        "আমি যে সমস্ত বিজ্ঞান প্রতিযোগিতায় অংশগ্রহণ করেছি তার মধ্যে সবচেয়ে সুসংগঠিত এবং ন্যায্য মূল্যায়ন ছিল।",
      name: "তাসনিম খান",
      school: "ভিকারুননিসা নূন স্কুল",
    },
  ];

  return (
    <div className="relative bg-white dark:bg-dark-2 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-brand-1 dark:bg-bdark-1 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            বিজ্ঞান অলিম্পিয়াড ২০২৫
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow">
            আপনার বৈজ্ঞানিক মেধার প্রদর্শন করুন এবং প্রখর মস্তিষ্কের সাথে
            প্রতিযোগিতা করুন
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {/* <Link
              href="/olympiad/register"
              className="bg-gradient-to-r bg-brand-2 dark:bg-bdark-2 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 "
            >
              এখনই নিবন্ধন করুন
            </Link> */}
            {/* <Link
              href="#details"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg"
            >
              আরও জানুন
            </Link> */}
          </div>
        </div>
      </section>

      {/* About Olympiad */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/bigbrain.jpg"
              alt="বিজ্ঞান অলিম্পিয়াডে অংশগ্রহণকারী শিক্ষার্থীরা"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-brand-1 mb-6">
              আমাদের অলিম্পিয়াড প্রোগ্রাম সম্পর্কে
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              লিনিয়ার সায়েন্স একাডেমি অলিম্পিয়াড একটি মর্যাদাপূর্ণ
              প্রতিযোগিতা যা বিশ্বব্যাপী শিক্ষার্থীদের মধ্যে অসাধারণ বৈজ্ঞানিক
              মেধাকে চিহ্নিত করে এবং পুরস্কৃত করে। আমাদের প্রোগ্রামটি তরুণ
              মস্তিষ্ককে চ্যালেঞ্জ করতে এবং বৈজ্ঞানিক নীতির গভীর বোঝাপড়া
              fostered করার জন্য ডিজাইন করা হয়েছে।
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Trophy className="text-yellow-500 dark:text-yellow-400 w-10 h-10" />
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white">
                    মর্যাদাপূর্ণ স্বীকৃতি
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    বিজয়ীরা সনদপত্র ও আন্তর্জাতিক স্বীকৃতি পাবেন
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <School className="text-blue-600 dark:text-blue-400 w-10 h-10" />
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white">
                    বিশেষজ্ঞ মূল্যায়ন
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    নামকরা বিজ্ঞানী ও শিক্ষাবিদদের দ্বারা judged
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Medal className="text-red-600 dark:text-red-400 w-10 h-10" />
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white">
                    মূল্যবান পুরস্কার
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    ট্রফি, মেডেল, বৃত্তি ও গবেষণা সুযোগ
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center text-green-600 dark:text-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white">
                    আন্তর্জাতিক সুযোগ
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    আন্তর্জাতিক অলিম্পিয়াডে অংশগ্রহণের সুযোগ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="details" className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center text-brand-1 mb-12">
            আসন্ন অলিম্পিয়াড ইভেন্টসমূহ
          </h2>

          <div className="flex justify-center">
            <div className="relative max-w-4xl w-full flex gap-5 flex-col lg:flex-row rounded-3xl border-3 border-brand-2 dark:border-bdark-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-2xl overflow-hidden">
              <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
                <Image
                  src="/bigbrain.jpg"
                  alt="Olympiad"
                  fill
                  className="object-cover"
                />
                <span
                  className="absolute top-8 -left-2 bg-red-600 text-white text-sm font-bold px-8 py-2 shadow-lg"
                  style={{ transform: "rotate(-45deg)" }}
                >
                  Offline
                </span>
              </div>

              <div className="flex flex-col gap-4 text-left flex-1 lg:w-1/2 lg:p-10 p-4 ">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  গণিত অলিম্পিয়াড
                </h2>

                <div className="text-xs text-gray-700 dark:text-gray-300 space-y-3">
                  <p className="flex items-center justify-start gap-3">
                    <span className="text-2xl">📅</span>
                    <span>
                      Registration end:{" "}
                      <span className="font-semibold text-brand-1 dark:text-bdark-1">
                        ১৫ই অক্টোবর
                      </span>
                    </span>
                  </p>
                  <p className="flex items-center justify-start gap-3">
                    <span className="text-2xl">🏆</span>
                    <span>
                      Olympiad held on:{" "}
                      <span className="font-semibold text-brand-1 dark:text-bdark-1">
                        ১৫ই অক্টোবর
                      </span>
                    </span>
                  </p>
                  <p className="flex items-center justify-start gap-3">
                    <span className="text-2xl">⏰</span>
                    <span>
                      Time:{" "}
                      <span className="font-semibold text-brand-1 dark:text-bdark-1">
                        সকাল ৯:০০ - ১২:০০
                      </span>
                    </span>
                  </p>
                  <p className="flex items-center justify-start gap-3">
                    <span className="text-2xl">🎖️</span>
                    <span>
                      Prize:{" "}
                      <span className="font-semibold text-yellow-600 dark:text-yellow-400">
                        Trophy + Certificate
                      </span>
                    </span>
                  </p>
                </div>

                <Button
                  as={Link}
                  href="/olympiad/form"
                  className="mt-6 bg-brand-1 dark:bg-bdark-1 text-white font-bold text-xl py-6 px-5 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  radius="sm"
                  size="md"
                >
                  এখনই নিবন্ধন করুন
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  );
};

export default OlympiadPage;
