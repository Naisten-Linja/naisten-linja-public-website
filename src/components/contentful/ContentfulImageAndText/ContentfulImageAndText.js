import React from 'react';
import ImageAndText from '../../ui/ImageAndText/ImageAndText';
import CtaButton from '../../ui/CtaButton/CtaButton';

// import ContentBoxGroup from '../../ui/ContentBoxGroup/ContentBoxGroup';

const ContentfulImageAndText = ({ content, theme }) => {
  const { title, text, image, imageDecoration, cta, ctaLabel } = content;
  const textHtml = text?.childMarkdownRemark.html;
  const imageUrl = image?.file.url;
  const button =
    cta.__typename === 'ContentfulPages' ? (
      <CtaButton ctaLabel={ctaLabel} linkToInternalPage={cta} />
    ) : (
      <CtaButton ctaLabel={ctaLabel} linkToCustomUrl={cta} />
    );

  return (
    <ImageAndText
      title={title}
      text={textHtml}
      imageUrl={imageUrl}
      imageDecoration={imageDecoration}
      ctaLabel={ctaLabel}
      cta={button}
      theme={theme}
    />
  );
};

export default ContentfulImageAndText;
