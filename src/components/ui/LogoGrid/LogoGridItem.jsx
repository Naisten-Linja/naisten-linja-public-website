import React from 'react';
import './LogoGrid.scss';

const LogoGridItem = ({ src, alt }) => {
  return (
    <img className="LogoGridItem" src={src + '?fm=webp&q=80&w=300&h=200'} alt={alt} />
  );
};

export default LogoGridItem;
