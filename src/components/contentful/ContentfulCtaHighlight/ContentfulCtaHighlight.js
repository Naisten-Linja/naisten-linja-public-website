import React from 'react';
import CtaHighlight from '../../ui/CtaHighlight/CtaHighlight';
import CtaButton from '../../ui/CtaButton/CtaButton';

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

  const primaryButton =
    primaryCta?.__typename === 'ContentfulPages' ? (
      <CtaButton ctaLabel={primaryCtaLabel} linkToInternalPage={primaryCta} />
    ) : primaryCta?.__typename === 'ContentfulExternalLink' ? (
      <CtaButton ctaLabel={primaryCtaLabel} linkToCustomUrl={primaryCta} />
    ) : null;

  const secondaryButton =
    secondaryCta?.__typename === 'ContentfulPages' ? (
      <CtaButton
        ctaLabel={secondaryCtaLabel}
        linkToInternalPage={secondaryCta}
        secondary={true}
      />
    ) : secondaryCta?.__typename === 'ContentfulExternalLink' ? (
      <CtaButton
        ctaLabel={secondaryCtaLabel}
        linkToCustomUrl={secondaryCta}
        secondary={true}
      />
    ) : null;

  return (
    <CtaHighlight
      title={title}
      text={textHtml}
      imageUrl={imageUrl}
      primaryCta={primaryButton}
      secondaryCta={secondaryButton}
    />
  );
};

export default ContentfulCtaHighlight;
