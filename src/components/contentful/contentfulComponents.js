import React from 'react';

import ContentfulParagraph from './contentfulParagraph/contentfulParagraph';
import ContentfulVideo from './contentfulVideo/contentfulVideo';
import ContentfulFullWidthImage from './contentfulFullWidthImage/contentfulFullWidthImage';
import ContentfulContentBoxGroup from './contentfulContentBoxGroup/contentfulContentBoxGroup';
import ContentfulOpenLetterForm from './contentfulOpenLetterForm/contentfulOpenLetterForm';
import ContentfulGoogleFormsIframe from './contentfulGoogleFormsIframe/contentfulGoogleFormsIframe';
import ContentfulServiceBoxGroup from './contentfulServiceBoxGroup/contentfulServiceBoxGroup';
import ContentfulPagePreview from './contentfulPagePreview/ContentfulPagePreview';
import ContentfulPersonIntroductionGrid from './contentfulPersonIntroductionGrid/contentfulPersonIntroductionGrid';
import ContentfulImageAndText from './ContentfulImageAndText/ContentfulImageAndText';
import ContentfulCtaHighlight from './ContentfulCtaHighlight/ContentfulCtaHighlight';
import ContentfulKeyPointsList from './ContentfulKeyPointsList/ContentfulKeyPointsList';
import ContentfulLogoGrid from './ContentfulLogoGrid/ContentfulLogoGrid';

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

      case 'ContentfulGoogleFormsIframe':
        return <ContentfulGoogleFormsIframe key={index} content={component} />;

      case 'ContentfulPagePreviewGrid':
        return <ContentfulPagePreview key={index} content={component} />;

      case 'ContentfulPersonIntroductionGrid':
        return (
          <ContentfulPersonIntroductionGrid key={index} content={component} />
        );

      case 'ContentfulImageAndText':
        return (
          <ContentfulImageAndText
            key={index}
            content={component}
            theme={theme}
          />
        );

      case 'ContentfulCtaHighlight':
        return <ContentfulCtaHighlight key={index} content={component} />;

      case 'ContentfulKeyPointsList':
        return (
          <ContentfulKeyPointsList
            key={index}
            content={component}
            theme={theme}
          />
        );

      case 'ContentfulLogoGrid':
        return <ContentfulLogoGrid key={index} content={component} />;

      default:
        console.log('componentType', componentType);
        return null;
    }
  });
};

export default ContentfulComponents;
