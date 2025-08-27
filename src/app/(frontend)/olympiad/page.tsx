"use client";

import { Calendar, Clock, Medal, School, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="bg-gradient-to-br from-[#4DA8FF]/10 via-[#FF6B6B]/20 to-[#FF6B6B]/10 dark:from-[#2A2E3B] dark:via-[#FF6B6B]/20 dark:to-[#2A2E3B]/90 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#4DA8FF] to-[#FF6B6B] text-white py-24">
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
              className="bg-gradient-to-r from-[#4DA8FF] to-[#FF6B6B] hover:brightness-110 text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg"
            >
              এখনই নিবন্ধন করুন
            </Link>
            <Link
              href="#details"
              className="border-2 border-white text-white hover:bg-white hover:text-[#FF6B6B] font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg"
            >
              আরও জানুন
            </Link>
          </div>
        </div>
      </section>

      {/* About Olympiad */}
      <section className="py-20 bg-[#F0F8FF]/30 dark:bg-gray-800">
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
            <h2 className="text-4xl font-bold text-[#4DA8FF] dark:text-[#60A5FA] mb-6">
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
                <Trophy className="text-gradient w-10 h-10" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    মর্যাদাপূর্ণ স্বীকৃতি
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    বিজয়ীরা সনদপত্র ও আন্তর্জাতিক স্বীকৃতি পাবেন
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <School className="text-gradient w-10 h-10" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    বিশেষজ্ঞ মূল্যায়ন
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    নামকরা বিজ্ঞানী ও শিক্ষাবিদদের দ্বারা judged
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
          <h2 className="text-4xl font-bold text-center text-[#4DA8FF] dark:text-[#60A5FA] mb-12">
            আসন্ন অলিম্পিয়াড ইভেন্টসমূহ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {olympiadEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-4 bg-gradient-to-r from-[#4DA8FF] to-[#FF6B6B] text-white font-bold text-xl">
                  {event.title}
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-[#FF6B6B]" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {event.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-[#4DA8FF]" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Medal className="text-gradient" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {event.level}
                    </span>
                  </div>
                  <div className="bg-[#FF6B6B]/10 dark:bg-[#4DA8FF]/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#4DA8FF] mb-1">
                      পুরস্কার:
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {event.prize}
                    </p>
                  </div>
                  <Link
                    href={`/olympiad/register?event=${event.id}`}
                    className="block w-full text-center py-3 px-4 rounded-lg bg-gradient-to-r from-[#4DA8FF] to-[#FF6B6B] text-white font-semibold hover:brightness-110 transition"
                  >
                    এই ইভেন্টে নিবন্ধন
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F0F8FF]/30 dark:bg-gray-800">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center text-[#4DA8FF] dark:text-[#60A5FA] mb-12">
            অংশগ্রহণকারীদের মতামত
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl p-8 transition-shadow duration-300"
              >
                <p className="text-gray-700 dark:text-gray-300 italic mb-6">
                  "{t.quote}"
                </p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="font-semibold text-[#4DA8FF] dark:text-[#60A5FA]">
                    {t.name}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {t.school}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4DA8FF] to-[#FF6B6B] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
            নিজেকে চ্যালেঞ্জ করতে প্রস্তুত?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto drop-shadow">
            এই অঞ্চলের সবচেয়ে মর্যাদাপূর্ণ বিজ্ঞান প্রতিযোগিতায় এখনই নিবন্ধন
            করুন
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/olympiad/register"
              className="bg-white text-[#FF6B6B] font-bold py-4 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg"
            >
              আজই নিবন্ধন করুন
            </Link>
            <Link
              href="/olympiad/syllabus"
              className="border-2 border-white text-white hover:bg-white hover:text-[#FF6B6B] font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg"
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
