import React, { useEffect, useState } from "react";
import { useTimer } from "../contexts/Timer";

const CircleDisplay = () => {
  const { state } = useTimer();
  const [offset, setOffset] = useState(state.duration);
  const perimeter = 190 * 2 * Math.PI;
  useEffect(() => {
    let circle = document.getElementById("circle");
    circle.setAttribute("stroke-dashoffset", offset);
    setOffset((perimeter * state.timer) / state.duration - perimeter);
    // console.log(circle);
    // console.log("re render circle");
  }, [state.timer]);

  return (
    <div style={{ marginBottom: "2rem" }}>
      <svg height="400" width="400">
        <circle
          id="circle"
          r="190"
          cx="200"
          cy="200"
          fill="transparent"
          stroke="blue"
          stroke-width="15"
          stroke-dasharray={perimeter}
          transform="rotate(-90 200 200)"
        ></circle>
      </svg>
    </div>
  );
};

export default CircleDisplay;
