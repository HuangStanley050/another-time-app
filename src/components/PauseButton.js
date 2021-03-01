import React from "react";
import { useTimer } from "../contexts/Timer";

const PauseButton = () => {
  const { state, dispatch } = useTimer();
  const updateTimer = () => {
    const currentTime = state.timer;
    dispatch({
      type: "PAUSE",
      payload: currentTime,
    });
  };
  return (
    <button onClick={updateTimer} id="pause">
      Pause
    </button>
  );
};
export default PauseButton;
