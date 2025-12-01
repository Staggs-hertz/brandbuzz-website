import React from "react";
import SectionHeader from "../SectionHeader";
import ContactCard from "./ContactCard";
import assets from "../../assets/assets";
import Form from "./Form";

const ContactHero = () => {
  //subtitle="We are here to help you! Your success is our mission - expert support, tailored solutions, and real results. Let's talk"
  return (
    <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-11 grid grid-cols-1 sm:grid-cols-2 gap-9">
      {/* Below is the left hand side */}
      <div>
        <SectionHeader
          title={
            <>
              Get In <span className="text-primary">Touch</span>
            </>
          }
          align="left"
        />
        <p className="mt-5 text-gray-500 dark:text-gray-300 mx-auto text-[15px]">
          We are here to help you! Your success is our mission - expert support,
          tailored solutions, and real results. Let's talk
        </p>
        <Form />
      </div>

      {/* Below is the right hand side */}
      <div className="flex flex-col gap-5 sm:h-full">
        <ContactCard
          src={assets.phone_icon}
          title="Phone Number"
          subtitle="304-6583-987"
        />
        <ContactCard
          src={assets.mail_icon}
          title="Email Address"
          subtitle="support@brandbuzz.com"
        />
        <ContactCard
          src={assets.location_icon}
          title="Our Location"
          subtitle="85 Bul. Vitosha Sofia, C 1000"
        />
      </div>
    </div>
  );
};

export default ContactHero;
