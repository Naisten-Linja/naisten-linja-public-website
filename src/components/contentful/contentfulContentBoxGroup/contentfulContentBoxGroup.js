import React from 'react';

import Background from '../../background/background';
import ContentfulContentBox from './contentfulContentBox';

import './contentfulContentBoxGroup.scss';

const ContentfulContentBoxGroup = ({ content }) => {
  const {
    contentBoxes = [],
    title,
    backgroundStyle,
    backgroundColor,
  } = content;
  return (
    <Background color={backgroundColor} backgroundStyle={backgroundStyle}>
      <div className="layout-container ContentBoxGroup__section">
        <div className="ContentBoxGroup__container">
          {title && <h2 className="ContentBoxGroup__title">{title}</h2>}
          {(contentBoxes || []).map((contentBox, idx) => (
            <ContentfulContentBox {...contentBox} key={idx} />
          ))}
        </div>
      </div>
    </Background>
  );
};

export default ContentfulContentBoxGroup;
