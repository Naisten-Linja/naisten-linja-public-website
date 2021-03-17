import React from 'react';

import './contentfulExternalForm.scss';

const ContentfulExternalForm = ({ content }) => {
  const { linkText, formUrl, openInNewTab } = content;
  return (
    <section className="ExternalForm layout-container">
      <a
        className="ExternalForm__link"
        href={formUrl}
        {...(openInNewTab ? { target: '_blank' } : {})}
      >
        {linkText}
      </a>
    </section>
  );
};

export default ContentfulExternalForm;
