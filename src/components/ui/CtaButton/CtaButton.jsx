import { Link } from 'gatsby';
import React from 'react';
import './CtaButton.scss';

const CtaButton = ({
  ctaLabel,
  linkToInternalPage,
  linkToCustomUrl,
  theme,
  secondary,
}) => {
  return (
    <div>
      {linkToInternalPage ? (
        <div className={`CtaButton_container ${secondary ? 'secondary' : ''}`}>
          <Link to={`/${linkToInternalPage.slug}`}>
            {ctaLabel ? ctaLabel : linkToInternalPage.pageName}
          </Link>
        </div>
      ) : (
        <div className={`CtaButton_container ${secondary ? 'secondary' : ''}`}>
          <a href={linkToCustomUrl.url}>
            {ctaLabel ? ctaLabel : linkToCustomUrl.label}
          </a>
        </div>
      )}
    </div>
  );
};

export default CtaButton;
