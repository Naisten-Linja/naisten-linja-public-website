import React from 'react';
import './LogoGrid.scss';

const LogoGridItem = ({ src, alt }) => {
  return (
    <img className="LogoGridItem" src={src + '?fm=webp&q=90&h=200'} alt={alt} />
  );
};

export default LogoGridItem;
