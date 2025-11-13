import React from "react";
import { servicesIcons } from "../assets/assets";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const servicesData = [
    {
      title: "SEO / SEM",
      description:
        "We help your brand rank higher and reach the right audience through smart keyword targeting, search optimization, and paid ad strategies that deliver measurable results.",
      icon: servicesIcons.search_icon,
      color: "yellow",
    },
    {
      title: "Marketing",
      description:
        "Our team designs creative campaigns that connect your brand with your audience — turning ideas into actions that drive awareness, engagement, and growth.",
      icon: servicesIcons.megaphone_icon,
      color: "green",
    },
    {
      title: "Viral Campaign",
      description:
        "We create bold, share-worthy content and digital experiences that capture attention across platforms, helping your brand go viral and stay relevant.",
      icon: servicesIcons.monitor_icon,
      color: "purple",
    },
    {
      title: "Others",
      description:
        "From brand consulting to content creation and analytics, we offer tailored solutions to help your business thrive in a fast-paced digital world.",
      icon: servicesIcons.scroll_icon,
      color: "red",
    },
  ];

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

      {/* Below is a map function to display the service cards */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 py-10 mt-6 gap-7">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
