import React from "react";
import styled from "styled-components";

import twitter from '../../images/icons/twitter.png'
import linkedin from '../../images/icons/linkedin.png'
import pinterest from '../../images/icons/pinterest.png'
import facebook from '../../images/icons/facebook.png'

const StyledIconsWrapper = styled.div`
  display: flex;
  justify-content: space-between
`
const StyledIcon = styled.img`

`

const Icons = () => {
  return (
    <StyledIconsWrapper>
      <a href="http://twitter.com" target="_blank">
        <StyledIcon src={twitter} alt="twitter" />
      </a>
      <a href="http://linkedin.com" target="_blank">
        <StyledIcon src={linkedin} alt="linkedin" />
      </a>
      <a href="http://facebook.com" target="_blank">
        <StyledIcon src={facebook} alt="facebook" />
      </a>
      <a href="http://pinterest.com" target="_blank">
        <StyledIcon src={pinterest} alt="pinterest" />
      </a>
    </StyledIconsWrapper>
  );
}

export default Icons