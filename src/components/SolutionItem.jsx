import React from "react";

const SolutionItem = ({ title, desc, stepNumber }) => {
  return (
    <div className="flex items-center gap-8 mb-7">
      <div className="w-13 h-13 rounded-full bg-primary text-center flex items-center justify-center">
        <span className="text-white text-2xl">{stepNumber}</span>
      </div>
      <div className="">
        <h3 className="text-2xl font-semibold dark:text-white">{title}</h3>
        <p className="text-gray-500 dark:text-gray-300">{desc}</p>
      </div>
    </div>
  );
};

export default SolutionItem;
