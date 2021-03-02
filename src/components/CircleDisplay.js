import React from "react";

const CircleDisplay = () => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <svg height="400" width="400">
        <circle
          r="190"
          cx="200"
          cy="200"
          fill="transparent"
          stroke="blue"
          stroke-width="15"
          transform="rotate(-90 200 200)"
        ></circle>
      </svg>
    </div>
  );
};

export default CircleDisplay;
