import React from "react";
import { useTimer } from "../contexts/Timer";

const PlayButton = () => {
  const { state, dispatch } = useTimer();
  const updateTimer = () => {
    let update;
    const intervalID = setInterval(() => {
      update = (state.timer -= 0.05).toFixed(2);
      dispatch({ type: "PLAY", payload: { update, intervalID } });
    }, 50);
  };

  return (
    <button onClick={updateTimer} id="start">
      <i class="fas fa-play" />
    </button>
  );
};
export default PlayButton;
