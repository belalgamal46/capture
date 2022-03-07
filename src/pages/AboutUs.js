import React from "react";
//import components
import AboutSection from "../components/CP_AboutSection/AboutSection";
import ServicesSection from "../components/CP_ServicesSection/ServiceSection";
import FaqSection from "../components/CP_FaqSection/FaqSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
//ScrollTop
import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
  return (
    <motion.main
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.main>
  );
};

export default AboutUs;
