import React from 'react';
import ContentBoxOverlayLink from './contentBoxOverlayLink';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import './contentfulContentBoxGroup.scss';

const ContentfulContentBox = ({
  content,
  backgroundColor,
  textColor,
  title,
  linkToCustomUrl,
  linkToInternalPage,
}) => {
  const backgroundColorValue = backgroundColor ? backgroundColor : 'none';
  const textColorValue = textColor ? textColor : 'light';
  const isLink = linkToCustomUrl || linkToInternalPage;

  return (
    <div
      className={`ContentBox__wrapper ContentfulBackgroundColor--${backgroundColorValue} ContentfulTextColor--${textColorValue}${
        isLink ? ' ContentBox__wrapper--is-link' : ''
      }`}
    >
      {title && <div className="ContentBox__title"> {title} </div>}
      {content && (
        <div className="ContentBox__content">
          {documentToReactComponents(JSON.parse(content.raw, null, 2))}
        </div>
      )}
      <ContentBoxOverlayLink
        linkToCustomUrl={linkToCustomUrl}
        linkToInternalPage={linkToInternalPage}
        title={title}
      />
    </div>
  );
};

export default ContentfulContentBox;
