import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from 'styled-components'

import { addMessage } from "../../redux/reducers/reducer";


const StyledForm = styled.form`
  display: flex;
  border: 1px solid #dcdcdc;
  flex-direction: column;
  width: 563px;
  padding: 3px;
  color: #3e3e3e;
`;
const StyledFormHeader = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  color: #3e3e3e;
`;
const StyledFormInputWrapper = styled.div`
  align-items: center;
`;
const StyledInputName = styled.input`
  background: #ffffff;
  box-sizing:border-box;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  width: 557px;
  height: 93px;
  margin: 6px 3px;
  padding-left: 46px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  ::placeholder {
    color: #2d2d2d;
  }
`;

const StyledInputEmail = styled.input`
  background: #ffffff;
  box-sizing: border-box;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  width: 557px;
  height: 93px;
  margin: 6px 3px;
  padding-left: 46px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  ::placeholder {
    color: #2d2d2d;
  }
`;
const StyledInputMessage = styled.textarea`
  background: #ffffff;
  box-sizing: border-box;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  width: 557px;
  height: 189px;
  margin: 6px 3px;
  padding-left: 46px;
  padding-top: 31px;
  resize: none;
  font-family: inherit;
  font-size: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  ::placeholder {
    color: #2d2d2d;
  }
`;

const StyledButton = styled.button`
  width: 218px;
  height: 73px;
  background: #fad34f;
  border: none;
  border-radius: 500px;
  font-weight: 400;
  font-size: 18px;

  color: #ffffff;
  margin-top: 12px;
  cursor: pointer;
  :hover {
    background: #d8d33d;
  }
`;

const Form = ({ toggle, setToggle }) => {
  const dispatch = useDispatch()
  const [messageForm, setMessageForm] = useState({
    id: "",
    name: "",
    email: "",
    message: ""
  })

  const onChangeHandler = (e) => {
    setMessageForm({ ...messageForm, [e.target.name]:e.target.value })
  }
  const buttonHandler = (e) => {
    e.preventDefault()
    dispatch(addMessage(messageForm))
    setMessageForm({
      id: "",
      name: "",
      email: "",
      message: "",
    })
    setToggle(!toggle)
  }


  return (
    <StyledForm>
      <StyledFormHeader>Reach out to us!</StyledFormHeader>
      <StyledFormInputWrapper>
        <StyledInputName
          type="text"
          name="name"
          placeholder="Your name*"
          value={messageForm.name}
          onChange={onChangeHandler}
        />
        <StyledInputEmail
          type="email"
          name="email"
          placeholder="Your e-mail*"
          value={messageForm.email}
          onChange={onChangeHandler}
        />
        <StyledInputMessage
          name="message"
          placeholder="Your message*"
          value={messageForm.message}
          onChange={onChangeHandler}
        />
      </StyledFormInputWrapper>

      <StyledButton type="submit" onClick={buttonHandler}>
        Send message
      </StyledButton>
    </StyledForm>
  );
}

export default Form