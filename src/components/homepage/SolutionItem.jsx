import React from "react";
import { motion } from "motion/react";

const SolutionItem = ({ title, desc, stepNumber }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="flex items-center gap-8 mb-7"
    >
      <div className="w-13 h-13 rounded-full bg-primary text-center flex items-center justify-center">
        <span className="text-white text-2xl">{stepNumber}</span>
      </div>
      <div className="">
        <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
        <p className="text-gray-500 dark:text-gray-300 text-sm">{desc}</p>
      </div>
    </motion.div>
  );
};

export default SolutionItem;
