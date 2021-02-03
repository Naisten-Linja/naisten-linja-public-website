import React from 'react';

import './diagonal.scss';

const Diagonal = ({ color }) => {
  return (
    <div
      className="ContentfulBackground--diagonal-background"
      style={{ backgroundColor: color }}
      aria-hidden={true}
    />
  );
};

export default Diagonal;
