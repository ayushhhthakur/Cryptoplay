import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import AboutSection from "./components/AboutSection";

const About = () => {
  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);

  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
};

export default About;
