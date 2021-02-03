import React from 'react';

import Bubble from './bubble';
import Wavy from './wavy';
import Diagonal from './diagonal';

import './background.scss';

const Background = ({ color, backgroundStyle, children }) => {
  if (!color || !color.value || !backgroundStyle || !backgroundStyle.value) {
    return <>children</>;
  }
  return (
    <div
      className={`ContentfulBackground ContentfulBackground--${backgroundStyle.value}`}
      style={
        backgroundStyle.value === 'wavy' ? { backgroundColor: color.value } : {}
      }
    >
      {backgroundStyle.value === 'bubble' && <Bubble color={color.value} />}
      {backgroundStyle.value === 'wavy' && <Wavy color={color.value} />}
      {backgroundStyle.value === 'diagonal' && <Diagonal color={color.value} />}
      <div className="ContentfulBackground__content">{children}</div>
    </div>
  );
};

export default Background;
