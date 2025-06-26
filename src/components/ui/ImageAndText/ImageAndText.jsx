import React from 'react';
import './ImageAndText.scss';
import Container from '../utils/Container/Container';
import ImageDecorationRight from '../../icons/imageDecorationRight';
// import ImageDecorationRight from '../../../images/image-decoration-right.svg';

const ImageAndText = ({
  title,
  text,
  imageUrl,
  theme,
  imageDecoration,
  button,
}) => {
  return (
    <Container theme={''} size={'large'} background={true}>
      <div className="ImageAndText_container">
        <div className="ImageAndText_content">
          {title && <h2 className="">{title}</h2>}
          {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
          {button && button}
        </div>
        {imageUrl && (
          <div className={`ImageAndText_image ${imageDecoration ? theme : ''}`}>
            <img src={imageUrl + '?fm=webp&q=90&h=600'} alt={''} />
            {/* {imageDecoration && theme && ImageDecorationRight} */}
            {imageDecoration && theme && <ImageDecorationRight />}
          </div>
        )}
      </div>
    </Container>
  );
};

export default ImageAndText;
