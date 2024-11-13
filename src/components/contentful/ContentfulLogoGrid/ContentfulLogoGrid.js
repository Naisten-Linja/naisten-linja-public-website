import React from 'react';
import LogoGrid from '../../ui/LogoGrid/LogoGrid';
import LogoGridItem from '../../ui/LogoGrid/LogoGridItem';

const ContentfulLogoGrid = ({ content }) => {
  const { title, logos } = content;

  return (
    <LogoGrid title={title}>
      {logos?.map((logo, index) => (
        <LogoGridItem key={index} src={logo.file.url} />
      ))}
    </LogoGrid>
  );
};

export default ContentfulLogoGrid;
