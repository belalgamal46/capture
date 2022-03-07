//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import { Hide } from "../styles";

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <StyledTitle>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </StyledTitle>
      <div>
        <Hide>
          <StyledSocial variants={titleAnim}>
            <StyledCircle />
            <h2>Send Us A Message</h2>
          </StyledSocial>
        </Hide>
        <Hide>
          <StyledSocial variants={titleAnim}>
            <StyledCircle />
            <h2>Send an Email</h2>
          </StyledSocial>
        </Hide>
        <Hide>
          <StyledSocial variants={titleAnim}>
            <StyledCircle />
            <h2>Social Media</h2>
          </StyledSocial>
        </Hide>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled(motion.main)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;

const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
