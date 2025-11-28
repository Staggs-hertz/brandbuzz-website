import React from "react";
import assets from "../../assets/assets";
import SolutionItem from "./SolutionItem";
import { motion } from "motion/react";

const SolutionSteps = () => {
  return (
    <div className="px-4 sm:px-12 lg:px-24 xl:px-40 flex justify-between items-center bg-orange-200/50 dark:bg-primary/20 max-md:flex-col">
      {/* Below is the left hand side of the section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-md:w-10/12 mx-auto"
      >
        <img src={assets.solution_img} className="w-9/12 m-auto" alt="" />
      </motion.div>

      {/* Below is the right hand side of the section */}
      <div className="py-5">
        <div className="pb-7">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-bold text-3xl sm:text-4xl text-gray-700 dark:text-white"
          >
            Simple <span className="text-primary">Solutions!</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-5 ml-0 text-gray-500 dark:text-gray-300 mx-auto text-md md:w-3/4"
          >
            We understanding that no two businesses are alike. That's why we
            take the time to understand.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
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
        </motion.div>

        {/* Below is the buttons section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="flex gap-7 items-center mt-7 "
        >
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            href="#"
            className="text-white text-md bg-primary border border-primary py-3 px-8 sm:px-11 rounded hover:scale-105 transition-all shadow-lg flex-wrap"
          >
            Get Started
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            href="#"
            className="bg-transparent dark:bg-white/80 text-primary border border-primary py-3 px-8 sm:px-11  rounded hover:scale-105 transition-all text-sd shadow-lg flex-wrap"
          >
            Read More
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionSteps;
