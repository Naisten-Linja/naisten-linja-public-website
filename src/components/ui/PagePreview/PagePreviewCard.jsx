import React from 'react';
import './PagePreview.scss';
import { Link } from 'gatsby';

const PagePreviewCard = ({
  seoTitle,
  pageName,
  seoDescription,
  ogImage,
  slug,
}) => {
  return (
    <Link className="page-preview-card" to={`/${slug}`}>
      <div className="page-preview-card-image">
        <img
          src={ogImage?.file?.url ?? '/images/placeholder.png'}
          alt={pageName}
        />
      </div>
      <div className="page-preview-card-content">
        <h3>{seoTitle ? seoTitle : pageName}</h3>
        <p>{seoDescription}</p>
      </div>
    </Link>
  );
};

export default PagePreviewCard;
