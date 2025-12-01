import React from "react";

const ContactCard = ({ src, title, subtitle }) => {
  return (
    <div className="p-8 text-center mx-auto bg-orange-200/20 dark:bg-primary/10 w-full space-y-2 cursor-pointer hover:scale-105 transition-all">
      <img src={src} className="w-10 mx-auto" alt="" />
      <h3 className="font-semibold text-lg dark:text-white">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{subtitle}</p>
    </div>
  );
};

export default ContactCard;
