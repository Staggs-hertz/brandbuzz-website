import React from "react";
import { motion } from "motion/react";

const SectionHeader = ({ title, subtitle, align = "left" }) => {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"}`}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-bold text-3xl sm:text-4xl text-gray-700 dark:text-white"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-5 text-gray-500 dark:text-gray-300 mx-auto text-md max-sm:w-5/6 sm:w-3/4 lg:w-1/3 "
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default SectionHeader;
