"use client";
import { useState } from "react";
import CourseSection from "@/components/HomePageSections/CourseSection";
import { ArrowRight, Menu, X, Search, User, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import HomeFooter from "@/components/Footers/HomeFooter";

const page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const courses = [
    {
      id: 1,
      src: "/homepage/pic2.png",
      title: "গণিত কোর্স",
      description: "প্রাথমিক থেকে উচ্চতর গণিতের সম্পূর্ণ কোর্স",
      category: "mathematics",
      level: "beginner",
      duration: "12 weeks",
      students: 1250,
      rating: 4.8,
    },
    {
      id: 2,
      src: "/homepage/pic2.png",
      title: "বিজ্ঞান কোর্স",
      description: "বিজ্ঞানের সকল শাখার উপর বিশেষ কোর্স",
      category: "science",
      level: "intermediate",
      duration: "10 weeks",
      students: 980,
      rating: 4.6,
    },
    {
      id: 3,
      src: "/homepage/pic2.png",
      title: "ইংরেজি ভাষা কোর্স",
      description: "ইংরেজি ভাষা শেখার সম্পূর্ণ গাইড",
      category: "language",
      level: "beginner",
      duration: "8 weeks",
      students: 2100,
      rating: 4.9,
    },
    {
      id: 4,
      src: "/homepage/pic2.png",
      title: "প্রোগ্রামিং ফান্ডামেন্টালস",
      description: "প্রোগ্রামিং এর বেসিক থেকে এডভান্সড পর্যন্ত",
      category: "technology",
      level: "advanced",
      duration: "16 weeks",
      students: 1750,
      rating: 4.7,
    },
  ];

  const categories = [
    { id: "all", name: "সকল ক্লাস" },
    { id: "mathematics", name: "এডমিশন" },
    { id: "science", name: "এইচএসসি" },
    { id: "language", name: "ক্লাস ১০" },
    { id: "technology", name: "ক্লাস ৯" },
  ];

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <>
      {/* Navigation Bar */}
      {/* Course Page Content */}
      <div className="mx-auto container">
        {/* Hero Section */}
        <section className="py-12 bg-brand-1 text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              আমাদের কোর্স সমূহ
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              আপনার দক্ষতা উন্নত করতে এবং ক্যারিয়ারের নতুন দরজা খুলতে আমাদের
              বিশেষভাবে ডিজাইন করা কোর্সগুলো এক্সপ্লোর করুন।
            </p>
          </div>
        </section>

        {/* Course Filter Section */}
        <section className="py-8 ">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeCategory === category.id
                      ? "bg-brand-2 text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Course Grid Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="relative rounded-2xl overflow-hidden shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl bg-white group"
                >
                  <div className="relative h-48">
                    <Image
                      src={course.src}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-brand-2 text-white text-xs px-2 py-1 rounded-full">
                      {course.level === "beginner"
                        ? "শুরু"
                        : course.level === "intermediate"
                        ? "মধ্যবর্তী"
                        : "উন্নত"}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-brand-1">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>

                    <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                      <span>{course.duration}</span>
                      <span>{course.students} শিক্ষার্থী</span>
                      <span className="flex items-center">
                        ★ {course.rating}
                      </span>
                    </div>

                    <Link
                      href={"/course/inner-course"}
                      className="font-medium inline-flex items-center text-brand-2 hover:text-brand-1 transition-colors"
                    >
                      বিস্তারিত জানুন
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">
                  এই বিভাগে কোন কোর্স পাওয়া যায়নি
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
      {/* Footer */}
      <HomeFooter />{" "}
    </>
  );
};

export default page;
