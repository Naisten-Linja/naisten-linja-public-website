import React from 'react';
import './PagePreview.scss';
import { Link } from 'gatsby';
// import { IoArrowForwardSharp } from 'react-icons/io5';

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
          src={
            ogImage
              ? ogImage?.file?.url + '?fm=webp&q=90&h=300'
              : '/images/placeholder.png'
          }
          alt={pageName}
        />
      </div>
      <div className="page-preview-card-content">
        <div className="PagePreviewCard_title">
          <h3>{seoTitle ? seoTitle : pageName}</h3>
          {/* <IoArrowForwardSharp /> */}
        </div>
        <p>{seoDescription}</p>
      </div>
    </Link>
  );
};

export default PagePreviewCard;
