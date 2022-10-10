import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 563px;
  padding: 3px;
  color: #3e3e3e;
`;
export const StyledFormHeader = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  color: #3e3e3e;
`;
export const StyledFormInputWrapper = styled.div`
  align-items: center;
`;
export const StyledInputName = styled.input`
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
  :focus {
    outline: none;
  }
`;

export const StyledInputEmail = styled.input`
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
  :focus {
    outline: none;
  }
`;
export const StyledInputMessage = styled.textarea`
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
  :focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  width: 218px;
  height: 73px;
  background: rgba(250, 211, 79, 1);
  border: none;
  border-radius: 500px;
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
  margin-top: 12px;
  cursor: pointer;
  :hover {
    background: rgba(250, 211, 79, 0.5);
  }
`;

export const StyledError = styled.div`
  color: red;
  padding-left: 15px;
  margin: 0px;
`;