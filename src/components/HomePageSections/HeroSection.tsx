import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const HeroSection = () => {
  const slides = [
    "/banner/banner1.jpg",
    "/banner/banner2.jpg",
    "/banner/banner3.jpg",
  ];
  return (
    <section>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="w-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index} className="relative w-full aspect-[2/1]">
            <Image
              src="/LCA.jpg"
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
