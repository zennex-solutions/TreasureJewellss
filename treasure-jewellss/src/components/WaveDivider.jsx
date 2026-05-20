import React from 'react'

const WaveDivider = ({ flip = false, color = "#FEF4EA" }) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 120"
        className="w-full h-[120px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C240,120 480,0 720,32 C960,64 1200,128 1440,64 L1440,0 L0,0 Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default WaveDivider