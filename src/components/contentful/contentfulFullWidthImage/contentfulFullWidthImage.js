import React from 'react';
import './contentfulFullWidthImage.scss';

const ContentfulFullWidthImage = ({ content }) => {
  return (
    <section className="full-width-section">
      <div className="FullWidthImage layout-container">
        {content.showTitle && content.imageTitle !== '' && (
          <div className="row">
            <h2>{content.imageTitle}</h2>
          </div>
        )}
        <div className="row">
          <img src={content.image.file.url} alt={content.imageTitle} />
        </div>
      </div>
    </section>
  );
};

export default ContentfulFullWidthImage;
