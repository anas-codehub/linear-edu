"use client";

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
    <div className="relative bg-gradient-to-br from-blue-50 via-red-50 to-yellow-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-900 min-h-screen overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-200/70 dark:bg-blue-700/30 blur-3xl animate-pulse-slow -z-10"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-red-200/70 dark:bg-red-700/30 blur-3xl animate-pulse-slow -z-10"></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-yellow-200/60 dark:bg-yellow-600/30 blur-3xl animate-pulse-medium -z-10"></div>
      <div className="absolute bottom-20 left-1/4 w-48 h-48 rounded-full bg-green-200/60 dark:bg-green-700/30 blur-3xl animate-pulse-fast -z-10"></div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-red-600 to-yellow-500 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            বিজ্ঞান অলিম্পিয়াড ২০২৫
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow">
            আপনার বৈজ্ঞানিক মেধার প্রদর্শন করুন এবং প্রখর মস্তিষ্কের সাথে
            প্রতিযোগিতা করুন
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/olympiad/register"
              className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              এখনই নিবন্ধন করুন
            </Link>
            <Link
              href="#details"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg"
            >
              আরও জানুন
            </Link>
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
            <h2 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-6">
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
          <h2 className="text-4xl font-bold text-center text-blue-700 dark:text-blue-400 mb-12">
            আসন্ন অলিম্পিয়াড ইভেন্টসমূহ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {olympiadEvents.map((event, index) => {
              const colors = [
                { primary: "blue", secondary: "blue" },
                { primary: "red", secondary: "red" },
                { primary: "green", secondary: "green" },
              ];
              const color = colors[index];

              return (
                <div
                  key={event.id}
                  className={`bg-gradient-to-b from-${color.primary}-50 via-white to-${color.primary}-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-${color.primary}-100 dark:border-${color.primary}-800/50`}
                >
                  <div
                    className={`p-4 bg-${color.primary}-600 text-white font-bold text-xl`}
                  >
                    {event.title}
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className={`text-${color.primary}-600`} />
                      <span className="text-gray-700 dark:text-gray-300">
                        {event.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className={`text-${color.primary}-600`} />
                      <span className="text-gray-700 dark:text-gray-300">
                        {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Medal className={`text-${color.primary}-600`} />
                      <span className="text-gray-700 dark:text-gray-300">
                        {event.level}
                      </span>
                    </div>
                    <div
                      className={`bg-${color.primary}-100 dark:bg-${color.primary}-900/30 p-4 rounded-lg`}
                    >
                      <h4
                        className={`font-semibold text-${color.primary}-700 dark:text-${color.primary}-400 mb-1`}
                      >
                        পুরস্কার:
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {event.prize}
                      </p>
                    </div>
                    <Link
                      href={`/olympiad/register?event=${event.id}`}
                      className={`block w-full text-center py-3 px-4 rounded-lg bg-${color.primary}-600 hover:bg-${color.primary}-700 text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg`}
                    >
                      এই ইভেন্টে নিবন্ধন
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center text-blue-700 dark:text-blue-400 mb-12">
            অংশগ্রহণকারীদের মতামত
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => {
              const colors = ["blue", "red", "green"];
              const color = colors[i];

              return (
                <div
                  key={i}
                  className={`bg-gradient-to-b from-${color}-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-md hover:shadow-xl p-8 transition-all duration-300 border border-${color}-100 dark:border-${color}-800/50`}
                >
                  <p className="text-gray-700 dark:text-gray-300 italic mb-6">
                    "{t.quote}"
                  </p>
                  <div
                    className={`border-t border-${color}-300 dark:border-${color}-700/50 pt-4`}
                  >
                    <p
                      className={`font-semibold text-${color}-700 dark:text-${color}-400`}
                    >
                      {t.name}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {t.school}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-blue-200/70 dark:bg-blue-700/30 blur-3xl animate-pulse-slow -z-10"></div>
        <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-red-200/70 dark:bg-red-700/30 blur-3xl animate-pulse-slow -z-10"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-blue-700 dark:text-blue-400">
            নিজেকে চ্যালেঞ্জ করতে প্রস্তুত?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            এই অঞ্চলের সবচেয়ে মর্যাদাপূর্ণ বিজ্ঞান প্রতিযোগিতায় এখনই নিবন্ধন
            করুন
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/olympiad/register"
              className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              আজই নিবন্ধন করুন
            </Link>
            <Link
              href="/olympiad/syllabus"
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg"
            >
              সিলেবাস ডাউনলোড
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OlympiadPage;
