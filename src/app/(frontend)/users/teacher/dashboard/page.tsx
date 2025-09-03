"use client";
import ExamUICard from "@/components/ExamUICard";
import { Button, Card, CardBody, Image } from "@heroui/react";
import { Clock, FileText } from "lucide-react";
import React from "react";
import NextImage from "next/image";

const page = () => {
  const exam = {
    title: "ভর্তি পরীক্ষার প্রশ্নব্যাংক",
    shortDescription:
      "ইঞ্জিনিয়ারিং, মেডিকেল, গুচ্ছ সহ সকল বিশ্ববিদ্যালয়ের সব ধরণের ভর্তি পরীক্ষার প্রশ্নব্যাংক ও ব্যাখ্যাসহ সমাধান",
    image: "/bigbrain.jpg",
  };

  return (
    <>
      <div className="container mx-auto flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-6xl text-center mt-6 sm:mt-10 space-y-3 sm:space-y-5">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            দেশের প্রথম এবং <span className="text-theme">সবচেয়ে সমৃদ্ধ</span>
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            <span className="text-theme">
              প্রশ্ন, শীট, সাজেশন ও অনলাইন পরীক্ষা
            </span>{" "}
            তৈরির সফটওয়্যার!
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold">এবং</p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            শিক্ষার্থীদের জন্য{" "}
            <span className="text-theme">স্মার্ট প্রশ্নব্যাংক, সেলফটেস্ট</span>{" "}
            ও মডেল টেস্ট!
          </p>
          <div className="text-sm sm:text-base space-y-2">
            <p>
              প্রশ্ন, শীট, সাজেশন, অনলাইন পরীক্ষা তৈরি এবং স্মার্ট বোর্ড
              প্রশ্নব্যাংক ও ভর্তি পরীক্ষার প্রশ্নব্যাংক, টেস্টপেপার, মূল বইয়ের
              সমাধান, আনলিমিটেড রিডিং টেস্ট, সেলফ টেস্ট ও
            </p>
            <p>মডেল টেস্ট!</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 mt-6 sm:mt-10 w-full max-w-md sm:max-w-none">
          <Button
            className="bg-theme text-white py-6 sm:py-8 w-full sm:w-[180px] text-sm sm:text-base"
            radius="sm"
          >
            ফ্রী তে প্রশ্নব্যাংক দেখুন
          </Button>
          <Button
            variant="bordered"
            color="warning"
            className="text-black py-6 sm:py-8 w-full sm:w-[180px] text-sm sm:text-base"
            radius="sm"
          >
            প্রশ্ন তৈরি করুন
          </Button>
        </div>

        {/* Smart Question Bank Section */}
        <div className="mt-8 sm:mt-10 flex flex-col justify-center items-center gap-2 text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight">
            দাঁড়িকমা কিন্তু পিডিএফ প্রশ্নব্যাংক নয়!
          </p>
          <p className="max-w-4xl w-full text-center text-sm sm:text-base px-4">
            দাঁড়িকমা দেশের প্রথম এবং একমাত্র পেপারলেস স্মার্ট প্রশ্নব্যাংক!
            দাঁড়িকমা স্মার্ট প্রশ্নব্যাংকে প্রশ্ন ও সমাধান গুলো কিভাবে সাজানো
            হয়েছে এবং সার্চ ও ফিল্টার করে খুব সহজেই কিভাবে প্রশ্ন ও সমাধান
            খুঁজে বের করা যায় জানতে ভিডিওটি দেখুন।
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row mt-8 sm:mt-10 w-full max-w-4xl">
          <div className="px-8 sm:px-12 lg:px-20 border-b sm:border-b-0 sm:border-r flex flex-col justify-center items-center py-4 sm:py-0">
            <p className="text-2xl sm:text-3xl font-bold">২১৩+</p>
            <p className="text-sm sm:text-base">বিষয়</p>
          </div>
          <div className="px-8 sm:px-12 lg:px-20 border-b sm:border-b-0 sm:border-r flex flex-col justify-center items-center py-4 sm:py-0">
            <p className="text-2xl sm:text-3xl font-bold">৬৮৯৭১+</p>
            <p className="text-sm sm:text-base">শিক্ষার্থী</p>
          </div>
          <div className="px-8 sm:px-12 lg:px-20 flex flex-col justify-center items-center py-4 sm:py-0">
            <p className="text-2xl sm:text-3xl font-bold">১৫৯৬৯২+</p>
            <p className="text-sm sm:text-base">শিক্ষক</p>
          </div>
        </div>

        {/* Video Section */}
        <section className="container mx-auto mt-12 sm:mt-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8">
            আমাদের ভিডিও
          </h2>

          <div className="w-full max-w-4xl mx-auto aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Student Benefits Section */}
        <div className="flex flex-col justify-center items-center mt-8 sm:mt-10 gap-2 text-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            পেপারলেস <span className="text-red-500">স্মার্ট প্রশ্নব্যাংকে</span>
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl">
            শিক্ষার্থীরা যা যা পাচ্ছে
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center max-w-6xl gap-4 sm:gap-5 w-full mt-5 px-4">
            {[1, 2, 3, 4].map((index) => (
              <Card key={index} className="w-full">
                <CardBody>
                  <Image
                    removeWrapper
                    as={NextImage}
                    src={exam.image}
                    alt={exam.title}
                    height={200}
                    width={200}
                    className="!w-full !aspect-video"
                  />

                  <h2 className="text-lg sm:text-xl font-bold mt-2">
                    {exam.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 my-2 line-clamp-3 h-[60px]">
                    {exam.shortDescription}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        {/* Teacher Section Title */}
        <div className="flex flex-col justify-between items-center gap-2 mt-8 sm:mt-10 text-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl leading-tight">
            শিক্ষকদের জন্য<span className="text-red-500"> ১ ক্লিকে-ই</span>
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl leading-tight">
            <span className="text-red-500">
              প্রশ্ন, শীট, সাজেশন এবং অনলাইন পরীক্ষা
            </span>{" "}
            তৈরির সফটওয়্যার!
          </p>
          <p className="text-sm sm:text-base px-4">
            সকল শ্রেণির সকল বিষয়ের লাখ লাখ প্রশ্ন! টাইপিং বা প্রুফ রিডিংয়ের
            ঝামেলা নেই!
          </p>
        </div>

        {/* Features Section */}
        <div className="flex flex-col lg:flex-row justify-between mt-8 sm:mt-10 gap-6 sm:gap-8 items-center w-full max-w-6xl">
          {/* Stats List */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-1/2">
            {[
              { number: "১", text: "২ লক্ষাধিক শিক্ষক নিয়মিত ব্যবহার করছে" },
              {
                number: "২",
                text: "১ ক্লিকে প্রশ্ন, শীট, সাজেশন, অনলাইন পরীক্ষা তৈরি",
              },
              {
                number: "৩",
                text: "১০ লক্ষাধিক নির্ভুল ও ইউনিক প্রশ্নের ডাটাবেজ",
              },
              { number: "৪", text: "টাইপিং ও প্রুফ রিডিংয়ের ঝামেলা নাই" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center border border-[#4DA8FF]/20 rounded-2xl p-4 sm:p-5 bg-white dark:bg-[#1F2233]"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-theme flex justify-center items-center text-white text-xl sm:text-3xl font-bold mr-3 sm:mr-5 shadow-md flex-shrink-0">
                  {item.number}
                </div>
                <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-lg font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/bigbrain.jpg"
              alt="Big Brain"
              width={500}
              height={500}
              className="rounded-3xl shadow-xl object-contain max-w-full h-auto"
            />
          </div>
        </div>

        {/* Second Video Section */}
        <section className="container mx-auto mt-12 sm:mt-16 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Why Use Section */}
        <div className="flex flex-col justify-center items-center mt-8 sm:mt-10 gap-2 text-center pb-8 sm:pb-12">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            <span className="text-red-500">
              প্রশ্ন, শিট, সাজেশন, অনলাইন পরীক্ষা
            </span>{" "}
            তৈরিতে দারিকমা কেন ব্যবহার করবেন?
          </p>
          <div className="text-sm sm:text-base space-y-2 px-4 max-w-4xl">
            <p>
              সকল শ্রেনির সকল বিষয়ের লাখ লাখ প্রশ্ন থেকে MCQ, CQ সহ যেকোনো
              টাইপের প্রশ্ন তৈরি করতে পারবেন ১ ক্লিকেই। টাইপিং,সেটিং ও প্রুফ
              রিডিং এর ঝামালা না
            </p>
            <p>
              থাকায় ঘণ্টার পর ঘণ্টা সময় ও লক্ষ টাকা বেঁচে যাবে। ২ লক্ষাধিক
              শিক্ষক ও শিক্ষা প্রতিস্থান নির্ভুল ও ইউনিক প্রশ্ন তৈরিতে নিয়মিত
              দারিকমা ব্যবহার করছেন।
            </p>
          </div>
          <Button
            className="bg-theme text-white mt-6 sm:mt-10 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base"
            radius="none"
          >
            প্রশ্ন তৈরিতে কর এখনই
          </Button>
        </div>
      </div>
    </>
  );
};

export default page;
