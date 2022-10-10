import React from "react";

import {
  StyledSmileL,
  StyledBodyL,
  StyledLeftEyeL,
  StyledRightEyeL,
  StyledMouthL
} from "./styles";
import body from "../../images/smile/SmileL/Vector.png";
import leftEye from "../../images/smile/SmileL/Vector-1.png";
import rightEye from "../../images/smile/SmileL/Vector-2.png";
import mouth from "../../images/smile/SmileL/Vector-3.png";


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
