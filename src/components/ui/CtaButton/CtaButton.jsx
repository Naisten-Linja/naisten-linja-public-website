import { Link } from 'gatsby';
import React from 'react';
import './CtaButton.scss';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';

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
          target="_blank"
          rel="noopener noreferrer"
          className={`CtaButton_container ${secondary ? 'secondary' : ''}`}
        >
          {ctaLabel ? ctaLabel : linkToCustomUrl?.label}
          <LiaExternalLinkAltSolid />
        </a>
      )}
    </div>
  );
};

export default CtaButton;
