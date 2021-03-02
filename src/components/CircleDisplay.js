import React from "react";

const CircleDisplay = () => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <svg height="200" width="200">
        <circle
          r="90"
          cx="100"
          cy="100"
          fill="transparent"
          stroke="blue"
          stroke-width="10"
          stroke-dasharray="560"
          stroke-offset="0"
          transform="rotate(-90 100 100)"
        ></circle>
      </svg>
    </div>
  );
};

export default CircleDisplay;
