import React from "react";
import PageHeader from "../components/PageHeader";
import ContactHero from "../components/contactpage/ContactHero";
import Map from "../components/contactpage/Map";

const ContactUs = () => {
  return (
    <div>
      <PageHeader content="Contact Us" />
      <ContactHero />
      <Map />
    </div>
  );
};

export default ContactUs;
