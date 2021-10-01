import React from 'react';
import '../../../scss/grid.scss';
import './contentfulQuote.scss';

const ContentfulQuote = ({ content }) => {
  return (
    <section className="full-width-section">
      <div className="Quote layout-container">
        <div className="row align-items-center quote-container">
          <figure className="quote-text">
            <blockquote
              dangerouslySetInnerHTML={{
                __html: content.quoteText.childMarkdownRemark.html,
              }}
            ></blockquote>
            <figcaption className="quote-author">
              — {content.quoteAuthor}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default ContentfulQuote;
