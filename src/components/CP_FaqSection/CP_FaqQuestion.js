//Components
import { useState } from "react";

//Animations
import { motion, AnimateSharedLayout } from "framer-motion";

const FaqQuestion = ({ questionTitle, questionAnswer, questionAnswer2 }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <AnimateSharedLayout>
      <motion.div
        layout
        className="question"
        onClick={() => setToggle(!toggle)}
      >
        <motion.h4 layout>{questionTitle}</motion.h4>
        {toggle && (
          <motion.div layout className="answer">
            <p>{questionAnswer}</p>
            <p>{questionAnswer2}</p>
          </motion.div>
        )}
        <div className="faq-line"></div>
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default FaqQuestion;
