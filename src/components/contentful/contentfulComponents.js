import React from 'react';

import ContentfulParagraph from './contentfulParagraph/contentfulParagraph';
import ContentfulQuote from './contentfulQuote/contentfulQuote';
import ContentfulReadMore from './contentfulReadMore/contentfulReadMore';
import ContentfulVideo from './contentfulVideo/contentfulVideo';
import ContentfulFullWidthImage from './contentfulFullWidthImage/contentfulFullWidthImage';
import ContentfulContentBoxGroup from './ContentfulContentBoxGroup/ContentfulContentBoxGroup';
import ContentfulOpenLetterForm from './contentfulOpenLetterForm/contentfulOpenLetterForm';
import ContentfulExternalForm from './contentfulExternalForm/contentfulExternalForm';
import ContentfulGoogleFormsIframe from './contentfulGoogleFormsIframe/contentfulGoogleFormsIframe';
import ContentfulServiceBoxGroup from './ContentfulServiceBoxGroup/ContentfulServiceBoxGroup';
import ContentfulPagePreview from './contentfulPagePreview/ContentfulPagePreview';
import ContentfulPersonIntroductionGrid from './contentfulPersonIntroductionGrid/ContentfulPersonIntroductionGrid';
import ContentfulImageAndText from './ContentfulImageAndText/ContentfulImageAndText';

const ContentfulComponents = ({ pageContent, theme }) => {
  return (pageContent || []).map((component, index) => {
    const componentType = component.internal ? component.internal.type : null;
    switch (componentType) {
      case 'ContentfulParagraph':
        return (
          <ContentfulParagraph
            key={index}
            content={component}
            theme={theme}
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

      case 'ContentfulContentBoxGroup':
        return <ContentfulContentBoxGroup key={index} content={component} />;

      case 'ContentfulServiceBoxGroup':
        return (
          <ContentfulServiceBoxGroup
            key={index}
            content={component}
            theme={theme}
          />
        );

      case 'ContentfulOpenLetterForm':
        return <ContentfulOpenLetterForm key={index} content={component} />;

      case 'ContentfulExternalForm':
        return <ContentfulExternalForm key={index} content={component} />;

      case 'ContentfulGoogleFormsIframe':
        return <ContentfulGoogleFormsIframe key={index} content={component} />;

      case 'ContentfulPagePreviewGrid':
        return <ContentfulPagePreview key={index} content={component} />;

      case 'ContentfulPersonIntroductionGrid':
        return (
          <ContentfulPersonIntroductionGrid key={index} content={component} />
        );

      case 'ContentfulImageAndText':
        return <ContentfulImageAndText key={index} content={component} />;

      default:
        console.log('componentType', componentType);
        return null;
    }
  });
};

export default ContentfulComponents;
