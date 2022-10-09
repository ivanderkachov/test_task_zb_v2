import React from "react";
import styled from "styled-components";
import body from "../../images/smile/SmileM/Vector.png";
import leftEye from "../../images/smile/SmileM/Vector-1.png";
import rightEye from "../../images/smile/SmileM/Vector-2.png";
import mouth from "../../images/smile/SmileM/Vector-3.png";

const StyledSmileM = styled.div`
  position: relative;
`;

const StyledBodyM = styled.img`
  
`;

const StyledLeftEyeM = styled.img`
  position: absolute;
  left: 38.01px;
  top: 67.8px;
`;
const StyledRightEyeM = styled.img`
  position: absolute;
  left: 21.99px;
  top: 67.8px;
`;

const StyledMouthM = styled.img`
  position: absolute;
  left: 27.09px;
  top: 48.91px;
`;

const SmileM = () => {
  return (
    <StyledSmileM>
      <StyledBodyM src={body} alt="body" />
      <StyledLeftEyeM src={leftEye} alt="leftEye" />
      <StyledRightEyeM src={rightEye} alt="rightEye" />
      <StyledMouthM src={mouth} alt="mouth" />
    </StyledSmileM>
  );
};

export default SmileM;
