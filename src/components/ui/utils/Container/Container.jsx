import React from 'react';
import './Container.scss';

const Container = ({ background, children, theme, size, style }) => {
  console.log('style: ', style);

  return (
    <div
      className={`Container_background ${background ? theme : ''}`}
      // style={{ ...(background ? { backgroundColor: backgroundColor } : '') }}
    >
      <div
        style={{ style }}
        className={`Container_content ${size ? size : 'medium'}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
