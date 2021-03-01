import React from "react";
import { useTimer } from "../contexts/Timer";

const PlayButton = () => {
  const { state, dispatch } = useTimer();
  const updateTimer = () => {
    setInterval(() => {
      dispatch({ type: "PLAY" });
    }, 1000);
  };
  return (
    <button onClick={updateTimer} id="start">
      Play
    </button>
  );
};
export default PlayButton;
