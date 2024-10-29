import React from 'react';
import './CtaHighlight.scss';
import CtaButton from '../CtaButton/CtaButton';

const CtaHighlight = ({
  title,
  text,
  imageUrl,
  primaryCtaLabel,
  primaryCta,
  secondaryCtaLabel,
  secondaryCta,
}) => {
  return (
    <div
      className="CtaHighlight_container"
      style={{ backgroundImage: `url( ${imageUrl})` }}
    >
      <div className="CtaHighlight_text_content">
        {title && <h2 className="">{title}</h2>}
        {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
        <div className="CtaHighlight_cta_container">
          {primaryCta && (
            <CtaButton
              ctaLabel={primaryCtaLabel}
              linkToInternalPage={primaryCta}
            />
          )}
          {secondaryCta && (
            <CtaButton
              ctaLabel={secondaryCtaLabel}
              linkToInternalPage={secondaryCta}
              secondary={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CtaHighlight;
