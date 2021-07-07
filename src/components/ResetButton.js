import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ResetButton = ({ timerStart, setTimerStart, minutes, setMinutes }) => {
  return (
    <StyledButton
      onClick={() => {
        setTimerStart(!timerStart);
      }}
      whileHover={{
        fontWeight: "bold",
        backgroundColor: "whitesmoke",
      }}
      whileTap={{ scale: 0.95 }}
    >
      <ButtonText whileHover={{ color: "#A4AAE0" }}>R E S E T</ButtonText>
    </StyledButton>
  );
};

const StyledButton = styled(motion.div)`
  height: 0.6em;
  width: 2em;
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(motion.p)`
  display: flex;
  justify-content: center;
  align-items: center;
  //border: 1px solid red;
  height: 100%;
  width: 100%;
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;

export default ResetButton;
