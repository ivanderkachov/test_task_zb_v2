import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  StyledForm,
  StyledFormHeader,
  StyledFormInputWrapper,
  StyledInputName,
  StyledInputEmail,
  StyledInputMessage,
  StyledButton,
  StyledError,
} from "./styles.js";
import { addMessage } from "../../redux/reducers/reducer";

const Form = ({ toggle, setToggle }) => {
  const dispatch = useDispatch();

  const [formComplete, setFormComplete] = useState(false);
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, "Minimum 3 characters").required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      message: Yup.string()
        .min(10, "Minimum 10 characters")
        .required("Required!"),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(addMessage(values));
      setToggle(!toggle);
      setFormComplete(!formComplete);
      resetForm();
    },
  });

  const handleButtonClick = (e) => {
    e.preventDefault();
    setFormComplete(!formComplete);
  };

  return (
    <>
      {!formComplete && (
        <StyledForm onSubmit={formik.handleSubmit}>
          <StyledFormHeader>Reach out to us!</StyledFormHeader>
          <StyledFormInputWrapper>
            <StyledInputName
              type="text"
              name="name"
              placeholder="Your name*"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name && (
              <StyledError>{formik.errors.name}</StyledError>
            )}
            <StyledInputEmail
              type="text"
              name="email"
              placeholder="Your e-mail*"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && (
              <StyledError>{formik.errors.email}</StyledError>
            )}
            <StyledInputMessage
              name="message"
              placeholder="Your message*"
              value={formik.values.message}
              onChange={formik.handleChange}
            />
            {formik.errors.message && formik.touched.message && (
              <StyledError>{formik.errors.message}</StyledError>
            )}
          </StyledFormInputWrapper>
          <StyledButton type="submit">Send message</StyledButton>
        </StyledForm>
      )}
      {formComplete && (
        <>
          <StyledFormHeader>Thanks for your feedback!</StyledFormHeader>
          <StyledButton type="button" onClick={handleButtonClick}>
            Back to form
          </StyledButton>
        </>
      )}
    </>
  );
};

export default Form;
