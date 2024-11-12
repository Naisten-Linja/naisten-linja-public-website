import React from 'react';
import PagePreviewGrid from '../../ui/PagePreview/PagePreviewGrid';
import PagePreviewCard from '../../ui/PagePreview/PagePreviewCard';
import CtaButton from '../../ui/CtaButton/CtaButton';

const ContentfulPagePreview = ({ content }) => {
  const pages = content.page;
  const { title, cta, ctaLabel } = content;
  const typename = cta?.__typename;

  const checkCta = (typename) => {
    switch (typename) {
      case 'ContentfulPages':
        return (
          <CtaButton ctaLabel={ctaLabel} secondary linkToInternalPage={cta} />
        );
      case 'ContentfulExternalLink':
        return (
          <CtaButton ctaLabel={ctaLabel} secondary linkToCustomUrl={cta} />
        );
      default:
        return null;
    }
  };

  return (
    <PagePreviewGrid
      title={title}
      ingress={content.ingress?.childMarkdownRemark.html}
      button={checkCta(typename)}
    >
      {pages?.map((page, index) => (
        <PagePreviewCard key={index} {...page} />
      ))}
    </PagePreviewGrid>
  );
};

export default ContentfulPagePreview;
