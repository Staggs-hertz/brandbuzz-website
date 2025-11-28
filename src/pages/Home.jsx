import React from "react";
import Hero from "../components/homepage/Hero";
import Services from "../components/homepage/OurServices";
import SolutionSteps from "../components/homepage/SolutionSteps";
import OurAgency from "../components/homepage/OurAgency";
import Testimonials from "../components/homepage/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <SolutionSteps />
      <OurAgency />
      <Testimonials />
    </div>
  );
};

export default Home;
