import React from 'react';
import ContentBoxOverlayLink from './contentBoxOverlayLink';

import './contentfulContentBoxGroup.scss';

const ContentfulServiceBox = ({
  serviceIcon,
  backgroundColor,
  textColor,
  serviceName,
  serviceInformation,
  linkToInternalPage,
  linkToCustomUrl,
}) => {
  const backgroundColorValue = backgroundColor ? backgroundColor : 'none';
  const textColorValue = textColor ? textColor : 'light';
  const isLink = linkToCustomUrl || linkToInternalPage;

  return (
    <div
      className={`ServiceBox__wrapper ContentfulBackgroundColor--${backgroundColorValue} ContentfulTextColor--${textColorValue}${
        isLink ? ' ContentBox__wrapper--is-link' : ''
      }`}
    >
      {serviceIcon && (
        <>
          <div className="ServiceBox__service-icon" aria-hidden={true}>
            <img src={serviceIcon.file.url} alt="" />
          </div>{' '}
        </>
      )}
      <div
        className="ServiceBox__service-name"
        aria-hidden={!linkToInternalPage && !linkToCustomUrl}
      >
        {serviceName}{' '}
      </div>

      <ContentBoxOverlayLink
        linkToCustomUrl={linkToCustomUrl}
        linkToInternalPage={linkToInternalPage}
        title={serviceName}
      />

      <div className="ServiceBox__service-information">
        {serviceInformation}
      </div>
    </div>
  );
};

export default ContentfulServiceBox;
