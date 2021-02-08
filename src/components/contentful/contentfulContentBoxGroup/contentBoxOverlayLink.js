import React from 'react';
import { Link } from 'gatsby';

import './contentfulContentBoxGroup.scss';

const ContentBoxOverlayLink = ({
  linkToInternalPage,
  linkToCustomUrl,
  title,
}) => {
  return linkToCustomUrl ? (
    <a className="ContentBox__overlay-link" href={linkToCustomUrl}>
      {title}
    </a>
  ) : linkToInternalPage ? (
    <Link
      className="ContentBox__overlay-link"
      to={`/${linkToInternalPage.slug}`}
    >
      {title}
    </Link>
  ) : null;
};

export default ContentBoxOverlayLink;
