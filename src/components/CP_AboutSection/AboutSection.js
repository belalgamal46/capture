//Components
import CpHide from "./CP_Hide";
import parse from "html-react-parser";

//styles
import { StyledAbout, StyledDescription, StyledImage } from "../../styles";
import Wave from "../Wave";

//Animations
import { motion } from "framer-motion";
import { fade, photoAnimation } from "../../animation";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <CpHide title="We work to make" />
          <CpHide title={parse("your <span>dreams</span> come")} />
          <CpHide title="true." />
        </div>
        <motion.p variants={fade}>
          Contact Us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img
          variants={photoAnimation}
          src="/images/home1.png"
          alt="a guy with camera"
        />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;
