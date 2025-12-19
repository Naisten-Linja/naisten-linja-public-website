import { Link } from 'gatsby';
import React from 'react';
import './CtaButton.scss';
import { LiaExternalLinkAltSolid, LiaPhoneAltSolid } from 'react-icons/lia';
import { IoCall } from 'react-icons/io5';

const CtaButton = ({
  ctaLabel,
  linkToInternalPage,
  linkToCustomUrl,
  theme,
  secondary,
}) => {
  const isTelLink = linkToCustomUrl?.url?.startsWith('tel:');

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
          {...(!isTelLink && { target: '_blank', rel: 'noopener noreferrer' })}
          className={`CtaButton_container ${secondary ? 'secondary' : ''}`}
        >
          {ctaLabel ? ctaLabel : linkToCustomUrl?.label}{' '}
          {isTelLink && <IoCall />}
          {!isTelLink && <LiaExternalLinkAltSolid />}
        </a>
      )}
    </div>
  );
};

export default CtaButton;
