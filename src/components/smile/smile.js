import React from "react";
import styled from "styled-components";
import body from '../../images/smile/Vector.png'
import leftEye from '../../images/smile/Vector-1.png'
import rightEye from "../../images/smile/Vector-2.png";
import mouth from "../../images/smile/Vector-3.png";


const StyledSmile = styled.div`
  width: 100%;
  height: 100%;

`

const StyledBody = styled.img`
  position: relative;
  border-radius: 50%;
  
`;

const StyledLeftEye = styled.img`
  position: absolute;
  left: 64.13px;
  top: 74.99px;

`;
const StyledRightEye = styled.img`
  position: absolute;
  left: 90.07px;
  top: 74.99px;
`;

const StyledMouth = styled.img`
  position: absolute;
  left: 68px;
  top: 97.11px;
`;


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