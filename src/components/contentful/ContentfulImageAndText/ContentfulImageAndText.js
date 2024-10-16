import React from 'react';
import ImageAndText from '../../ui/ImageAndText/ImageAndText';

// import ContentBoxGroup from '../../ui/ContentBoxGroup/ContentBoxGroup';

const ContentfulImageAndText = ({ content }) => {
  const { title, text, image, imageDecoration, cta } = content;
  const textHtml = text?.childMarkdownRemark.html;
  const imageUrl = image?.file.url;

  console.log('image and text title:', title);

  return <ImageAndText title={title} text={textHtml} imageUrl={imageUrl} />;
};

export default ContentfulImageAndText;
