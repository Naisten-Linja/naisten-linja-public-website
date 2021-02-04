import React from 'react';

import Bubble from './bubble';
import Wavy from './wavy';
import Diagonal from './diagonal';

import './background.scss';

const Background = ({ color, backgroundStyle, children }) => {
  if (!color || !backgroundStyle) {
    return <>{children}</>;
  }

  return (
    <div
      className={`ContentfulBackground ContentfulBackground--${backgroundStyle}`}
      style={
        // Only set full background color if the style is wavy
        backgroundStyle === 'wavy' ? { backgroundColor: color } : {}
      }
    >
      {backgroundStyle === 'bubble' && <Bubble color={color} />}
      {backgroundStyle === 'wavy' && <Wavy color={color} />}
      {backgroundStyle === 'diagonal' && <Diagonal color={color} />}
      <div className="ContentfulBackground__content">{children}</div>
    </div>
  );
};

export default Background;
