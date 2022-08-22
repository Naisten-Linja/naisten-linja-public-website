import React from 'react';

import './contentfulGoogleFormsIframe.scss';

const ContentfulGoogleFormsIframe = ({ content }) => {
  
  // Modify some of the attributes to make them
  // compatible with React's strict parser.
  const modified = content.embedHtml
    .replaceAll("frameborder", "frameBorder")
    .replaceAll("marginheight", "marginHeight")
    .replaceAll("marginwidth", "marginWidth");

  return (
    <div
      className="GoogleFormsIframe"
      dangerouslySetInnerHTML={{
        __html: modified,
      }}
    />
  );
};

export default ContentfulGoogleFormsIframe;
