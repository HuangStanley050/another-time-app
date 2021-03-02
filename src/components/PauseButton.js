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
      <i class="fas fa-pause" />
    </button>
  );
};
export default PauseButton;
