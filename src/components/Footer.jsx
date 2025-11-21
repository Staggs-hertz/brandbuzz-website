import React from "react";
import assets from "../assets/assets";
import FooterArc from "./FooterArc";

const Footer = ({ theme }) => {
  return (
    <div className="px-4 sm:px-12 lg:px-24 xl:px-40 pt-24 pb-30 bg-orange-200/50 dark:bg-primary/20 grid sm:grid-cols-2 md:grid-cols-4 max-sm:text-center relative">
      {/* Below is the orange box above the footer */}
      <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-primary px-10 max-sm:px-4 py-4 flex items-center justify-between max-sm:w-11/12 sm:w-10/12 md:w-9/12 rounded">
        <h3 className="text-white text-xl max-sm:text-lg">
          Ready to get started?
        </h3>
        <a
          href="#"
          className="text-white text-sm bg-primary py-3 px-6 max-sm:px-4 rounded hover:scale-105 transition-all shadow-lg border border-white"
        >
          Contact Us
        </a>
      </div>

      {/* Below is the first column */}
      <div className="mb-5 flex flex-col max-sm:items-center">
        <a href="#">
          <img
            src={theme === "light" ? assets.logo : assets.logo_dark}
            className="w-32 sm:w-40 pt-5"
            alt=""
          />
        </a>
        <div className="flex items-center gap-2 pt-4">
          <img src={assets.facebook_icon} className="size-9.5" alt="" />
          <img src={assets.instagram_icon} className="size-9.5" alt="" />
          <img src={assets.twitter_icon} className="size-9.5" alt="" />
        </div>
      </div>

      {/* Below is the second column */}
      <div className="mb-5">
        <p className="font-bold text-lg text-gray-800 dark:text-white my-2">
          Company
        </p>
        <ul className="text-gray-700 dark:text-gray-300">
          <li>About</li>
          <li>Contact</li>
          <li>Careers</li>
          <li>Team</li>
        </ul>
      </div>

      {/* Below is the third column */}
      <div className="mb-5">
        <p className="font-bold text-lg text-gray-800 dark:text-white my-2">
          Designs
        </p>
        <ul className="text-gray-700 dark:text-gray-300">
          <li>Design connects</li>
          <li>1-to-1 Projects</li>
          <li>Find a designer</li>
          <li>Discover inspiration</li>
          <li>Pricing</li>
        </ul>
      </div>

      {/* Below is the fourth column */}
      <div className="mb-5">
        <p className="font-bold text-lg text-gray-800 dark:text-white my-2">
          Resources
        </p>
        <ul className="text-gray-700 dark:text-gray-300">
          <li>Become a designer</li>
          <li>Blog</li>
          <li>Design without borders</li>
          <li>Affliates</li>
        </ul>
      </div>

      {/* Below is the orange copyright arc at the bottom */}
      <FooterArc />
    </div>
  );
};

export default Footer;
