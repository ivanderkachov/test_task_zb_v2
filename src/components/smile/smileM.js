import React from "react";

import {
  StyledSmileM,
  StyledBodyM,
  StyledLeftEyeM,
  StyledRightEyeM,
  StyledMouthM
} from "./styles";
import body from "../../images/smile/SmileM/Vector.png";
import leftEye from "../../images/smile/SmileM/Vector-1.png";
import rightEye from "../../images/smile/SmileM/Vector-2.png";
import mouth from "../../images/smile/SmileM/Vector-3.png";


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
