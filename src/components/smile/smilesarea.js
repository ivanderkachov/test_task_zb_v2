import React from "react";

import {
  StyledSmilesarea,
  StyledSmileContainer1,
  StyledSmileContainer2,
  StyledSmileContainer3,
  StyledSmileContainer4,
  StyledSmileContainer5,
  StyledSmileContainer6,
} from "./styles";

import Smile from "./smile";
import SmileS from "./smileS";
import SmileL from "./smileL";
import SmileM from "./smileM";

const Smilesarea = () => {
  return (
    <StyledSmilesarea>
      <StyledSmileContainer1>
        <SmileS />
      </StyledSmileContainer1>
      <StyledSmileContainer2>
        <SmileL />
      </StyledSmileContainer2>
      <StyledSmileContainer3>
        <SmileS />
      </StyledSmileContainer3>
      <StyledSmileContainer4>
        <Smile />
      </StyledSmileContainer4>
      <StyledSmileContainer5>
        <SmileL />
      </StyledSmileContainer5>
      <StyledSmileContainer6>
        <SmileM />
      </StyledSmileContainer6>
    </StyledSmilesarea>
  );
}

export default Smilesarea