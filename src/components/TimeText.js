import React, { useEffect } from "react";
import { useTimer } from "../contexts/Timer";

const TimerText = () => {
  const { state, dispatch } = useTimer();
  return <h1>{state.timer}</h1>;
};

export default TimerText;
