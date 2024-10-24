import React from 'react';
import CtaHighlight from '../../ui/CtaHighlight/CtaHighlight';

const ContentfulCtaHighlight = ({ content }) => {
  const {
    title,
    text,
    image,
    primaryCtaLabel,
    primaryCta,
    secondaryCtaLabel,
    secondaryCta,
  } = content;
  const textHtml = text?.childMarkdownRemark.html;
  const imageUrl = image?.file.url;

  return (
    <CtaHighlight
      title={title}
      text={textHtml}
      imageUrl={imageUrl}
      primaryCtaLabel={primaryCtaLabel}
      primaryCta={primaryCta}
      secondaryCtaLabel={secondaryCtaLabel}
      secondaryCta={secondaryCta}
    />
  );
};

export default ContentfulCtaHighlight;
