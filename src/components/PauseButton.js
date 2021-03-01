import React from "react";
import { useTimer } from "../contexts/Timer";

const PauseButton = () => {
  const { state, dispatch } = useTimer();
  return (
    <button onClick={() => dispatch({ type: "PAUSE" })} id="pause">
      Pause
    </button>
  );
};
export default PauseButton;
