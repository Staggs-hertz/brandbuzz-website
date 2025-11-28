import React from "react";
import Hero from "../components/homepage/Hero";
import Services from "../components/homepage/OurServices";
import SimpleSolution from "../components/homepage/SimpleSolution";
import OurAgency from "../components/homepage/OurAgency";
import Testimonials from "../components/homepage/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <SimpleSolution />
      <OurAgency />
      <Testimonials />
    </div>
  );
};

export default Home;
