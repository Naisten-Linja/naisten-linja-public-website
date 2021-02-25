import React from 'react';

import Bubble from './bubble';
import Wavy from './wavy';
import Diagonal from './diagonal';

import './background.scss';

const colorMap = {
  white: '#edeeef',
  pink: '#ffc4c8',
  'violet-blue': '#7d8edd',
  gray: '#b6b8c1',
  cyan: '#a6e8e3',
};

const Background = ({ color, backgroundStyle, children, textColor }) => {
  const backgroundStyleValue = backgroundStyle ? backgroundStyle : 'none';
  const textColorValue = textColor ? textColor : 'light';
  const backgroundColor = colorMap[color || 'none'] || 'transparent';

  return (
    <div
      className={`ContentfulBackground ContentfulBackground--${backgroundStyleValue} ContentfulTextColor--${textColorValue}`}
      style={
        // Only set full background color if the style is wavy
        backgroundStyleValue === 'wavy' || backgroundStyleValue === 'none'
          ? { backgroundColor: backgroundColor }
          : {}
      }
    >
      {backgroundStyle === 'bubble' && <Bubble color={backgroundColor} />}
      {backgroundStyle === 'wavy' && <Wavy color={backgroundColor} />}
      {backgroundStyle === 'diagonal' && <Diagonal color={backgroundColor} />}
      <div className="ContentfulBackground__content">{children}</div>
    </div>
  );
};

export default Background;
