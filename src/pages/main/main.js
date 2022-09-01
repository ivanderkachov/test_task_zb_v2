import React from "react";
import { useSelector } from "react-redux";

const Main = () => {
  const user = useSelector((store) => store.reducer.user)
  return (
    <div>
      {user}
    </div>
  )
}

export default Main