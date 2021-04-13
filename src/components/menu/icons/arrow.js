import React from 'react';

const ArrowIcon = ({ ariaLabel, rotate }) => (
  <svg
    width="14"
    height="24"
    viewBox="0 0 14 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label={ariaLabel}
    className={rotate ? 'rotate' : ''}
  >
    <path
      d="M0.621533 20.1078L8.86653 11.8628L0.621532 3.61781C0.22362 3.2208 1.49205e-07 2.68179 1.17931e-07 2.11969C8.66584e-08 1.55759 0.22362 1.01858 0.621532 0.621562C1.45028 -0.207188 2.78903 -0.207188 3.61778 0.621562L13.3715 10.3753C14.2003 11.2041 14.2003 12.5428 13.3715 13.3716L3.61778 23.1253C2.78903 23.9541 1.45028 23.9541 0.621533 23.1253C-0.185967 22.2966 -0.207217 20.9366 0.621533 20.1078Z"
      fill="#F2F2F2"
    />
  </svg>
);

export default ArrowIcon;
