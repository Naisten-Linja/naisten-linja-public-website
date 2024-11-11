import React from 'react';

const ContentfulLogoGrid = ({ content }) => {
  const { icons } = content;

  return <>{icons && icons.map()}</>;
};

export default ContentfulLogoGrid;
