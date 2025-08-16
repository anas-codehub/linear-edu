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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            আমাদের ভিডিও লাইব্রেরি
          </h2>
          <div className="w-20 h-1 bg-theme mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-video">
                <video
                  src={video.src}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
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
