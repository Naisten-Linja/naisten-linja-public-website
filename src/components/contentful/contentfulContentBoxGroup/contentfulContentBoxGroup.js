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

  const backgroundStyleValue =
    backgroundStyle && backgroundStyle.value ? backgroundStyle.value : null;
  const backgroundColorValue =
    backgroundColor && backgroundColor.value ? backgroundColor.value : null;

  return (
    <Background
      color={backgroundColorValue}
      backgroundStyle={backgroundStyleValue}
    >
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
