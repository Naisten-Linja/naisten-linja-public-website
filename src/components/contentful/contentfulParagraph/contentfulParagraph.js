import React from 'react';

import Background from '../../background/background';

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

  const { backgroundStyle, backgroundColor, textColor } = content;

  const paragraphImagePosition = !!content.sideImagePosition
    ? content.sideImagePosition.toLowerCase()
    : !!content.sideImage
    ? 'right'
    : undefined;

  const paragraphColumnCount =
    paragraphColumns > 1 ? 'column-count-' + paragraphColumns : '';

  const paragraphGrid =
    content.sideImage !== null ? ' col-12 col-md-6 col-lg-8 col-xl-8 p-0' : '';

  return (
    <Background
      color={backgroundColor}
      backgroundStyle={backgroundStyle}
      textColor={content.textColor}
    >
      <div className="full-width-section">
        <div className={`Paragraph ${textColor || 'light'} layout-container`}>
          {!!content.paragraphTitle &&
            content.paragraphTitle !== '' &&
            content.paragraphTitle !== ' ' && (
              <div className="row">
                <h2 className="Paragraph__title">{content.paragraphTitle}</h2>
              </div>
            )}
          <div className="row">
            {paragraphImagePosition === 'left' &&
              content.sideImage &&
              content.sideImage.file && (
                <div className="col-xs-12 col-md-6 col-lg-4 col-xl-4 image-col p-0">
                  <img
                    src={content.sideImage.file.url}
                    alt={content.sideImage.description || ''}
                  />
                </div>
              )}
            {content.paragraphText && (
              <div
                className={paragraphColumnCount + paragraphGrid}
                dangerouslySetInnerHTML={{
                  __html: content.paragraphText.childMarkdownRemark.html,
                }}
              />
            )}
            {paragraphImagePosition === 'right' &&
              content.sideImage &&
              content.sideImage.file && (
                <div className="col-xs-12 col-md-6 col-lg-4 col-xl-4 image-col p-0">
                  <img
                    src={content.sideImage.file.url}
                    alt={content.sideImage.description || ''}
                  />
                </div>
              )}
          </div>
        </div>
      </div>
    </Background>
  );
};

export default ContentfulParagraph;
