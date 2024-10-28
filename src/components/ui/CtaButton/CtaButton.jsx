import { Link } from 'gatsby';
import React from 'react';
import './CtaButton.scss';

const CtaButton = ({
  ctaLabel,
  linkToInternalPage,
  linkToCustomUrl,
  theme,
}) => {
  return (
    <div>
      {linkToInternalPage ? (
        <div className="CtaButton_container">
          <Link to={`/${linkToInternalPage.slug}`}>
            {ctaLabel ? ctaLabel : linkToInternalPage.pageName}
          </Link>
        </div>
      ) : (
        <div className="CtaButton_container">
          <a href={linkToCustomUrl}>{ctaLabel}</a>
        </div>
      )}
    </div>
  );
};

export default CtaButton;
