import React from "react";
import assets from "../assets/assets";
import SolutionItem from "./SolutionItem";

const SolutionSteps = () => {
  return (
    <div className="px-4 sm:px-12 lg:px-24 xl:px-40 flex justify-between items-center bg-orange-200/50 dark:bg-primary/20 max-md:flex-col">
      {/* Below is the left hand side of the section */}
      <div>
        <img src={assets.solution_img} className="w-11/12 m-auto" alt="" />
      </div>

      {/* Below is the right hand side of the section */}
      <div className="py-5">
        <div className="pb-7">
          <h2 className="font-bold text-4xl sm:text-5xl text-gray-700 dark:text-white">
            Simple <span className="text-primary">Solutions!</span>
          </h2>
          <p className="mt-5 ml-0 text-gray-500  dark:text-gray-300 mx-auto text-xl md:w-3/4">
            We understanding that no two businesses are alike. That's why we
            take the time to understand.
          </p>
        </div>

        <div>
          <SolutionItem
            stepNumber="1"
            title="Contact us"
            desc="Contact us to boost your brand visibility"
          />
          <SolutionItem
            stepNumber="2"
            title="Consult"
            desc="Always available to answer your questions"
          />
          <SolutionItem
            stepNumber="3"
            title="Place order"
            desc="Buy our package today to proceed"
          />
          <SolutionItem
            stepNumber="4"
            title="Payment"
            desc="We receive payments in all types of banking"
          />
        </div>

        {/* Below is the buttons section */}
        <div className="flex gap-7 items-center mt-7 ">
          <a
            href="#"
            className="text-white text-md bg-primary border border-primary py-3 px-10 rounded hover:scale-105 transition-all shadow-lg flex-wrap"
          >
            Get Started
          </a>
          <a
            href="#"
            className="bg-transparent dark:bg-white/80 text-primary border border-primary py-3 px-10 rounded hover:scale-105 transition-all text-sd shadow-lg flex-wrap"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default SolutionSteps;
