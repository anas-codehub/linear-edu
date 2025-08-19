import { useAnimation, useInView, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const TestimonialSection = () => {
  const testimonials = [
    "/ss.jpg",
    "/testimonials/2.jpg",
    "/testimonials/3.jpg",
    "/testimonials/4.jpg",
    "/testimonials/5.jpg",
    "/testimonials/6.jpg",
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      const totalWidth =
        testimonials.length * 320 + (testimonials.length - 1) * 32;
      controls.start({
        x: [0, -totalWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    }
  }, [isInView, controls, testimonials.length]);

  return (
    <section className="py-20 relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-amber-300 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full bg-blue-300 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            আমাদের শিক্ষার্থীদের মতামত
          </h2>
        </div>

        <div ref={containerRef} className="relative h-[400px] overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 flex items-center h-full gap-20"
            animate={controls}
          >
            {[...testimonials, ...testimonials].map((src, index) => (
              <motion.div
                key={index}
                className="relative flex-shrink-0 w-[300px] h-[300px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.1 }}
                style={{ rotate: 15 }}
              >
                <Image
                  src={src}
                  alt={`Student achievement ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 300px, 400px"
                  quality={100}
                  priority={index < 3}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
