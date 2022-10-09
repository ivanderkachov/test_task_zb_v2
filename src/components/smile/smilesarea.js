import React from "react";
import styled from "styled-components";

import Smile from "./smile";
import SmileS from "./smileS";
import SmileL from "./smileL";
import SmileM from "./smileM";


const StyledSmilesarea = styled.div`
  position: relative;
  width: 100%;
  height: 100%
`

const StyledSmileContainer1 = styled.div`
  position: absolute;
  left: 29.09px;
  top: 22.88px
`;

const StyledSmileContainer2 = styled.div`
  position: absolute;
  left: 50px;
  top: 935px;
`;

const StyledSmileContainer3 = styled.div`
  position: absolute;
  left: 1366.09px;
  top: 978.88px;
`;

const StyledSmileContainer4 = styled.div`
  position: absolute;
  left: 763.21px;
  top: 515.93px;
  z-index: 2;
`;
const StyledSmileContainer5 = styled.div`
  position: absolute;
  left: 811.67px;
  top: 598.15px;
  z-index: 1;
`;
const StyledSmileContainer6 = styled.div`
  position: absolute;
  left: 1234px;
  top: 928px;
`;

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