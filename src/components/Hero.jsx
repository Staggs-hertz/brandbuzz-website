import React from "react";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex items-center justify-between gap-2 max-md:flex-col px-4 sm:px-12 lg:px-24 xl:px-40 py-10 mt-5 w-full">
      {/* Below is the left hand side of the hero section */}
      <div className="space-y-6 flex-1">
        <h1 className="text-4xl text-gray-700 dark:text-white sm:text-5xl md:text-6xl font-semibold w-md max-sm:w-3/4">
          We create <span className="text-primary">solutions</span> for your
          business
        </h1>
        <p className="text-gray-500 dark:text-gray-300 text-xl w-full max-sm:w-11/12">
          Our team keeps a keen eye on emerging trends and technologies to
          ensure your marketing campaigns remain cutting-edge
        </p>
        <div className="flex">
          <a
            href="#"
            className="text-white text-sm bg-primary py-3 px-6 rounded hover:scale-105 transition-all shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Below is the right hand side of the hero section */}
      <div className="mt-10 md:mt-0 flex-1">
        <img src={assets.hero_img} className="w-full" alt="Hero image" />
      </div>
    </div>
  );
};

export default Hero;
