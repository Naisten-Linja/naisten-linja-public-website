import React from 'react';

import Background from '../../background/background';
import ContentfulContentBox from './contentfulContentBox';
import ContentfulServiceBox from './contentfulServiceBox';

import './contentfulContentBoxGroup.scss';

const ContentfulContentBoxGroup = ({ content }) => {
  const {
    contentBoxes = [],
    title,
    backgroundStyle,
    backgroundColor,
  } = content;

  console.table([content]);

  return (
    <Background color={backgroundColor} backgroundStyle={backgroundStyle}>
      <div className="layout-container ContentBoxGroup__section">
        <div className="ContentBoxGroup__container">
          {title && <h2 className="ContentBoxGroup__title">{title}</h2>}
          {(contentBoxes || []).map((contentBox, idx) =>
            contentBox.__typename === 'ContentfulContentBox' ? (
              <ContentfulContentBox {...contentBox} key={idx} />
            ) : contentBox.__typename === 'ContentfulServiceBox' ? (
              <ContentfulServiceBox {...contentBox} key={idx} />
            ) : null,
          )}
        </div>
      </div>
    </Background>
  );
};

export default ContentfulContentBoxGroup;
