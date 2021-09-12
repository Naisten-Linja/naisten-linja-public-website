import React from 'react';

import './contentfulExternalForm.scss';
import FormIcon from '../../icons/form';
import ExternalLinkIcon from '../../icons/externalLink';

const translations = {
  linkOpensInNewTab: '(Avautuu uudessa välilehdessä)',
};

const ContentfulExternalForm = ({ content }) => {
  const { linkText, formUrl, openInNewTab } = content;
  return (
    <section className="ExternalForm layout-container">
      <a
        className="ExternalForm__link"
        href={formUrl}
        {...(openInNewTab ? { target: '_blank' } : {})}
      >
        <FormIcon
          color="white"
          aria-hidden="true"
          width={32}
          height={32}
          className="form-icon"
        />

        {linkText}

        {openInNewTab && (
          <ExternalLinkIcon
            width={20}
            height={20}
            aria-label={translations.linkOpensInNewTab}
            className="external-link-icon"
            role="img"
          />
        )}
      </a>
    </section>
  );
};

export default ContentfulExternalForm;
