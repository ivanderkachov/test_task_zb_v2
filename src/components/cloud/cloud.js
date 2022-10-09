import React from "react";
import styled from "styled-components";

import cloud from '../../images/Cloud.png'

const StyledCloudsArea = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
const StyledCloud1 = styled.img`
  position: absolute;
  left: 23px;
  top: 84.89px;
  width: 184.32px;
  height: 185.89px;
  fill: rgba(198, 198, 198, 0.05);
`;
const StyledCloud2 = styled.img`
  position: absolute;
  left: 992px;
  top: 114.79px;
  width: 207.79px;
  height: 157.52px;
  fill: rgba(198, 198, 198, 0.1);
`;
const StyledCloud3 = styled.img`
  position: absolute;
  left: 823px;
  top: 645px;
  width: 169.8px;
  height: 128.47px;
  fill: rgba(198, 198, 198, 0.05);
`;
const StyledCloud4 = styled.img`
  position: absolute;
  left: 233px;
  top: 660px;
  width: 288.22px;
  height: 216.72px;
  fill: rgba(198, 198, 198, 0.05);
`;
const StyledCloud5 = styled.img`
  position: absolute;
  left: 867px;
  top: 0px;
  width: 218.96px
  height: 164.22px;
  fill: rgba(198, 198, 198, 0.15);
`;
const StyledCloud6 = styled.img`
  position: absolute;
  left: 425px;
  top: 525px;
  width: 218.96px
  height: 164.22px;
  fill: rgba(198, 198, 198, 0.15);
`;
const StyledCloud7 = styled.img`
  position: absolute;
  left: 0px;
  top: 299px;
  width: 218.96px
  height: 164.22px;
  fill: rgba(198, 198, 198, 0.15);
`;
const StyledCloud8 = styled.img`
  position: absolute;
  left: 785px;
  top: 155px;
  width: 172.04px;
  height: 129.59px;
  fill: rgba(198, 198, 198, 0.1);
`;
const StyledCloud9 = styled.img`
  position: absolute;
  left: 193px;
  top: 588px;
  width: 131.82px;
  height: 99.42px;
  fill: rgba(198, 198, 198, 0.1);
`;
const StyledCloud10 = styled.img`
  position: absolute;
  left: 708.92px;
  top: 30.15px;
  width: 138.45px;
  height: 103.88px;
  fill: rgba(198, 198, 198, 0.05);
`;


const Cloud = () => {
  return (
    <StyledCloudsArea>
      <StyledCloud1 src={cloud} alt="cloud1" />
      <StyledCloud2 src={cloud} alt="cloud1" />
      <StyledCloud3 src={cloud} alt="cloud1" />
      <StyledCloud4 src={cloud} alt="cloud1" />
      <StyledCloud5 src={cloud} alt="cloud1" />
      <StyledCloud6 src={cloud} alt="cloud1" />
      <StyledCloud7 src={cloud} alt="cloud1" />
      <StyledCloud8 src={cloud} alt="cloud1" />
      <StyledCloud9 src={cloud} alt="cloud1" />
      <StyledCloud10 src={cloud} alt="cloud1" />
    </StyledCloudsArea>
  );
}

export default Cloud