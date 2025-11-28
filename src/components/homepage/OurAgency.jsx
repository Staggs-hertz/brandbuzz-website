import React from "react";
import assets from "../../assets/assets";
import { motion } from "motion/react";
import SectionHeader from "../SectionHeader";

const OurAgency = () => {
  return (
    <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-11 flex items-center justify-between max-md:flex-col">
      {/* Below is the left hand side of the section */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <SectionHeader
          title={
            <>
              Our <span className="text-primary">Agency</span>
            </>
          }
          align="left"
        />

        <p className="text-gray-500 dark:text-gray-300 mx-auto text-md md:w-9/12 ml-0">
          We believe in the power of data. Our analytics-driven approach allows
          us to make informed. <br />
          Decisions and optimize your marketing efforts for maximum ROI. Let's
          turn your data into actionable insights. Tailored solutions for your
          business.
        </p>
        <div className="flex">
          <a
            href="#"
            className="text-white text-md bg-primary border border-primary py-3 px-10 rounded hover:scale-105 transition-all shadow-lg flex-wrap"
          >
            Read More
          </a>
        </div>
      </motion.div>

      {/* Below is the right hand side of the section */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="max-md:w-10/12 mx-auto"
      >
        <img src={assets.agency_img} className="w-full" alt="" />
      </motion.div>
    </div>
  );
};

export default OurAgency;
