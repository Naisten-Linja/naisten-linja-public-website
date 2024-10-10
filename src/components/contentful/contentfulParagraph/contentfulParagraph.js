import React from 'react';
import Paragraph from '../../ui/Paragraph/Paragraph';

// TODO: background color from theme, boolean selection
const ContentfulParagraph = ({ content }) => {
  const { title, backgroundColor, background, cta, contentText } = content;

  return (
    <Paragraph
      title={title}
      paragraphContent={contentText?.childMarkdownRemark.html}
      backgroundColor={backgroundColor}
      cta={cta}
      background={background}
    />
  );
};

export default ContentfulParagraph;
