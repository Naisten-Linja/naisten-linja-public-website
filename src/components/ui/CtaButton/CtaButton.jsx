import { Link } from 'gatsby';
import React from 'react';
import './CtaButton.scss';
import { FaExternalLinkAlt } from 'react-icons/fa';

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
        <Link
          to={`/${linkToInternalPage.slug}`}
          className={`CtaButton_container ${secondary ? 'secondary' : ''}`}
        >
          {ctaLabel ? ctaLabel : linkToInternalPage.pageName}
        </Link>
      ) : (
        <a
          href={linkToCustomUrl?.url}
          className={`CtaButton_container ${secondary ? 'secondary' : ''}`}
        >
          {ctaLabel ? ctaLabel : linkToCustomUrl?.label}
          <FaExternalLinkAlt />
        </a>
      )}
    </div>
  );
};

export default CtaButton;