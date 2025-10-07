import React from 'react';
import './contentfulFullWidthImage.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ContentfulFullWidthImage = ({ content }) => {
  const altText = content.imageTitle || '';
  const img = getImage(content?.image?.gatsbyImageData);
  return (
    <section className="full-width-section">
      <div className="FullWidthImage layout-container">
        {content.showTitle && content.imageTitle !== '' && (
          <div className="row">
            <h2>{content.imageTitle}</h2>
          </div>
        )}
        <div className="row">
          {img ? (
            <GatsbyImage image={img} alt={altText} />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ContentfulFullWidthImage;
