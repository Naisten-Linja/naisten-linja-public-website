import React from 'react';
import './ImageAndText.scss';
import Container from '../utils/Container/Container';
import ImageDecorationRight from '../../../images/image-decoration-right.svg';

const ImageAndText = ({
  title,
  text,
  imageUrl,
  theme,
  imageDecoration,
  button,
}) => {
  console.log('button: ', button);

  return (
    <Container theme={''} size={'extra-large'} background={true}>
      <div className="ImageAndText_container">
        <div className="ImageAndText_content">
          {title && <h2 className="">{title}</h2>}
          {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
          {button && button}
        </div>
        {imageUrl && (
          <div className={`ImageAndText_image ${imageDecoration ? theme : ''}`}>
            <img src={imageUrl} alt={''} />
            {imageDecoration && theme && (
              <img src={ImageDecorationRight} alt={''} />
            )}
          </div>
        )}
      </div>
    </Container>
  );
};

export default ImageAndText;
