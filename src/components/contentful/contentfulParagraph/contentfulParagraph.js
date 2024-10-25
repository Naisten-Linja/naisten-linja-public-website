import React from 'react';
import Paragraph from '../../ui/Paragraph/Paragraph';

// TODO: background color from theme, boolean selection
const ContentfulParagraph = ({ content, theme }) => {
  const {
    paragraphTitle,
    backgroundColor,
    background,
    cta,
    paragraphText,
    size,
  } = content;

  return (
    <>
      {paragraphText && (
        <Paragraph
          title={paragraphTitle}
          paragraphText={paragraphText?.childMarkdownRemark.html}
          backgroundColor={backgroundColor}
          cta={cta}
          background={background}
          size={size}
          theme={theme}
        />
      )}
    </>
  );
};

export default ContentfulParagraph;
