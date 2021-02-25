import React from 'react';

import ContentfulParagraph from './contentfulParagraph/contentfulParagraph';
import ContentfulQuote from './contentfulQuote/contentfulQuote';
import ContentfulReadMore from './contentfulReadMore/contentfulReadMore';
import ContentfulVideo from './contentfulVideo/contentfulVideo';
import ContentfulFullWidthImage from './contentfulFullWidthImage/contentfulFullWidthImage';
import ContentfulPersonIntroduction from './contentfulPersonIntroduction/contentfulPersonIntroduction';
import ContentfulForm from './contentfulForm/contentfulForm';
import ContentfulContentBoxGroup from './contentfulContentBoxGroup/contentfulContentBoxGroup';
import ContentfulDonationForm from './contentfulDonationForm/contentfulDonationForm';

const ContentfulComponents = ({ pageContent }) => {
  return (pageContent || []).map((component, index) => {
    const componentType = component.internal ? component.internal.type : null;
    switch (componentType) {
      case 'ContentfulParagraph':
        return (
          <ContentfulParagraph
            key={index}
            content={component}
          ></ContentfulParagraph>
        );

      case 'ContentfulQuote':
        return (
          <ContentfulQuote key={index} content={component}></ContentfulQuote>
        );

      case 'ContentfulReadMore':
        return (
          <ContentfulReadMore
            key={index}
            content={component}
          ></ContentfulReadMore>
        );

      case 'ContentfulVideo':
        return <ContentfulVideo key={index} content={component} />;

      case 'ContentfulFullWidthImage':
        return <ContentfulFullWidthImage key={index} content={component} />;

      case 'ContentfulPersonIntroduction':
        return <ContentfulPersonIntroduction key={index} content={component} />;

      case 'ContentfulForm':
        return <ContentfulForm key={index} content={component} />;

      case 'ContentfulContentBoxGroup':
        return <ContentfulContentBoxGroup key={index} content={component} />;

      case 'ContentfulDonationForm':
        return <ContentfulDonationForm key={index} content={component} />;

      default:
        return null;
    }
  });
};

export default ContentfulComponents;
