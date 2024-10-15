import React from 'react';
import './Container.scss';

const Container = ({ background, backgroundColor, children, theme, size }) => {
  return (
    <div
      className={`Container_background ${theme}`}
      // style={{ ...(background ? { backgroundColor: backgroundColor } : '') }}
    >
      <div className={`Container_content ${size}`}>{children}</div>
    </div>
  );
};

export default Container;
