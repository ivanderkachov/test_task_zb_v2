import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  GlobalStyle,
  StyledWorkSheet,
  StyledFormContainer,
  StyledFooterContainer,
  StyledMapContainer,
  StyledEllipse,
  StyledSmilesareaContainer,
  StyledCloudContainer,
  StyledIconsContainer
} from "./styles";
import { getALLMessages } from "../../redux/reducers/reducer";
import Form from "../../components/form/form";
import Ellipse from '../../images/Ellipse 31.png'
import Map from "../../components/map/map";
import Smilesarea from "../../components/smile/smilesarea";
import Cloud from "../../components/cloud/cloud";
import Icons from "../../components/icons/icons";

const Main = () => {

  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    dispatch(getALLMessages())
  }, [toggle])

  return (
    <>
      <GlobalStyle />
      <StyledWorkSheet>
        <StyledFormContainer>
          <Form toggle={toggle} setToggle={setToggle} />
        </StyledFormContainer>
        <StyledFooterContainer />
        <StyledEllipse src={Ellipse} alt="Ellipse" />
        <StyledMapContainer>
          <Map />
        </StyledMapContainer>
        <StyledSmilesareaContainer>
          <Smilesarea />
        </StyledSmilesareaContainer>
        <StyledCloudContainer>
          <Cloud />
        </StyledCloudContainer>
        <StyledIconsContainer>
          <Icons />
        </StyledIconsContainer>
      </StyledWorkSheet>
    </>
  );
}

export default Main