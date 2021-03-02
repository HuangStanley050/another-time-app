import React, { useContext } from "react";
import { useTimer } from "../contexts/Timer";

const InputDuration = () => {
  const { state, dispatch } = useTimer();
  const handleInput = (e) => {
    console.log(e.target.value);
    dispatch({
      type: "DURATION_CHANGE",
      payload: { duration: e.target.value },
    });
  };
  return <input id="duration" onChange={handleInput}></input>;
};
export default InputDuration;
