import React from "react";

const Services = () => {
  return (
    <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-11">
      {/* Below is the title of the services section */}
      <div className="text-center">
        <h1 className="font-bold text-4xl sm:text-5xl text-gray-700 dark:text-white">
          We Provide The Best <span className="text-primary">Services</span>
        </h1>
        <p className="mt-5 text-gray-500  dark:text-gray-300 mx-auto text-xl max-sm:w-5/6 sm:w-3/4 lg:w-1/3 ">
          Let us unleash the full potential of your business with our
          data-driven strategies
        </p>
      </div>
    </div>
  );
};

export default Services;
