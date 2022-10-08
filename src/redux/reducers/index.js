import { combineReducers } from "redux";

import reducer from "./reducer";

const createRootReducer = () => {
  return combineReducers({
    reducer,
  });
};

export default createRootReducer;
