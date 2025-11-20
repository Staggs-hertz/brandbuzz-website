import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SolutionSteps from "./components/SolutionSteps";
import OurAgency from "./components/OurAgency";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  return (
    <div className="dark:bg-black">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Services />
      <SolutionSteps />
      <OurAgency />
      <Testimonials />
      <Footer theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
