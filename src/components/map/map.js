import React from "react";

import { StyledMapImg } from "./styles";
import mapImg from '../../images/MapNY.png'




const Map = () => {
  return (
      <StyledMapImg src={mapImg} alt="map" />
  );
}

export default Map