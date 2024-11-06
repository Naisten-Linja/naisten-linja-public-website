import React from 'react';
import ImageAndText from '../../ui/ImageAndText/ImageAndText';
import CtaButton from '../../ui/CtaButton/CtaButton';

const ContentfulImageAndText = ({ content, theme }) => {
  const { title, text, image, imageDecoration, cta, ctaLabel } = content;
  const textHtml = text?.childMarkdownRemark.html;
  const imageUrl = image?.file.url;
  // const button =
  //   cta?.__typename === 'ContentfulPages' ? (
  //     <CtaButton ctaLabel={ctaLabel} linkToInternalPage={cta} />
  //   ) : (
  //     <CtaButton ctaLabel={ctaLabel} linkToCustomUrl={cta} />
  //   );

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
    <ImageAndText
      title={title}
      text={textHtml}
      imageUrl={imageUrl}
      imageDecoration={imageDecoration}
      ctaLabel={ctaLabel}
      button={checkCta(typename)}
      theme={theme}
    />
  );
};

export default ContentfulImageAndText;
