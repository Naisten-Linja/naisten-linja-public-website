import React from 'react';
import Paragraph from '../../ui/Paragraph/Paragraph';
import CtaButton from '../../ui/CtaButton/CtaButton';

const ContentfulParagraph = ({ content, theme }) => {
  const { paragraphTitle, paragraphText, background, size, cta, ctaLabel } =
    content;

  const typename = cta?.__typename;

  const checkCta = (typename) => {
    switch (typename) {
      case 'ContentfulPages':
        return <CtaButton ctaLabel={ctaLabel} linkToInternalPage={cta} />;
      case 'ContentfulExternalLink':
        return <CtaButton ctaLabel={ctaLabel} linkToCustomUrl={cta} />;
      default:
        return null;
    }
  };

  return (
    <>
      {paragraphText && (
        <Paragraph
          title={paragraphTitle}
          paragraphText={paragraphText?.childMarkdownRemark.html}
          cta={cta}
          background={background}
          size={size}
          theme={theme}
          button={checkCta(typename)}
        />
      )}
    </>
  );
};

export default ContentfulParagraph;
