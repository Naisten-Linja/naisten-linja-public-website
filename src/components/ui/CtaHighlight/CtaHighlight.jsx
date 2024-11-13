import React from 'react';
import './CtaHighlight.scss';

const CtaHighlight = ({ title, text, imageUrl, primaryCta, secondaryCta }) => {
  return (
    <div
      className="CtaHighlight_container"
      style={{ backgroundImage: `url( ${imageUrl})` }}
    >
      <div className="CtaHighlight_text_content">
        {title && <h2 className="">{title}</h2>}
        {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
        <div className="CtaHighlight_cta_container">
          {primaryCta && primaryCta}
          {secondaryCta && secondaryCta}
        </div>
      </div>
    </div>
  );
};

export default CtaHighlight;
