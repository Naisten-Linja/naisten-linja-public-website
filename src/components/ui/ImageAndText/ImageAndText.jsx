import React from 'react';
import './ImageAndText.scss';
import Container from '../utils/Container/Container';
import { Link } from 'gatsby';
import ImageDecorationRight from '../../../images/image-decoration-right.svg';
import CtaButton from '../CtaButton/CtaButton';

const ImageAndText = ({
  title,
  text,
  imageUrl,
  theme,
  imageDecoration,
  cta,
  ctaLabel,
}) => {
  // console.log('imageDecoration: ', imageDecoration);
  // console.log('theme: ', theme);
  console.log('cta: ', cta, ctaLabel);

  return (
    <Container theme={''} size={'extra-large'} background={true}>
      <div className="ImageAndText_container">
        <div className="ImageAndText_content">
          {title && <h2 className="">{title}</h2>}
          {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
          {imageDecoration && theme && <p>{theme}</p>}
          {cta && (
            <div className="ImageAndText_cta">
              <Link to={`/${cta.slug}`}>
                {ctaLabel ? ctaLabel : cta.pageName}
              </Link>
            </div>
          )}
          <CtaButton ctaLabel={ctaLabel} linkToInternalPage={cta} />
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
