import React from 'react';

import ContentBoxGroup from '../../ui/ContentBoxGroup/ContentBoxGroup';

const ContentfulContentBoxGroup = ({ content }) => {
  const { contentBoxes = [], title, ingress } = content;

  return (
    <ContentBoxGroup
      title={title}
      ingress={ingress}
      contentBoxes={contentBoxes}
    />
  );
};

export default ContentfulContentBoxGroup;
