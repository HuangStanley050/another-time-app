import React from "react";
import { useTimer } from "../contexts/Timer";

const PlayButton = () => {
  const { state, dispatch } = useTimer();
  const updateTimer = () => {
    let update;
    const intervalID = setInterval(() => {
      update = state.timer -= 1;
      dispatch({ type: "PLAY", payload: { update, intervalID } });
    }, 1000);
  };

  return (
    <button onClick={updateTimer} id="start">
      Play
    </button>
  );
};
export default PlayButton;
