import React from 'react';
import '../../../scss/grid.scss';
import './ContentfulParagraph.scss';

const selectParagraphCols = (paragraphColumns) => {
  switch (paragraphColumns) {
    case 'two columns':
      return 2;
    case 'three columns':
      return 3;
    default:
      return 1;
  }
};

const ContentfulParagraph = ({ content }) => {
  const paragraphColumns = !!content.paragraphColumns
    ? selectParagraphCols(content.paragraphColumns.toLowerCase())
    : 1;
  return (
    <section>
      <div className="Paragraph">
        <h1>{content.paragraphTitle}</h1>
        <div
          className={
            paragraphColumns > 1 ? 'column-count-' + paragraphColumns : ''
          }
          dangerouslySetInnerHTML={{
            __html: content.paragraphText.childMarkdownRemark.html,
          }}
        ></div>
      </div>
    </section>
  );
};

export default ContentfulParagraph;
