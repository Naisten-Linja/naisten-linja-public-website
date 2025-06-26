import React from 'react';
import './contentfulFullWidthImage.scss';

const ContentfulFullWidthImage = ({ content }) => {
  const altText = content.imageTitle || '';
  return (
    <section className="full-width-section">
      <div className="FullWidthImage layout-container">
        {content.showTitle && content.imageTitle !== '' && (
          <div className="row">
            <h2>{content.imageTitle}</h2>
          </div>
        )}
        <div className="row">
          <img
            src={content.image?.file.url + '?fm=jpg&q=90&h=700'}
            alt={altText}
          />
        </div>
      </div>
    </section>
  );
};

export default ContentfulFullWidthImage;
