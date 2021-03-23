import React from 'react';

import './contentfulExternalForm.scss';
import FormIcon from '../../icons/form';
import ExternalLinkIcon from '../../icons/externalLink';

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
            aria-label="Link opens in a new tab"
            className="external-link-icon"
          />
        )}
      </a>
    </section>
  );
};

export default ContentfulExternalForm;
