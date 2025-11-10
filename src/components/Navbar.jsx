import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
      <a href="#">
        <img
          src={theme === "light" ? assets.logo : assets.logo_dark}
          className="w-32 sm:w-40"
          alt=""
        />
      </a>

      <div
        className={`text-gray-700 dark:text-white sm:text-sm flex gap-5 ${
          sidebarOpen ? "max-sm:w-60 max-sm:pl-8" : "max-sm:w-0 overflow-hidden"
        } max-sm:bg-primary max-sm:h-full max-sm:min-h-screen max-sm:fixed top-0 right-0 max-sm:flex-col max-sm:pt-20 max-sm:text-white transition-all`}
      >
        <div className="flex gap-2 sm:hidden">
          <a
            href="#"
            className="text-white text-sm bg-primary py-3 px-6 rounded hover:scale-105 transition-all shadow-lg"
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
        <img
          src={assets.close_icon}
          className="absolute right-4 top-5 w-5 sm:hidden"
          onClick={() => setSidebarOpen(false)}
          alt=""
        />
        <a
          href="#"
          className="sm:hover:border-b text-primary"
          onClick={() => setSidebarOpen(false)}
        >
          Home
        </a>
        <a
          href="#"
          className="sm:hover:border-b"
          onClick={() => setSidebarOpen(false)}
        >
          About Us
        </a>
        <a
          href="#"
          className="sm:hover:border-b"
          onClick={() => setSidebarOpen(false)}
        >
          Services
        </a>
        <a
          href="#"
          className="sm:hover:border-b"
          onClick={() => setSidebarOpen(false)}
        >
          Contact Us
        </a>
        <a
          href="#"
          className="sm:hover:border-b"
          onClick={() => setSidebarOpen(false)}
        >
          Blog
        </a>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <div className="flex gap-2">
          <a
            href="#"
            className="text-white text-sm max-sm:hidden bg-primary py-3 px-6 rounded hover:scale-105 transition-all shadow-lg"
          >
            Sign Up
          </a>
          <a
            href="#"
            className="text-gray-700 text-sm max-sm:hidden bg-white py-3 px-6 rounded hover:scale-105 transition-all shadow-lg"
          >
            Log In
          </a>
        </div>

        <img
          src={theme === "light" ? assets.menu_icon : assets.menu_icon_dark}
          className="sm:hidden w-8"
          onClick={() => setSidebarOpen(true)}
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
