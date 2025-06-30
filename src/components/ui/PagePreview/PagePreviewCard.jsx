import React from 'react';
import './PagePreview.scss';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import { IoArrowForwardSharp } from 'react-icons/io5';

const PagePreviewCard = ({
  seoTitle,
  pageName,
  seoDescription,
  ogImage,
  slug,
}) => {
  const img = getImage(ogImage);
  return (
    <Link className="page-preview-card" to={`/${slug}`}>
      <div className="page-preview-card-image">
        {ogImage ? (
          <GatsbyImage
            image={img}
            alt={pageName}
            style={{ width: '100%', height: '100%' }}
            imgStyle={{ objectFit: 'cover' }}
          />
        ) : (
          <img src={'/images/placeholder.png'} alt={pageName} />
        )}
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
