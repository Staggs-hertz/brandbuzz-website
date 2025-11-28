import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70"
    >
      <Link to="/">
        <img
          src={theme === "light" ? assets.logo : assets.logo_dark}
          className="w-32 sm:w-40"
          alt=""
        />
      </Link>

      <div
        className={`text-gray-700 dark:text-white sm:text-sm flex gap-5 ${
          sidebarOpen ? "max-sm:w-60 max-sm:pl-3" : "max-sm:w-0 overflow-hidden"
        } max-sm:bg-primary max-sm:h-full max-sm:min-h-screen max-sm:fixed top-0 right-0 max-sm:flex-col max-sm:pt-20 max-sm:text-white transition-all text-center`}
      >
        {/* Below is the set of auxiliary buttons on the sidebar */}
        <div className="flex gap-2 sm:hidden pl-2">
          <a
            href="#"
            className="text-white text-sm bg-primary py-3 px-6 rounded hover:scale-105 transition-all shadow-lg border border-white"
            onClick={() => setSidebarOpen(false)}
          >
            Sign Up
          </a>
          <a
            href="#"
            className="text-gray-700 text-sm bg-white py-3 px-6 rounded hover:scale-105 transition-all shadow-lg"
            onClick={() => setSidebarOpen(false)}
          >
            Log In
          </a>
        </div>

        {/* Below is the close button that appears at the top of the sidebar */}
        <img
          src={assets.close_icon}
          className="absolute right-4 top-5 w-5 sm:hidden"
          onClick={() => setSidebarOpen(false)}
          alt=""
        />

        {/* Below are the menus/links on the navbar */}
        <NavLink
          to="/"
          className={`sm:hover:border-b ${(isActive) =>
            isActive && "text-primary"} `}
          onClick={() => setSidebarOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about-us"
          className="sm:hover:border-b"
          onClick={() => setSidebarOpen(false)}
        >
          About Us
        </NavLink>
        <NavLink
          to="/services"
          className="sm:hover:border-b"
          onClick={() => setSidebarOpen(false)}
        >
          Services
        </NavLink>
        <NavLink
          to="/contact-us"
          className="sm:hover:border-b"
          onClick={() => setSidebarOpen(false)}
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/blog"
          className="sm:hover:border-b"
          onClick={() => setSidebarOpen(false)}
        >
          Blog
        </NavLink>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <div className="flex gap-2 max-sm:hidden">
          <Button content="Sign Up" color="orange" />
          <Button content="Log In" color="white" />
        </div>

        <img
          src={theme === "light" ? assets.menu_icon : assets.menu_icon_dark}
          className="sm:hidden w-8"
          onClick={() => setSidebarOpen(true)}
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default Navbar;
