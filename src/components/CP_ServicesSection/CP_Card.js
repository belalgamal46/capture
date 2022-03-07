import React from "react";
//styles
import { StyledCard } from "../../styles";

const Card = ({ src, titleName, paragraph, alt }) => {
  return (
    <StyledCard>
      <div className="icon">
        <img src={src} alt={alt} />
        <h3>{titleName}</h3>
      </div>
      <p>{paragraph}</p>
    </StyledCard>
  );
};

export default Card;
