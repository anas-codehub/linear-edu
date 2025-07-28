"use client";
import { Button, Card, CardBody, CardHeader, Input } from "@heroui/react";
import {
  CirclePlay,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  PlayCircle,
  Quote,
  School,
  ScrollText,
  Twitter,
  Youtube,
} from "lucide-react";
import { Play } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className="container mx-auto">
        <div className=" mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 ">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-4 text-center lg:text-left w-full lg:w-1/2">
            <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-900 to-amber-300 bg-clip-text text-transparent">
              একাডেমিক থেকে এডমিশন <br /> প্রস্তুতি নাও সেরা শিক্ষক, স্মার্ট
              টুলস ও <br />
              কাস্টোমাইজড প্রাকটিসের সাথে
            </p>

            <p className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
              SSC ও HSC একাডেমিক প্রস্তুতি, ভার্সিটি, মেডিকেল, কৃষি, কৃষি ও
              প্রযুক্তি বিশ্ববিদ্যালয়, গুচ্ছ ভর্তি{" "}
              <br className="hidden sm:block" />
              পরীক্ষাসহ প্রতিটি বিষয়ে MCQ, CQ, Written প্রস্তুতি হোক আমাদের সাথে
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full">
              <Input
                placeholder="মোবাইল নম্বর দাও"
                className="w-full sm:w-auto"
                radius="sm"
                variant="bordered"
                classNames={{
                  inputWrapper: [
                    "border-amber-400",
                    "hover:border-amber-500",
                    "focus-within:border-amber-600",
                    "data-[hover=true]:border-amber-500",
                    "data-[focus=true]:border-amber-600",
                  ].join(" "),
                  input: "placeholder-amber-400 text-black pl-5",
                  label: "text-amber-700 font-medium",
                }}
              />

              <Button variant="solid" color="warning" radius="sm">
                শেখা শুরু করো
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={"/homepage/pic1.png"}
              alt="pic-1"
              width={500}
              height={300}
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto"
            />
          </div>
        </div>
      </section>

      <section className="mt-32 bg-blue-900 h-auto w-fit mx-auto px-6 py-8 rounded-xl">
        <div className="flex flex-col items-center justify-center gap-5">
          {/* Heading Text */}
          <div className="text-center text-white">
            <p className="text-xl font-semibold">
              অনলাইন এর সকল ব্যাচ এ ভর্তি হওয়ার সুযোগ
            </p>
            <p>সাথে থাকছে সকল বিষয়ের ফ্রি ক্লাস</p>
          </div>

          <div className="flex gap-5">
            <div className="flex flex-col items-center justify-center bg-blue-200 h-36 w-36 rounded-2xl shadow-md">
              <School className="h-6 w-6 text-blue-900" />
              <p className="mt-2 font-medium text-blue-900">School</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-blue-200 h-36 w-36 rounded-2xl shadow-md">
              <School className="h-6 w-6 text-blue-900" />
              <p className="mt-2 font-medium text-blue-900">School</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-blue-200 h-36 w-36 rounded-2xl shadow-md">
              <School className="h-6 w-6 text-blue-900" />
              <p className="mt-2 font-medium text-blue-900">School</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-5 mt-20 justify-center items-center px-4">
          <p className="text-3xl font-semibold text-center">
            এসএসসি ও এইচএসসি কোর্স সমূহ
          </p>

          {/* Responsive grid container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(3)].map((_, i) => (
              <Card
                key={i}
                className="w-full max-w-sm h-auto dark:bg-dark-3" // reduced width
              >
                <CardHeader>
                  <Image
                    src={"/homepage/pic2.png"}
                    alt={`pic2-${i}`}
                    width={350}
                    height={250}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </CardHeader>
                <CardBody className="px-4 py-3 ">
                  {" "}
                  {/* slightly reduced padding */}
                  <p className="text-base font-bold">
                    SSC Bangla Second Paper Crash Course
                  </p>
                  <div className="flex justify-between items-center w-full mt-4">
                    <div className="flex flex-wrap gap-1">
                      <div className="bg-green-100 flex items-center gap-2 px-2 py-1 rounded text-black">
                        <CirclePlay className="h-5 w-5" />
                        <span className=" font-medium">৩০ টি</span>
                      </div>
                      <div className="bg-yellow-100 flex items-center gap-2 px-2 py-1 rounded text-black">
                        <ScrollText className="h-5 w-5" />
                        <span className=" font-medium">৩০ টি</span>
                      </div>
                      <div className="bg-purple-100 flex items-center gap-2 px-2 py-1 rounded text-black">
                        <Clock className="h-5 w-5 " />
                        <span className=" font-medium">৩০ টি</span>
                      </div>
                    </div>
                    <p className="font-bold  whitespace-nowrap">1200 BDT</p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[url(/homepage/redbg.png)] bg-cover bg-center py-16 flex flex-col items-center justify-center mt-20">
          <p className="text-4xl font-bold text-white mb-10">
            Admission Success
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/30 w-80 h-40 flex flex-col items-center justify-center rounded-xl shadow-md">
              <p className="text-2xl font-bold text-white">২৫,০০০+</p>
              <p className="text-white">মোট শিক্ষার্থী</p>
            </div>
            <div className="bg-white/30 w-80 h-40 flex flex-col items-center justify-center rounded-xl shadow-md">
              <p className="text-2xl font-bold text-white">১,৪০০+</p>
              <p className="text-white">চান্সপ্রাপ্ত শিক্ষার্থী</p>
            </div>
            <div className="bg-white/30 w-80 h-40 flex flex-col items-center justify-center rounded-xl shadow-md">
              <p className="text-2xl font-bold text-white">৩৫</p>
              <p className="text-white">টপ ১০০-তে চান্স প্রাপ্ত শিক্ষার্থী </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-5 mt-20 justify-center items-center px-4">
          <p className="text-3xl font-semibold text-center">
            এসএসসি ও এইচএসসি কোর্স সমূহ
          </p>

          {/* Responsive grid container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(3)].map((_, i) => (
              <Card
                key={i}
                className="w-full max-w-sm h-auto dark:bg-gray-700" // reduced width
              >
                <CardHeader>
                  <Image
                    src={"/homepage/pic2.png"}
                    alt={`pic2-${i}`}
                    width={350}
                    height={250}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </CardHeader>
                <CardBody className="px-4 py-3 ">
                  {" "}
                  {/* slightly reduced padding */}
                  <p className="text-base font-bold">
                    SSC Bangla Second Paper Crash Course
                  </p>
                  <div className="flex justify-between items-center w-full mt-4">
                    <div className="flex flex-wrap gap-1">
                      <div className="bg-green-100 flex items-center gap-2 px-2 py-1 rounded text-black">
                        <CirclePlay className="h-5 w-5" />
                        <span className=" font-medium">৩০ টি</span>
                      </div>
                      <div className="bg-yellow-100 flex items-center gap-2 px-2 py-1 rounded text-black">
                        <ScrollText className="h-5 w-5" />
                        <span className=" font-medium">৩০ টি</span>
                      </div>
                      <div className="bg-purple-100 flex items-center gap-2 px-2 py-1 rounded text-black">
                        <Clock className="h-5 w-5 " />
                        <span className=" font-medium">৩০ টি</span>
                      </div>
                    </div>
                    <p className="font-bold  whitespace-nowrap">1200 BDT</p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-20 bg-[url('/homepage/redbg.png')] py-10 bg-center bg-cover">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {/* Card 1 */}
            <div className="bg-white/30 backdrop-blur-sm w-full md:w-[48%] h-[218px] rounded-xl px-6 py-4 shadow-md flex justify-between items-center">
              <div className="flex flex-col justify-center gap-2">
                <p className="text-xl font-semibold text-white">
                  🎥 ফ্রি ভিডিও লাইব্রেরি
                </p>
                <Button radius="sm" className="bg-white text-black h-12 w-36">
                  ভিডিও দেখো
                </Button>
              </div>
              <Image
                src={"/homepage/play 1.png"}
                alt="Play"
                height={86}
                width={86}
              />
            </div>

            {/* Card 2 */}
            <div className="bg-white/30 backdrop-blur-sm w-full md:w-[48%] h-[218px] rounded-xl px-6 py-4 shadow-md flex justify-between items-center">
              <div className="flex flex-col justify-center gap-2">
                <p className="text-xl font-semibold text-white">
                  আমাদের ফেসবুক গ্রুপ
                </p>
                <Button radius="sm" className="bg-white text-black h-12 w-36">
                  গ্রুপে যুক্ত হও
                </Button>
              </div>
              <Image
                src={"/homepage/facebook.png"}
                alt="Facebook"
                height={86}
                width={86}
              />
            </div>

            {/* Card 3 */}
            <div className="bg-white/30 backdrop-blur-sm w-full md:w-[48%] h-[218px] rounded-xl px-6 py-4 shadow-md flex justify-between items-center">
              <div className="flex flex-col justify-center gap-2">
                <p className="text-xl font-semibold text-white">
                  ফ্রিতে MCQ, CQ এবং Written পরীক্ষার মাধ্যমে নিজের মেধা যাচাই
                </p>
                <Button radius="sm" className="bg-white text-black h-12 w-36">
                  মেধা যাচাই কর
                </Button>
              </div>
              <Image
                src={"/homepage/mcq icon.png"}
                alt="MCQ"
                height={86}
                width={86}
              />
            </div>

            {/* Card 4 */}
            <div className="bg-white/30 backdrop-blur-sm w-full md:w-[48%] h-[218px] rounded-xl px-6 py-4 shadow-md flex justify-between items-center">
              <div className="flex flex-col justify-center gap-2">
                <p className="text-xl font-semibold text-white">
                  ফ্রি প্রশ্ন ব্যাংক
                </p>
                <Button radius="sm" className="bg-white text-black h-12 w-36">
                  প্রশ্ন দেখো
                </Button>
              </div>
              <Image
                src={"/homepage/books.png"}
                alt="Books"
                height={86}
                width={86}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="flex flex-col items-center justify-center gap-5 px-4">
          <p className="text-4xl font-bold text-center">কেন আমরাই সেরা ?</p>
          <p className="text-center">
            সেরা শিক্ষক ও সর্বাধুনিক প্রযুক্তির সাথে দেশের ১০ লক্ষ্য+
            শিক্ষার্থীর মানসম্মত <br className="hidden sm:block" />
            পড়ালেখা ও পরীক্ষার নির্ভরযোগ্য প্রতিষ্ঠান Linear Science Academy!
          </p>

          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="relative max-w-sm border border-orange-200 rounded-xl p-6 bg-white dark:bg-gray-900 shadow-sm"
              >
                {/* Quote Icon */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 rounded-full p-2 shadow-md">
                  <span className="text-4xl text-cyan-700 dark:text-cyan-300">
                    <Quote />
                  </span>
                </div>

                {/* Testimonial Text */}
                <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 leading-relaxed mt-6">
                  কোর্সটির প্রতিটি সেকশনে ছিল স্পষ্ট নির্দেশনা। বিশেষ করে,
                  “Reading” এবং “Writing” সেকশন এতটাই informative ছিল যা আমার
                  জন্য Mock Test এবং Real Exam কে সহজ করে তুলেছিল। আমার সবচেয়ে
                  ভালো লেগেছে “Writing Part”
                </p>

                {/* Divider */}
                <div className="border-t border-orange-200 my-4" />

                {/* User Info */}
                <div className="flex items-center gap-3 mt-2">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-10 w-10 flex items-center justify-center text-black dark:text-white">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                      Talat Mahmud Anas
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      HSC Batch
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-20">
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 bg-amber-200 dark:bg-gray-900 p-6 md:p-16 lg:p-20">
          {/* Left: Branding and Social */}
          <div className="flex flex-col items-start gap-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">
              Linear <br />
              Science <br />
              Academy
            </h1>
            <p className="text-xl md:text-2xl">আমাদের সাথে যুক্ত হও</p>

            <div className="flex gap-4 md:gap-6 items-center">
              <Link
                href="https://www.facebook.com/yourpage"
                className="text-blue-600 hover:text-blue-800 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/yourprofile"
                className="text-pink-500 hover:text-pink-700 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://www.youtube.com/yourchannel"
                className="text-red-600 hover:text-red-800 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={24} />
              </Link>
              <Link
                href="https://twitter.com/yourhandle"
                className="text-sky-500 hover:text-sky-700 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="https://wa.me/yourwhatsappphonenumber"
                className="text-green-600 hover:text-green-800 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={24} />
              </Link>
            </div>
          </div>

          {/* Middle: Links */}
          <div className="flex flex-col gap-2 mt-10 md:mt-0">
            <p className="text-xl md:text-2xl font-bold">লিংক</p>
            <Link href={"/#"}>আমাদের সম্পকে</Link>
            <Link href={"/#"}>ক্যারিয়ার</Link>
            <Link href={"/#"}>স্কিলস</Link>
            <Link href={"/#"}>টিচার পোর্টাল</Link>
            <Link href={"/#"}>প্রাইভেসি পলিসি</Link>
            <Link href={"/#"}>রিফান্ড পলিসি</Link>
            <Link href={"/#"}>ব্যাবহারিক শর্তাবলী</Link>
          </div>

          {/* Right: Contact */}
          <div className="flex flex-col gap-3 mt-10 md:mt-0">
            <p className="text-xl md:text-2xl font-bold">যোগাযোগ</p>
            <div className="flex items-center gap-2">
              <Phone />
              <p>017155454</p>
            </div>
            <div className="flex items-center gap-2">
              <FaWhatsapp size={24} />
              <p>017155454</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail />
              <p>linearscienceacademy@gmail.com</p>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="mt-1" />
              <p>
                4/Ka, Lalbag Road (Beside IBN SINA Hospital), <br />
                Azimpur, Dhaka
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
