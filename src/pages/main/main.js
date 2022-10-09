import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";

import { getALLMessages } from "../../redux/reducers/reducer";
import Form from "../../components/form/form";
import Footer from "../../components/footer/footer";
import Ellipse from '../../images/Ellipse 31.png'
import Map from "../../components/map/map";
import SmileS from "../../components/smile/smileS";
import Smile from "../../components/smile/smile";
import SmileL from "../../components/smile/smileL";

const GlobalStyle = createGlobalStyle`
  html {
    width: 1440px;
    height: 1128px;
  }
  body {
    font-family: Apercu Arabic Pro, sans-serif;
    height: 100%;
    width: 100%;
    margin: 0;
    position: relative;
  }
`;
const StyledFormContainer = styled.div`
  position: absolute;
  left: 147px;
  top: 179px;
`;

const StyledFooterContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 928px;
  width: 100%;
  height: 200px;
  background: #fafafa;
  border: 1px solid #d8d8d8;
`;
const StyledMapContainer = styled.div`
  position: absolute;
  left: 814px;
  top: -52px;
  z-index: 1;
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
const StyledSmileContainer1 = styled.div`
  position: absolute;
  left: 29.09px;
  top: 22.88px
`;
const StyledSmileContainer4 = styled.div`
  position: absolute;
  left: 763.21px;
  top: 515.93px;
  z-index: 3;
`;
const StyledSmileContainer5 = styled.div`
  position: absolute;
  left: 811.67px;
  top: 598.15px;
  z-index: 2;
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
      <StyledSmileContainer1>
        <SmileS />
      </StyledSmileContainer1>
      <StyledSmileContainer4>
        <Smile />
      </StyledSmileContainer4>
      <StyledSmileContainer5>
        <SmileL />
      </StyledSmileContainer5>
    </>
  );
}

export default Main