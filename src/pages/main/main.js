import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";

import { getALLMessages } from "../../redux/reducers/reducer";
import Form from "../../components/form/form";
import Footer from "../../components/footer/footer";
import Ellipse from '../../images/Ellipse 31.png'
import Map from "../../components/map/map";
import Smilesarea from "../../components/smile/smilesarea";
import Cloud from "../../components/cloud/cloud";
import Icons from "../../components/icons/icons";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Apercu Arabic Pro, sans-serif;
    width: 1440px;
    height: 1128px;
    margin: 0;
    padding: 0;
  }
`;
const StyledWorkSheet = styled.div`
  width: 1440px;
  height: 1128px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  position: relative;
`;

const StyledFormContainer = styled.div`
  position: absolute;
  left: 147px;
  top: 179px;
  z-index: 2;
`;

const StyledFooterContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 928px;
  width: 100%;
  height: 200px;
  background: #fafafa;
  border: none;
  margin: 0;
  padding: 0;
`;
const StyledMapContainer = styled.div`
  position: absolute;
  margin: -24px 140px 18px 490px;
  width: 1606px;
  height: 970px;
  left: 324px;
  top: -20px;
  overflow: hidden;
  z-index: -1;
`;
const StyledEllipse = styled.img`
  position: absolute;
  border-radius: 50%;
  width: 87px;
  height: 87px;
  left: 714px;
  top: 21px;
  background: #fad34f;
  opacity: 0.1;
`;
const StyledSmilesareaContainer = styled.div`
  width: 100%;
  height: 100%;

`

const StyledCloudContainer = styled.div`
  position: absolute;
  width: 1468.79px;
  height: 876.72px;
  left: -92px;
  top: 101px;
  z-index: -11;
`;

const StyledIconsContainer = styled.div`
  position: absolute;
  top: 1007px;
  left: 343px;
  width: 126.76px;
  height: 16.09px;
`;

const Main = () => {

  const dispatch = useDispatch()

  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    dispatch(getALLMessages())
  }, [toggle])

  const messages = useSelector((store) => store.reducer.messages)

  return (
    <>
      <GlobalStyle />
      <StyledWorkSheet>
        <StyledFormContainer>
          <Form toggle={toggle} setToggle={setToggle} />
        </StyledFormContainer>
        <StyledFooterContainer>
          <Footer />
        </StyledFooterContainer>
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