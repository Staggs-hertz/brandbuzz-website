import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const OurAgency = () => {
  return (
    <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-11 flex items-center justify-between max-md:flex-col">
      {/* Below is the left hand side of the section */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-bold text-3xl sm:text-4xl text-gray-700 dark:text-white"
        >
          Our <span className="text-primary">Agency</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-500 dark:text-gray-300 mx-auto text-md md:w-9/12 ml-0"
        >
          We believe in the power of data. Our analytics-driven approach allows
          us to make informed. <br />
          Decisions and optimize your marketing efforts for maximum ROI. Let's
          turn your data into actionable insights. Tailored solutions for your
          business.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex"
        >
          <a
            href="#"
            className="text-white text-md bg-primary border border-primary py-3 px-10 rounded hover:scale-105 transition-all shadow-lg flex-wrap"
          >
            Read More
          </a>
        </motion.div>
      </div>

      {/* Below is the right hand side of the section */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-md:w-10/12 mx-auto"
      >
        <img src={assets.agency_img} className="w-full" alt="" />
      </motion.div>
    </div>
  );
};

export default OurAgency;
