import React, { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(theme || (prefersDarkMode ? "dark" : "light"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
    //This saves the current theme (either 'light' or 'dark') in the browser’s localStorage so that when the user refreshes the page or revisits the site, their preference persists.
  }, [theme]);

  return (
    <div>
      <button>
        {theme === "light" ? (
          <img
            src={assets.moon_icon}
            className="rounded-full border border-gray-500 size-8 p-1.5"
            onClick={() => setTheme("dark")}
            alt=""
          />
        ) : (
          <img
            src={assets.sun_icon}
            className="rounded-full border border-gray-500 size-8 p-1.5"
            onClick={() => setTheme("light")}
            alt=""
          />
        )}
      </button>
    </div>
  );
};

export default ThemeToggleBtn;
