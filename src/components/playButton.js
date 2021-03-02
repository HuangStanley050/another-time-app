import React from "react";
import { useTimer } from "../contexts/Timer";

const PlayButton = () => {
  const { state, dispatch } = useTimer();
  const updateTimer = () => {
    let update;
    const intervalID = setInterval(() => {
      update = state.timer -= 0.05;
      dispatch({ type: "PLAY", payload: { update, intervalID } });
    }, 50);
  };

  return (
    <button onClick={updateTimer} id="start">
      Play
    </button>
  );
};
export default PlayButton;
