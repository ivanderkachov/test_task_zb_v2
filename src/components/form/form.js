import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { addMessage } from "../../redux/reducers/reducer";

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
    <form>
      <h2>Header</h2>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={messageForm.name} onChange={onChangeHandler} />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" value={messageForm.email} onChange={onChangeHandler} />
      <label htmlFor="message">Message</label>
      <input name="message" value={messageForm.message} onChange={onChangeHandler} />
      <button type="submit" onClick={buttonHandler}>
        Send message
      </button>
    </form>
  );
}

export default Form