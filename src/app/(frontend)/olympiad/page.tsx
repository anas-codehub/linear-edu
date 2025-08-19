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

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-theme text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            বিজ্ঞান অলিম্পিয়াড ২০২৫
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            আপনার বৈজ্ঞানিক মেধার প্রদর্শন করুন এবং প্রখর মস্তিষ্কের সাথে
            প্রতিযোগিতা করুন
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/olympiad/register"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              এখনই নিবন্ধন করুন
            </Link>
            <Link
              href="#details"
              className="bg-transparent hover:bg-blue-700 border-2 border-white text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300"
            >
              আরও জানুন
            </Link>
          </div>
        </div>
      </section>

      {/* About Olympiad */}
      <section className="py-16 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/bigbrain.jpg"
                alt="বিজ্ঞান অলিম্পিয়াডে অংশগ্রহণকারী শিক্ষার্থীরা"
                width={600}
                height={400}
                className="rounded-lg shadow-xl "
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-theme mb-6">
                আমাদের অলিম্পিয়াড প্রোগ্রাম সম্পর্কে
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                লিনিয়ার সায়েন্স একাডেমি অলিম্পিয়াড একটি মর্যাদাপূর্ণ
                প্রতিযোগিতা যা বিশ্বব্যাপী শিক্ষার্থীদের মধ্যে অসাধারণ বৈজ্ঞানিক
                মেধাকে চিহ্নিত করে এবং পুরস্কৃত করে। আমাদের প্রোগ্রামটি তরুণ
                মস্তিষ্ককে চ্যালেঞ্জ করতে এবং বৈজ্ঞানিক নীতির গভীর বোঝাপড়া
                fostered করার জন্য ডিজাইন করা হয়েছে।
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Trophy className="text-theme w-8 h-8 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                      মর্যাদাপূর্ণ স্বীকৃতি
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      বিজয়ীরা সনদপত্র ও আন্তর্জাতিক স্বীকৃতি পাবেন
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <School className="text-theme w-8 h-8 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
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
        </div>
      </section>

      {/* Events Section */}
      <section id="details" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-theme mb-12">
            আসন্ন অলিম্পিয়াড ইভেন্টসমূহ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {olympiadEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-theme text-white p-4">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="text-theme" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {event.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="text-theme" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <Medal className="text-theme" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {event.level}
                    </span>
                  </div>
                  <div className="mt-6 bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-theme mb-2">পুরস্কার:</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {event.prize}
                    </p>
                  </div>
                  <Link
                    href={`/olympiad/register?event=${event.id}`}
                    className="mt-6 inline-block w-full text-center bg-theme hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
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
      <section className="py-16 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-theme mb-12">
            অংশগ্রহণকারীদের মতামত
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-gray-700 dark:text-gray-300 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="font-semibold text-theme">{testimonial.name}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonial.school}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-theme text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            নিজেকে চ্যালেঞ্জ করতে প্রস্তুত?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            এই অঞ্চলের সবচেয়ে মর্যাদাপূর্ণ বিজ্ঞান প্রতিযোগিতায় এখনই নিবন্ধন
            করুন
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/olympiad/register"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              আজই নিবন্ধন করুন
            </Link>
            <Link
              href="/olympiad/syllabus"
              className="bg-transparent hover:bg-amber-700 border-2 border-white text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300"
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
