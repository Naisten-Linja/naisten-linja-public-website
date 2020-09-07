import React from 'react';
import '../../../scss/grid.scss';
import './contentfulParagraph.scss';

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
  const paragraphColumns =
    !!content.paragraphColumns && content.sideImage === null
      ? selectParagraphCols(content.paragraphColumns.toLowerCase())
      : 1;

  const paragraphImagePosition = !!content.sideImagePosition
    ? content.sideImagePosition.toLowerCase()
    : !!content.sideImage
    ? 'right'
    : undefined;

  const paragraphColumnCount =
    paragraphColumns > 1 ? 'column-count-' + paragraphColumns : '';

  const paragraphGrid =
    content.sideImage !== null ? ' col-12 col-md-6 p-0' : '';

  return (
    <section>
      <div className="Paragraph layout-container">
        {!!content.paragraphTitle && content.paragraphTitle !== '' && (
          <div class="row">
            <h2>{content.paragraphTitle}</h2>
          </div>
        )}
        <div className="row">
          {paragraphImagePosition === 'left' && (
            <div className="col-xs-12 col-md-6 image-col p-0">
              <img
                src={content.sideImage.file.url}
                alt={content.sideImage.title}
              />
            </div>
          )}
          <div
            className={paragraphColumnCount + paragraphGrid}
            dangerouslySetInnerHTML={{
              __html: content.paragraphText.childMarkdownRemark.html,
            }}
          ></div>
          {paragraphImagePosition === 'right' && (
            <div className="col-xs-12 col-md-6 image-col p-0">
              <img
                src={content.sideImage.file.url}
                alt={content.sideImage.title}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentfulParagraph;
