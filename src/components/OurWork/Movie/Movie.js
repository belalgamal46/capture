import styled from "styled-components";
import { Link } from "react-router-dom";

//styles
import { Hide } from "../../../styles";

//Animations
import { motion } from "framer-motion";
import { fade, photoAnimation, lineAnimation } from "../../../animation";
import { useScroll } from "../../useScroll";

const Movie = ({ title, imageUrl, alt, to }) => {
  const [element, controls] = useScroll();
  return (
    <StyledMovie>
      <motion.div
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <motion.h2 variants={fade}>{title}</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to={to}>
          <Hide>
            <motion.img variants={photoAnimation} src={imageUrl} alt={alt} />
          </Hide>
        </Link>
      </motion.div>
    </StyledMovie>
  );
};

const StyledMovie = styled(motion.section)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default Movie;
