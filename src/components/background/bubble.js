import React from 'react';

import './bubble.scss';

const Bubble = ({ color }) => {
  return (
    <svg
      width="600"
      height="560"
      viewBox="0 0 375 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ContentfulBackground--bubble-svg"
      aria-hidden={true}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.8835 10.4656C170.112 -31.6754 213.84 78.4048 281.916 90.1883C528.498 132.87 466.567 322.013 350.187 465.24C211.642 635.745 -263.657 128.349 55.8835 10.4656Z"
        fill={color}
      />
    </svg>
  );
};

export default Bubble;
