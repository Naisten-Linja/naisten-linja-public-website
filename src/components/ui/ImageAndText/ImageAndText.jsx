import React from 'react';
import './ImageAndText.scss';
import Container from '../utils/Container/Container';

const ImageAndText = ({ title, text, imageUrl, cta, imageDecoration }) => {
  // console.log('contentbox ingress: ', ingress);

  return (
    <Container
      backgroundColor={'ruis'}
      theme={'ruis'}
      size={'large'}
      background={true}
    >
      <div className="ImageAndText_container">
        <h2>Image and text</h2>
        {title && <h2 className="">{title}</h2>}
        {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
        {cta && cta}
        {imageUrl && imageDecoration && (
          <div className="ImageAndText_image">
            <img src={imageUrl} alt={''} />
          </div>
        )}
      </div>
    </Container>
  );
};

export default ImageAndText;
