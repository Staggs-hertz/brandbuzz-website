import React from "react";
import { Link } from "react-router-dom";

const Button = ({ content, color }) => {
  return (
    <Link
      className={` text-sm py-3 px-6 max-md:px-3 max-md:text-[12px] rounded hover:scale-105 transition-all shadow-lg flex-wrap ${
        color === "orange" ? "bg-primary text-white" : "bg-white text-gray-700"
      }`}
    >
      {content}
    </Link>
  );
};

export default Button;
