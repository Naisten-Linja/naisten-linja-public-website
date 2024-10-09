import React from 'react';
import './PagePreview.scss';

const PagePreviewCard = ({ pageName, seoDescription, ogImage, slug }) => {
  return (
    <a className="page-preview-card" href={`/${slug}`}>
      <div className="page-preview-card-image">
        <img
          src={ogImage?.file?.url ?? '/images/placeholder.png'}
          alt={pageName}
        />
      </div>
      <div className="page-preview-card-content">
        <h3>{pageName}</h3>
        <p>{seoDescription}</p>
      </div>
    </a>
  );
};

export default PagePreviewCard;
