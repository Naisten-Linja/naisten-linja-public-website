import React from 'react';
import './LogoGrid.scss';

const LogoGridItem = ({ src, alt }) => {
  return <img className="LogoGridItem" src={src} alt={alt} />;
};

export default LogoGridItem;
