"use client";
import React from "react";
import {
  Play,
  Star,
  Users,
  BookOpen,
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@heroui/react";

const page = () => {
  const instructors = [
    {
      name: "মোহাম্মদ রিফাত হাসান",
      subject: "পদার্থবিজ্ঞান",
      experience: "৫ বছর",
      rating: "৪.৮",
      image: "/api/placeholder/120/120",
    },
    {
      name: "সাদিয়া আক্তার",
      subject: "রসায়ন",
      experience: "৪ বছর",
      rating: "৪.৯",
      image: "/api/placeholder/120/120",
    },
    {
      name: "আহমেদ হাসান",
      subject: "গণিত",
      experience: "৬ বছর",
      rating: "৪.৭",
      image: "/api/placeholder/120/120",
    },
    {
      name: "তানিয়া রহমান",
      subject: "বাংলা",
      experience: "৩ বছর",
      rating: "৪.৮",
      image: "/api/placeholder/120/120",
    },
    {
      name: "মাহবুব আলম",
      subject: "ইংরেজি",
      experience: "৫ বছর",
      rating: "৪.৬",
      image: "/api/placeholder/120/120",
    },
    {
      name: "রুবিনা খাতুন",
      subject: "জীববিজ্ঞান",
      experience: "৪ বছর",
      rating: "৪.৯",
      image: "/api/placeholder/120/120",
    },
    {
      name: "করিম উদ্দিন",
      subject: "পরিসংখ্যান",
      experience: "৭ বছর",
      rating: "৪.৫",
      image: "/api/placeholder/120/120",
    },
    {
      name: "ফারিহা আক্তার",
      subject: "ভূগোল",
      experience: "৩ বছর",
      rating: "ৄ.৮",
      image: "/api/placeholder/120/120",
    },
  ];

  const subjects = [
    { name: "গণিত ১ম পত্র", color: "bg-red-500", icon: "📐" },
    { name: "গণিত ২য় পত্র", color: "bg-red-600", icon: "📊" },
    { name: "উচ্চতর গণিত", color: "bg-teal-500", icon: "∑" },
    { name: "পদার্থবিজ্ঞান", color: "bg-purple-500", icon: "⚛️" },
    { name: "পদার্থ বিজ্ঞান ১ম পত্র", color: "bg-purple-600", icon: "🔬" },
    { name: "পদার্থ বিজ্ঞান ২য় পত্র", color: "bg-purple-700", icon: "⚡" },
    { name: "রসায়নবিজ্ঞান ১ম পত্র", color: "bg-blue-500", icon: "🧪" },
    { name: "রসায়নবিজ্ঞান ২য় পত্র", color: "bg-blue-600", icon: "⚗️" },
    { name: "জীববিজ্ঞান ১ম পত্র", color: "bg-cyan-500", icon: "🧬" },
    { name: "জীববিজ্ঞান ২য় পত্র", color: "bg-cyan-600", icon: "🌱" },
    { name: "প্রাণিবিজ্ঞান ১ম পত্র", color: "bg-green-500", icon: "🐛" },
    { name: "প্রাণিবিজ্ঞান ২য় পত্র", color: "bg-green-600", icon: "🦋" },
    { name: "পরিকল্পনা ও বাস্তবায়ন", color: "bg-orange-500", icon: "📋" },
    { name: "তথ্য ও যোগাযোগ প্রযুক্তি", color: "bg-indigo-500", icon: "💻" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      {/* Hero Section */}
      <section className="bg-brand-1 text-white py-16">
        <div className="flex justify-center items-center gap-10">
          <Image src="/bigbrain.jpg" alt="sdafjbk" width={300} height={300} />

          <div className="flex flex-col justify-center gap-5">
            <p className="text-4xl font-bold">
              লক্ষ্য জিপিএ-৫ HSC ’26 বিজ্ঞান - রিভিশন + মডেল টেস্ট
            </p>
            <p>প্রোগ্রাম সম্পর্কে বিস্তারিত</p>
            <p className="font-bold">এই প্রোগ্রামটি কাদের জন্য?</p>
            <p>
              ১২শ শ্রেণির (HSC ‘26) বিজ্ঞান বিভাগের শিক্ষার্থীদের শেষ মুহূর্তে
              HSC পরীক্ষার সব সাবজেক্টের GPA-5 প্রস্তুতি নিশ্চিতে .
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center bg-brand-2/10 rounded-lg p-4">
              <Users className="w-8 h-8 text-brand-1 mr-3" />
              <div>
                <div className="text-sm ">শিক্ষার্থী</div>
                <div className="text-xl font-bold ">১০+ লাখ</div>
              </div>
            </div>
            <div className="flex items-center bg-brand-1/10 rounded-lg p-4">
              <BookOpen className="w-8 h-8 text-brand-1 mr-3" />
              <div>
                <div className="text-sm ">কোর্স সমূহ</div>
                <div className="text-xl font-bold text-gray-900">
                  ৫০০+ কোর্স
                </div>
              </div>
            </div>
            <div className="flex items-center bg-brand-2/10 rounded-lg p-4">
              <Star className="w-8 h-8 text-brand-1 mr-3" />
              <div>
                <div className="text-sm ">রেটিং</div>
                <div className="text-xl font-bold text-gray-900">৪.৮/৫</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Instructors */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              আমাদের শিক্ষকগণ
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {instructors.map((instructor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow"
                >
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-xs text-gray-600 mb-1">
                    {instructor.subject}
                  </p>
                  <p className="text-xs text-gray-500 mb-2">
                    {instructor.experience} অভিজ্ঞতা
                  </p>
                  <div className="flex items-center justify-center">
                    <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                    <span className="text-xs text-gray-600">
                      {instructor.rating}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button className="bg-brand-1 text-white px-6 py-2 rounded-lg transition-colors">
                আরো দেখুন
              </button>
            </div>
          </div>

          {/* Right Column - Course Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                কোর্স সুবিধাসমূহ
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-brand-1 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  চলমান ব্যাচে যোগদান করে পুরো কোর্স করুন
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-brand-1 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  প্রতিদিন NCTB এর ১ ঘন্টার লাইভ ক্লাস
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-brand-1 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  দেশের সেরা শিক্ষকদের গাইডলাইন পেয়ে পড়াশোনা করুন
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-brand-1 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  প্রতিদিন ডেইলি এক্সাম এ অংশ নিন এবং ৮০,০০০+ টাকার
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-brand-1 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  shikho সার্টিফিকেটের মাধ্যমে আপনার স্কিল প্রমাণিত করুন
                </li>
              </ul>
              <Button className="w-full bg-brand-1 text-white py-3 rounded-lg mt-6  transition-colors">
                কোর্স দেখুন
              </Button>
            </div>

            <div className="text-center text-sm text-gray-600">
              <p>
                আরো বিস্তারিত জানতে{" "}
                <a href="#" className="text-brand-1 underline">
                  যোগাযোগ করুন
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Subjects Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            আমাদের বিষয়সমূহ
          </h2>
          <div className="space-y-3">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div
                  className={`w-10 h-10 ${subject.color} rounded-lg flex items-center justify-center text-white mr-4`}
                >
                  {subject.icon}
                </div>
                <span className="font-medium text-gray-900">
                  {subject.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Promotional Video Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            আমাদের কোর্স প্রিভিউ ও প্রমোশনাল
          </h2>
          <div className=" rounded-xl p-8 text-white relative overflow-hidden">
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
              <Image
                src="/bigbrain.jpg"
                alt="Course banner background"
                fill
                className="object-cover"
                priority
              />

              {/* Content overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <div className="relative z-10 h-full flex flex-col justify-between p-8">
                  {/* Top section - can add logo or badge here */}
                  <div className="flex justify-between items-start">
                    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2">
                      <span className="text-white font-bold text-sm">
                        HSC '26
                      </span>
                    </div>
                  </div>

                  {/* Bottom section - main content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-3 text-white leading-tight">
                        লক্ষ্য জিপিএ-৫ HSC ২৬ বিজ্ঞান
                      </h3>
                      <p className="text-white/90 text-xl font-medium">
                        রিভিশন + মডেল টেস্ট
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-brand-2 text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        কোর্স প্রিভিউ দেখুন
                      </Button>
                      <Button className="bg-brand-1 text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        প্রমোশনাল ভিডিও দেখুন
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 bg-brand-1 rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">
                এখনোও সিদ্ধান্ত নিতে পারেন নি?
              </h3>
              <p className="mb-4">
                শিখো তে রয়েছে দেশের সবচেয়ে অভিজ্ঞ শিক্ষকেরা যারা আপনাকে
                সাফল্যের পথে এগিয়ে নিয়ে যাবেন।
              </p>
              <Button className="bg-white  px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                ১৬৪৯২
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Social Media Links */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-6 flex items-center">
              <Youtube className="w-12 h-12 text-red-600 mr-4" />
              <div>
                <h4 className="font-bold text-gray-900">ইউ টিউব চ্যানেল</h4>
                <p className="text-sm text-gray-600">ভিডিও দেখুন</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 flex items-center">
              <Facebook className="w-12 h-12 text-blue-600 mr-4" />
              <div>
                <h4 className="font-bold text-gray-900">Shikho ফেসবুক পেজ</h4>
                <p className="text-sm text-gray-600">ফলো করুন</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
