//Components
import FaqQuestion from "./CP_FaqQuestion";
//Styles
import styled from "styled-components";
import { StyledAbout } from "../../styles";
//Custom Hooks
import { useScroll } from "../useScroll";
//Animation
import { scrollRevealAnimation } from "../../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledFaq
      className="faq"
      variants={scrollRevealAnimation}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>{" "}
      </h2>
      <FaqQuestion
        questionTitle="How Do I Start ?"
        questionAnswer="Lorem ipsum dolor sit amet."
        questionAnswer2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          optio?"
      />

      <FaqQuestion
        questionTitle="Daily Schedule."
        questionAnswer="Lorem ipsum dolor sit amet."
        questionAnswer2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          optio?"
      />

      <FaqQuestion
        questionTitle="Different Payment Methods."
        questionAnswer="Lorem ipsum dolor sit amet."
        questionAnswer2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          optio?"
      />

      <FaqQuestion
        questionTitle="What Products do you offer ?"
        questionAnswer="Lorem ipsum dolor sit amet."
        questionAnswer2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          optio?"
      />
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
