import React from 'react';

import './wavy.scss';

const WavyTop = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1529.9"
      height="211.4"
      viewBox="0 0 1529.9833 211.42133"
      fill="none"
      version="1.1"
      className="ContentfulBackground--wavy-top"
    >
      <path
        d="M 1530.9894,211.87531 C 1465.4894,61.375308 92.5,211 0,0 l -0.18370692,212.26126 z"
        fill={color}
      />
    </svg>
  );
};

const WavyBottom = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1554.5"
      height="85.6"
      viewBox="0 0 1554.5 85.60318"
      fill="none"
      version="1.1"
      className="ContentfulBackground--wavy-bottom"
      aria-hidden={true}
    >
      <path
        d="M 1554.7227,-0.08825891 0.16379519,-0.27354788 0,55.2754 l 250.976,17.8 c 353.349,25.06 708.361,12.5 1059.054,-37.47 z"
        fill={color}
      />
    </svg>
  );
};

const Wavy = ({ color }) => {
  return (
    <>
      <WavyTop color={color} />
      <WavyBottom color={color} />
    </>
  );
};

export default Wavy;
