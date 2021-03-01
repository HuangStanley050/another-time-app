import React, { useContext, useReducer } from "react";

const timerContext = React.createContext();
timerContext.Display = "Timer";

const initalState = {};
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "PLAY":
      return "PLAY";
    case "PAUSE":
      return "PAUSE";
    case "DURATION_CHANGE":
      return "DURATION_CHANGE";
    default:
      return "I got nothing";
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
