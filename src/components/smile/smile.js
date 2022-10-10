import React from "react";

import {
  StyledSmile,
  StyledBody,
  StyledLeftEye,
  StyledRightEye,
  StyledMouth
} from "./styles";
import body from '../../images/smile/Vector.png'
import leftEye from '../../images/smile/Vector-1.png'
import rightEye from "../../images/smile/Vector-2.png";
import mouth from "../../images/smile/Vector-3.png";

const Smile = () => {
  return (
    <StyledSmile>
      <StyledBody src={body} alt="body" />
      <StyledLeftEye src={leftEye} alt="leftEye" />
      <StyledRightEye src={rightEye} alt="rightEye" />
      <StyledMouth src={mouth} alt="mouth" />
    </StyledSmile>
  );
}

export default Smile