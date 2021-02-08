import React from 'react';
import ContentBoxOverlayLink from './contentBoxOverlayLink';

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

  return (
    <div
      className={`ContentBox__wrapper ContentfulBackgroundColor--${backgroundColorValue} ContentfulTextColor--${textColorValue}`}
    >
      {title && <div className="ContentBox__title"> {title} </div>}
      {content && (
        <div
          className="ContentBox__content"
          dangerouslySetInnerHTML={{
            __html: content.childContentfulRichText.html,
          }}
        />
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
