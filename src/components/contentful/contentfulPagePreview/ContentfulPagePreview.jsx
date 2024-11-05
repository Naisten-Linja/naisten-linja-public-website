import React from 'react';
import PagePreviewGrid from '../../ui/PagePreview/PagePreviewGrid';
import PagePreviewCard from '../../ui/PagePreview/PagePreviewCard';

const ContentfulPagePreview = ({ content }) => {
  const pages = content.page;
  return (
    <PagePreviewGrid
      title={content.title}
      ingress={content.ingress?.childMarkdownRemark.html}
    >
      {pages?.map((page, index) => (
        <PagePreviewCard key={index} {...page} />
      ))}
    </PagePreviewGrid>
  );
};

export default ContentfulPagePreview;
