import React from "react";

import {
  StyledCloudsArea,
  StyledCloud1,
  StyledCloud2,
  StyledCloud3,
  StyledCloud4,
  StyledCloud5,
  StyledCloud6,
  StyledCloud7,
  StyledCloud8,
  StyledCloud9,
  StyledCloud10,
} from "./styles.js";
import cloud from '../../images/Cloud.png'

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