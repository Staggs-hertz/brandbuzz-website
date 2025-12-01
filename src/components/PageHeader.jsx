import React from "react";

const PageHeader = ({ content }) => {
  return (
    <div className="bg-orange-200/50 dark:bg-primary/20 flex justify-center items-center py-15 mb-8">
      <h1 className="text-3xl sm:text-4xl text-gray-800 font-bold dark:text-white">
        {content}
      </h1>
    </div>
  );
};

export default PageHeader;
