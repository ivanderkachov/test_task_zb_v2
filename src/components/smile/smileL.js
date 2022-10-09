import React from "react";
import styled from "styled-components";
import body from "../../images/smile/SmileL/Vector.png";
import leftEye from "../../images/smile/SmileL/Vector-1.png";
import rightEye from "../../images/smile/SmileL/Vector-2.png";
import mouth from "../../images/smile/SmileL/Vector-3.png";

const StyledSmileL = styled.div`
  position: relative;
`;

const StyledBodyL = styled.img`
  border-radius: 50%;
  background: #fad34f;
`;

const StyledLeftEyeL = styled.img`
  position: absolute;
  left: 49.52px;
  top: 83.51px;
`;
const StyledRightEyeL = styled.img`
  position: absolute;
  left: 69.94px;
  top: 64.89px;
`;

const StyledMouthL = styled.img`
  position: absolute;
  left: 66.31px;
  top: 82.72px;
`;

const SmileL = () => {
  return (
    <StyledSmileL>
      <StyledBodyL src={body} alt="body" />
      <StyledLeftEyeL src={leftEye} alt="leftEye" />
      <StyledRightEyeL src={rightEye} alt="rightEye" />
      <StyledMouthL src={mouth} alt="mouth" />
    </StyledSmileL>
  );
};

export default SmileL;
