import React from 'react';

import ContentfulParagraph from './contentfulParagraph/contentfulParagraph';

const ContentfulComponents = ({ pageContent }) => {
  return pageContent.map((component, index) => {
    const componentType = component.internal.type;
    switch (componentType) {
      case 'ContentfulParagraph':
        return (
          <ContentfulParagraph
            key={index}
            content={component}
          ></ContentfulParagraph>
        );

      default:
        return null;
    }
  });
};

export default ContentfulComponents;
