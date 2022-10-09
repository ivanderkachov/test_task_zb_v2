import React from "react";
import styled from "styled-components";
import body from "../../images/smile/SmileS/Vector.png";
import leftEye from "../../images/smile/SmileS/Vector-1.png";
import rightEye from "../../images/smile/SmileS/Vector-2.png";
import mouth from "../../images/smile/SmileS/Vector-3.png";

const StyledSmileS = styled.div`
  position: relative;
`;

const StyledBodyS = styled.img`
  border-radius: 50%;
`;

const StyledLeftEyeS = styled.img`
  position: absolute;
  left: 35.53px;
  top: 15.54px;
`;
const StyledRightEyeS = styled.img`
  position: absolute;
  left: 44.85px;
  top: 11.96px;
`;

const StyledMouthS = styled.img`
  position: absolute;
  left: 41.07px;
  top: 18.96px
`;

const SmileS = () => {
  return (
    <StyledSmileS>
      <StyledBodyS src={body} alt="body" />
      <StyledLeftEyeS src={leftEye} alt="leftEye" />
      <StyledRightEyeS src={rightEye} alt="rightEye" />
      <StyledMouthS src={mouth} alt="mouth" />
    </StyledSmileS>
  );
};

export default SmileS;
