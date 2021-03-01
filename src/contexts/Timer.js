import React, { useContext, useReducer } from "react";
import { reducer, initalState } from "./reducers/timeReducer";

const timerContext = React.createContext();
timerContext.Display = "Timer";

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
