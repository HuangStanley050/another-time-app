import React, { useEffect } from "react";
import { useTimer } from "../contexts/Timer";

const TimerText = () => {
  const { state, dispatch } = useTimer();
  useEffect(() => {
    if (state.timer === 0) {
      dispatch({ type: "OVER" });
    }
  }, [state.timer]);
  return <h1>{state.timer < 0 ? "End" : state.timer}</h1>;
};

export default TimerText;
