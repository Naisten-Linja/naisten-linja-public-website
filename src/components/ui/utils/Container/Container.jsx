import React from 'react';
import './Container.scss';

const Container = ({ background, children, theme, size }) => {
  return (
    <div
      className={`Container_background ${background ? theme : ''}`}
      // style={{ ...(background ? { backgroundColor: backgroundColor } : '') }}
    >
      <div className={`Container_content ${size ? size : 'medium'}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
