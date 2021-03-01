import React, { useContext, useReducer } from "react";

const timerContext = React.createContext();
timerContext.Display = "Timer";

const initalState = {
  timer: 27,
};
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "PLAY":
      return {
        ...state,
        timer: (state.timer += 1),
      };
    case "PAUSE":
      return {
        ...state,
      };
    case "DURATION_CHANGE":
      return {
        ...state,
      };
    case "TICK":
      return {
        ...state,
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
