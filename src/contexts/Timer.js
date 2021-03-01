import React, { useContext, useReducer } from "react";

const timerContext = React.createContext();
timerContext.Display = "Timer";

const initalState = {
  timer: 5,
  pause: false,
  intervalID: null,
};
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "PLAY":
      return {
        ...state,
        timer: action.payload.update,
        intervalID: action.payload.intervalID,
        pause: false,
      };
    case "PAUSE":
      console.log("pause");
      clearInterval(state.intervalID);
      return {
        ...state,
        timer: state.timer,
        pause: true,
        intervalID: null,
      };
    case "DURATION_CHANGE":
      return {
        ...state,
      };
    case "OVER":
      clearInterval(state.intervalID);
      return {
        ...state,
        timer: 0,
      };
    default:
      return state;
  }
};
export const TimerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <timerContext.Provider value={{ state, dispatch }}>
      {children}
    </timerContext.Provider>
  );
};

export const useTimer = () => {
  return useContext(timerContext);
};
