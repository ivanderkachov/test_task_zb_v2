import React from "react";
import styled from "styled-components";

import SmileL from "../smile/smileL";
import SmileS from "../smile/smileS";


const StyledFooter = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const StyledSmileContainer2 = styled.div`
  position: absolute;
  left: 50px;
  top: 13px;
`;

const StyledSmileContainer3 = styled.div`
  position: absolute;
  left: 1356.09px;
  top: 50.88px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSmileContainer2>
        <SmileL />
      </StyledSmileContainer2>
      <StyledSmileContainer3>
        <SmileS />
      </StyledSmileContainer3>
    </StyledFooter>
  );
}

export default Footer