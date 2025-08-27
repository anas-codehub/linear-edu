import React from "react";

const VideoSection = () => {
  const videos = [
    {
      src: "/videos/video1.mp4",
      title: "ভিডিও ১",
      description: "এই ভিডিওতে নতুন কৌশল ও শিক্ষামূলক টিপস দেওয়া হয়েছে।",
    },
    {
      src: "/videos/video2.mp4",
      title: "ভিডিও ২",
      description: "এই ভিডিওতে নতুন কৌশল ও শিক্ষামূলক টিপস দেওয়া হয়েছে।",
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E6F0FF] via-[#FFE6E6] to-[#E6F0FF] dark:from-[#1A202C] dark:via-[#3B1A1A] dark:to-[#1A202C] animate-gradient-slow -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] dark:text-[#60A5FA]">
            আমাদের ভিডিও লাইব্রেরি
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#4DA8FF] via-[#FF6B6B] to-[#4DA8FF]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl bg-gradient-to-b from-[#F0F8FF] via-[#FFEFF0] to-[#F0F8FF] dark:from-[#2A2E3B] dark:via-[#3B2A2A] dark:to-[#2A2E3B]"
            >
              <div className="relative aspect-video">
                <video
                  src={video.src}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1E3A8A] dark:text-[#60A5FA] mb-2">
                  {video.title}
                </h3>
                <p className="text-[#6B7280] dark:text-[#A1A1AA]">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
