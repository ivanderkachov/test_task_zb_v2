import React from "react";
import styled from "styled-components";
import mapImg from '../../images/MapNY.png'

const StyledMapArea = styled.div`
  box-sizing: border-box;
  overflow: hidden;
`;

const StyledMapImg = styled.img`
  width: 976px;
  height: 976px;
  border-radius: 50%;
  object-fit: cover;
  background: linear-gradient(110.34deg, #ff91cb 12.64%, #f472b7 69.79%);
  box-shadow: inset 0px 16px 42px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;


const Map = () => {
  return (
    <StyledMapArea>
      <StyledMapImg src={mapImg} alt="map" />
    </StyledMapArea>
  );
}

export default Map