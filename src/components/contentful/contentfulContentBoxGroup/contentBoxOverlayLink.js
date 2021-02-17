import React from 'react';
import { Link } from 'gatsby';

import './contentfulContentBoxGroup.scss';
import LeftArrow from '../../icons/leftArrow';

const ContentBoxOverlayLink = ({
  linkToInternalPage,
  linkToCustomUrl,
  title,
}) => {
  if (!linkToCustomUrl && !linkToInternalPage) {
    return null;
  }
  return (
    <>
      <div className="ContentBox__overlay-link-arrow" aria-hidden={true}>
        <LeftArrow color="#4c5060" />
      </div>
      {linkToCustomUrl && (
        <a className="ContentBox__overlay-link" href={linkToCustomUrl}>
          {title}
        </a>
      )}
      {linkToInternalPage && (
        <Link
          className="ContentBox__overlay-link"
          to={`/${linkToInternalPage.slug}`}
        >
          {title}
        </Link>
      )}
    </>
  );
};

export default ContentBoxOverlayLink;
