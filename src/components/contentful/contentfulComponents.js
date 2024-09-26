import React from 'react';

import ContentfulParagraph from './contentfulParagraph/contentfulParagraph';
import ContentfulQuote from './contentfulQuote/contentfulQuote';
import ContentfulReadMore from './contentfulReadMore/contentfulReadMore';
import ContentfulVideo from './contentfulVideo/contentfulVideo';
import ContentfulFullWidthImage from './contentfulFullWidthImage/contentfulFullWidthImage';
import ContentfulPersonIntroduction from './contentfulPersonIntroduction/contentfulPersonIntroduction';
import ContentfulContentBoxGroup from './ContentfulContentBoxGroup/ContentfulContentBoxGroup';
import ContentfulOpenLetterForm from './contentfulOpenLetterForm/contentfulOpenLetterForm';
import ContentfulExternalForm from './contentfulExternalForm/contentfulExternalForm';
import ContentfulGoogleFormsIframe from './contentfulGoogleFormsIframe/contentfulGoogleFormsIframe';
import ContentfulServiceBoxGroup from './contentfulServiceBoxGroup/contentfulServiceBoxGroup';

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

      case 'ContentfulContentBoxGroup':
        return <ContentfulContentBoxGroup key={index} content={component} />;

      case 'ContentfulServiceBoxGroup':
        return <ContentfulServiceBoxGroup key={index} content={component} />;

      case 'ContentfulOpenLetterForm':
        return <ContentfulOpenLetterForm key={index} content={component} />;

      case 'ContentfulExternalForm':
        return <ContentfulExternalForm key={index} content={component} />;

      case 'ContentfulGoogleFormsIframe':
        return <ContentfulGoogleFormsIframe key={index} content={component} />;
      default:
        return null;
    }
  });
};

export default ContentfulComponents;
