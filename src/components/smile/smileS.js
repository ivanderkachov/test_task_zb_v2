import React from "react";

import {
  StyledSmileS,
  StyledBodyS,
  StyledLeftEyeS,
  StyledRightEyeS,
  StyledMouthS
} from "./styles";
import body from "../../images/smile/SmileS/Vector.png";
import leftEye from "../../images/smile/SmileS/Vector-1.png";
import rightEye from "../../images/smile/SmileS/Vector-2.png";
import mouth from "../../images/smile/SmileS/Vector-3.png";

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
