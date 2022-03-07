import React from "react";
import styled from "styled-components";
import Movie from "../components/OurWork/Movie/Movie";
//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  sliderAnimation,
  sliderContainerAnimation,
} from "../animation";

//ScrollTop
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainerAnimation}>
        <StyledFrameOne variants={sliderAnimation}></StyledFrameOne>
        <StyledFrameTwo variants={sliderAnimation}></StyledFrameTwo>
        <StyledFrameThree variants={sliderAnimation}></StyledFrameThree>
        <StyledFrameFour variants={sliderAnimation}></StyledFrameFour>
      </motion.div>
      <Movie
        title="The Athlete"
        imageUrl="images/athlete-small.png"
        alt="athlete"
        to="/work/the-athlete"
      />
      <Movie
        title="The Racer"
        imageUrl="images/theracer-small.png"
        alt="theracer"
        to="/work/the-racer"
      />
      <Movie
        title="Good Times"
        imageUrl="images/goodtimes-small.png"
        alt="goodtimes"
        to="/work/good-times"
      />
      <ScrollTop />
    </StyledWork>
  );
};

const StyledWork = styled(motion.main)`
  min-height: 100vh;
  overflow: hidden;
  padding: 10rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const StyledFrameOne = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const StyledFrameTwo = styled(StyledFrameOne)`
  background: #ff8efb;
`;
const StyledFrameThree = styled(StyledFrameOne)`
  background: #8ed2ff;
`;

const StyledFrameFour = styled(StyledFrameOne)`
  background: #8effa0;
`;
export default OurWork;
