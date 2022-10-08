import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getALLMessages } from "../../redux/reducers/reducer";
import Form from "../../components/form/form";
import Footer from "../../components/footer/footer";

const Main = () => {

  const dispatch = useDispatch()

  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    dispatch(getALLMessages())
  }, [toggle])

  const messages = useSelector((store) => store.reducer.messages)

  return (
    <>
    <Form toggle={toggle} setToggle={setToggle} />
    <Footer />
    </>
  );
}

export default Main