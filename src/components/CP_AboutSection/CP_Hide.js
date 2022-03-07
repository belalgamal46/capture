//styles
import { Hide } from "../../styles";
//Animations
import { titleAnim } from "../../animation";
import { motion } from "framer-motion";

const Cp_Hide = ({ title }) => {
  return (
    <Hide>
      <motion.h2 variants={titleAnim}>{title}</motion.h2>
    </Hide>
  );
};

export default Cp_Hide;
