import React from 'react';
import '../../../scss/grid.scss';
import './contentfulQuote.scss';

const ContentfulQuote = ({ content }) => {
  return (
    <section>
      <div className="Quote layout-container">
        <div className="row align-items-center quote-container">
          <div className="quote-text">
            <div
              dangerouslySetInnerHTML={{
                __html: content.quoteText.childMarkdownRemark.html,
              }}
            ></div>
            <div className="quote-author">— {content.quoteAuthor}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentfulQuote;
