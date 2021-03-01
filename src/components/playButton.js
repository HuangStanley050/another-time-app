import React from "react";
import { useTimer } from "../contexts/Timer";

const PlayButton = () => {
  const { state, dispatch } = useTimer();
  const updateTimer = () => {
    setInterval(() => {
      const update = (state.timer -= 1);
      dispatch({ type: "PLAY", payload: update });
    }, 1000);
  };
  return (
    <button onClick={updateTimer} id="start">
      Play
    </button>
  );
};
export default PlayButton;
