import React from 'react';
import './ImageAndText.scss';
import Container from '../utils/Container/Container';
import ImageDecorationRight from '../../icons/imageDecorationRight';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ImageAndText = ({
  title,
  text,
  image,
  theme,
  imageDecoration,
  button,
}) => {
  const img = getImage(image?.gatsbyImageData);

  return (
    <Container theme={''} size={'large'} background={true}>
      <div className="ImageAndText_container">
        <div className="ImageAndText_content">
          {title && <h2 className="">{title}</h2>}
          {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
          {button && button}
        </div>
        {img && (
          <div className={`ImageAndText_image ${imageDecoration ? theme : ''}`}>
            <GatsbyImage
              image={img}
              alt={image?.title || ''}
              style={{ width: '100%', height: '100%' }}
              imgStyle={{ objectFit: 'cover' }}
            />
            {imageDecoration && theme && <ImageDecorationRight />}
          </div>
        )}
      </div>
    </Container>
  );
};

export default ImageAndText;
