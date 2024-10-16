import React from 'react';
import Paragraph from '../../ui/Paragraph/Paragraph';

// TODO: background color from theme, boolean selection
const ContentfulParagraph = ({ content, theme }) => {
  const { title, backgroundColor, background, cta, paragraphText, size } =
    content;

  return (
    <Paragraph
      title={title}
      paragraphText={paragraphText?.childMarkdownRemark.html}
      backgroundColor={backgroundColor}
      cta={cta}
      background={background}
      size={size}
      theme={theme}
    />
  );
};

export default ContentfulParagraph;
