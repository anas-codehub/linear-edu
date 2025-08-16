import Image from "next/image";
import React from "react";

const OlympiadSection = () => {
  const olympiads = [
    {
      title: "গণিত অলিম্পিয়াড",
      description:
        "বিশ্বমানের গণিত চ্যালেঞ্জে অংশগ্রহণ করুন এবং আপনার দক্ষতা প্রমাণ করুন।",
      img: "/olympiad.png",
    },
    {
      title: "বিজ্ঞান অলিম্পিয়াড",
      description: "প্র্যাকটিক্যাল ও তত্ত্বের মাধ্যমে বিজ্ঞান অন্বেষণ করুন।",
      img: "/olympiad.png",
    },
    {
      title: "কম্পিউটার অলিম্পিয়াড",
      description: "প্রোগ্রামিং ও লজিক্যাল চিন্তায় প্রতিযোগিতা করুন।",
      img: "/olympiad.png",
    },
    {
      title: "ইংরেজি অলিম্পিয়াড",
      description: "ভাষার দক্ষতা ও যোগাযোগ ক্ষমতা উন্নত করুন।",
      img: "/olympiad.png",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            আমাদের অলিম্পিয়াড প্রোগ্রাম
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {olympiads.map((olympiad, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={olympiad.img}
                  alt={olympiad.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {olympiad.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {olympiad.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OlympiadSection;
