import { Link } from 'gatsby';
import React from 'react';
import './CtaHighlight.scss';

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
            <div className="CtaHighlight_cta">
              <Link to={`/${primaryCta.slug}`}>
                {primaryCtaLabel ? primaryCtaLabel : primaryCta.pageName}
              </Link>
            </div>
          )}
          {secondaryCta && (
            <div className="CtaHighlight_cta">
              <Link to={`/${primaryCta.slug}`}>
                {secondaryCtaLabel ? secondaryCtaLabel : secondaryCta.pageName}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CtaHighlight;
