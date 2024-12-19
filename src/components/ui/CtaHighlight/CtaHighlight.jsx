import React from 'react';
import './CtaHighlight.scss';
import Container from '../utils/Container/Container';

const CtaHighlight = ({ title, text, imageUrl, primaryCta, secondaryCta }) => {
  return (
    <div
      className="CtaHighlight_container"
      style={{ backgroundImage: `url( ${imageUrl})` }}
    >
      <Container size={'large'}>
        <div className="CtaHighlight_text_content">
          {title && <h2 className="">{title}</h2>}
          {text && (
            <div
              className="CtaHighlight_text"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}
          <div className="CtaHighlight_cta_container">
            {primaryCta && primaryCta}
            {secondaryCta && secondaryCta}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CtaHighlight;
