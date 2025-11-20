import React from "react";
import Ratings from "./Ratings";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="w-100 max-sm:w-80 shrink-0 dark:bg-gray-950 px-6 pt-4 pb-12 rounded-2xl border border-gray-200 dark:border-gray-700 shadow hover:shadow-lg hover:scale-105 dark:shadow-gray-700/30 transition relative">
      <div className="flex items-center">
        <div className="py-5">
          <img
            src={testimonial.image}
            className="rounded-full border border-gray-500 size-10 mr-4"
            alt=""
          />
        </div>

        <div className="flex-1">
          <h4 className="font-semibold text-primary">{testimonial.name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {testimonial.title}
          </p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        "{testimonial.remark}"
      </p>
      <Ratings rate={testimonial.rate} />
    </div>
  );
};

export default TestimonialCard;
