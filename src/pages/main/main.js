import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";

import { getALLMessages } from "../../redux/reducers/reducer";
import Form from "../../components/form/form";
import Footer from "../../components/footer/footer";
import Ellipse from '../../images/Ellipse 31.png'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100vh;
  }
  body {
    font-family: Apercu Arabic Pro, sans-serif;
    height: 100%;
    margin: 0;
    position: relative;
  }
`
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
    </>
  );
}

export default Main