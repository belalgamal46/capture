import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../../movieState";
import AwardCp from "./AwardCp";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

const MovieDetails = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const currentMoive = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMoive[0]);
  }, [movies, url]);

  const mouseOver = (event) => {
    setHover(!hover);
  };
  return (
    <>
      {movie && (
        <StyledDetails
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <StyledHeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </StyledHeadLine>
          <StyledAwards>
            {movie.awards.map((award) => {
              return (
                <AwardCp
                  title={award.title}
                  description={award.description}
                  key={award.title}
                />
              );
            })}
          </StyledAwards>
          <ImageDisplayed>
            <img src={movie.secondaryImg} alt="movie" />
            <button onMouseOver={mouseOver} className="next">
              Next
            </button>
          </ImageDisplayed>
        </StyledDetails>
      )}
    </>
  );
};

const StyledDetails = styled(motion.main)`
  color: white;
`;

const StyledHeadLine = styled.section`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledAwards = styled.section`
  min-height: 80vh;
  display: flex;
  margin: 5rem 7rem;
  align-items: center;
  justify-content: space-around;
`;

const ImageDisplayed = styled.section`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .next {
    position: absolute;
    z-index: 100;
    right: 5%;
    top: 310%;
    &:hover {
      padding: 2rem 1.5rem;
      border-radius: 50%;
      top: 308%;
    }
  }
`;

export default MovieDetails;
