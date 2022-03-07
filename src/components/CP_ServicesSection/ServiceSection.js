//Components
import Card from "./CP_Card";

//Custome Hooks
import { useScroll } from "../useScroll";
//styles
import styled from "styled-components";
import { StyledAbout, StyledDescription, StyledImage } from "../../styles";

//Animation
import { scrollRevealAnimation } from "../../animation";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollRevealAnimation}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <StyledDescription>
        <h2>
          High <span>quality</span> services.
        </h2>
        <StyledCards>
          <Card
            src="/images/clock.svg"
            titleName="Efficient"
            paragraph="Lorem ipsum dolor sit amet."
            alt="clock icon"
          />

          <Card
            src="/images/teamwork.svg"
            titleName="Teamwork"
            paragraph="Lorem ipsum dolor sit amet."
            alt="teamwork icon"
          />

          <Card
            src="/images/diaphragm.svg"
            titleName="Diaphragm"
            paragraph="Lorem ipsum dolor sit amet."
            alt="diaphragm icon"
          />

          <Card
            src="/images/money.svg"
            titleName="Affordable"
            paragraph="Lorem ipsum dolor sit amet."
            alt="money icon"
          />
        </StyledCards>
      </StyledDescription>

      <StyledImage>
        <img src="/images/home2.png" alt="home2" />
      </StyledImage>
    </Services>
  );
};

const Services = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default ServicesSection;
