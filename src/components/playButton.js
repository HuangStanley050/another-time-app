import React from "react";
import { useTimer } from "../contexts/Timer";

const PlayButton = () => {
  const { state, dispatch } = useTimer();
  console.log(state);
  return (
    <button onClick={() => dispatch({ type: "WOW" })} id="start">
      Play
    </button>
  );
};
export default PlayButton;
