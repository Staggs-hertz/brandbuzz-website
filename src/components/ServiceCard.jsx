import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="relative pt-17 pb-5 px-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-200 dark:shadow-white/10 flex-1 hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div className="absolute w-20 top-0 left-0">
        <img
          src={service.icon}
          alt=""
          className="w-20 p-5 rounded rounded-br-4xl"
          style={{ backgroundColor: service.color }}
        />
      </div>
      <h2 className="font-semibold my-5 text-gray-800 dark:text-white text-2xl">
        {service.title}
      </h2>
      <p className="text-gray-500 dark:text-gray-400">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
