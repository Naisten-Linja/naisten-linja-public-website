import React from 'react';
import ImageAndText from '../../ui/ImageAndText/ImageAndText';

// import ContentBoxGroup from '../../ui/ContentBoxGroup/ContentBoxGroup';

const ContentfulImageAndText = ({ content, theme }) => {
  const { title, text, image, imageDecoration, cta, ctaLabel } = content;
  const textHtml = text?.childMarkdownRemark.html;
  const imageUrl = image?.file.url;

  return (
    <ImageAndText
      title={title}
      text={textHtml}
      imageUrl={imageUrl}
      imageDecoration={imageDecoration}
      ctaLabel={ctaLabel}
      cta={cta}
      theme={theme}
    />
  );
};

export default ContentfulImageAndText;
