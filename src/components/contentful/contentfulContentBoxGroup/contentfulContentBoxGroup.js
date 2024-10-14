import React from 'react';

import ContentBoxGroup from '../../ui/ContentBoxGroup/ContentBoxGroup';

const ContentfulContentBoxGroup = ({ content }) => {
  const { contentBoxes = [], title, ingress, showImages } = content;
  const ingressHtml = ingress?.childMarkdownRemark.html;

  return (
    <ContentBoxGroup
      title={title}
      ingress={ingressHtml}
      contentBoxes={contentBoxes}
      showImages={showImages}
    />
  );
};

export default ContentfulContentBoxGroup;
