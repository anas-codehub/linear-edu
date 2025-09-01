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

  const colors = ["#1E40AF", "#10B981", "#F59E0B", "#EF4444"];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Section title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-[#1E40AF] dark:text-[#60A5FA]">
          আমাদের ভিডিও লাইব্রেরি
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          শিক্ষামূলক ভিডিও এবং নতুন কৌশল দেখুন
        </p>
      </div>

      {/* Video cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-3xl bg-white dark:bg-[#1E293B] shadow-2xl transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
          >
            {/* Floating colored frame */}
            <div
              className={`absolute -top-4 -left-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] rounded-3xl border-4 transition-all duration-500 group-hover:rotate-2`}
              style={{
                borderColor: colors[idx % colors.length],
              }}
            ></div>

            <video
              src={video.src}
              controls
              className="w-full aspect-video object-cover rounded-t-3xl"
            />

            <div className="p-6 relative z-10">
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: colors[idx % colors.length] }}
              >
                {video.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative floating circles */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#F59E0B]/20 dark:bg-[#D97706]/30 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-24 -left-16 w-56 h-56 rounded-full bg-[#10B981]/20 dark:bg-[#059669]/30 blur-3xl animate-pulse-slow"></div>
    </section>
  );
};

export default VideoSection;
