import React from 'react';
import './Container.scss';

const Container = ({ background, backgroundColor, children }) => {
  return (
    <div
      className={'Container_background '}
      style={{ ...(background ? { backgroundColor: backgroundColor } : '') }}
    >
      <div className="Container_content">{children}</div>
    </div>
  );
};

export default Container;
