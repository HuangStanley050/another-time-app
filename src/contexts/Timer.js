import React, { useContext, useReducer } from "react";

const timerContext = React.createContext();
timerContext.Display = "Timer";

export const TimerProvider = ({ children }) => {
  return (
    <timerContext.Provider value={"nothing"}>{children}</timerContext.Provider>
  );
};

export const useTimer = () => {
  return useContext(timerContext);
};
