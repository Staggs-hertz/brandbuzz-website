import React from "react";

const FooterArc = () => {
  let currentYear = new Date().getFullYear();

  return (
    <div>
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 58 C480 0 960 0 1440 58 L1440 120 L0 120 Z"
          fill="#E8630A"
        />
        <text
          x="50%"
          y="85%"
          textAnchor="middle"
          fill="white"
          fontSize="14"
          fontFamily="sans-serif"
        >
          All rights reserved {currentYear}
        </text>
      </svg>
    </div>
  );
};

export default FooterArc;
