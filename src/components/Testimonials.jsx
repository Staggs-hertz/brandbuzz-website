import React, { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
//lucide-react was installed to make use of the right and left navigation arrows
import { testimonialData } from "../assets/assets";
import { motion } from "motion/react";

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <div className="px-4 sm:px-12 lg:px-24 xl:px-40 pt-10 pb-25 relative">
      {/* <div className="text-center"> */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-bold text-3xl sm:text-4xl text-gray-700 dark:text-white"
          >
            What <span className="text-primary">Clients</span> Say!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-5 text-gray-500 dark:text-gray-300 mx-auto text-md max-sm:w-5/6 sm:w-3/4 lg:w-1/3 "
          >
            See how our digital marketing agency helped clients achieve their
            goals
          </motion.p>
        </div>

        {/* The left and right buttons for navigation */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 dark:bg-gray-800 shadow-lg p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition hidden md:flex"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 dark:bg-gray-800 shadow-lg p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition hidden md:flex"
        >
          <ChevronRight size={20} />
        </button>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="overflow-x-auto overflow-y-hidden scroll-smooth no-scrollbar snap-x snap-mandatory"
        >
          <div className="flex flex-nowrap gap-6 py-5 mb-10">
            {testimonialData.map((t, index) => (
              <TestimonialCard key={index} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
