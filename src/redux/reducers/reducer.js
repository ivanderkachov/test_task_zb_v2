import axios from "axios"

const GET_ALL_MESSAGES = 'GET_ALL_MESSAGES'
const ADD_MESSAGE = 'ADD_MESSAGE'

const initialState = {
  messages: [],
  newMessages: {}
}

export default (state=initialState, action) => {
  switch (action.type) {
    case GET_ALL_MESSAGES: {
      return {
        ...state,
        messages: action.payload,
      };
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        newMessages: action.payload,
      };
    }
    default:
      return state;
  }
}

export function getALLMessages() {
  return (dispatch) => {
    return axios('/api/v1/messages').then(({ data }) => {
      const messages = data.msgs
      dispatch({
        type: GET_ALL_MESSAGES,
        payload: messages
      })
    })
  }
}

export function addMessage(message) {
  return (dispatch) => {
    return axios
      .post(
        "/api/v1/messages",
        { message },
        { headers: { "Content-type": "application/json" } }
      )
      .then(({ data }) => {
        const message = data.newMsg
        dispatch({
          type: ADD_MESSAGE,
          payload: message
        });
      });
  };
}