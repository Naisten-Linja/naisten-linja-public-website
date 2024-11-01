import React from 'react';
import './Hero.scss';
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'gatsby';
import NIcon from '../../icons/nIcon';
import NIconWide from '../../icons/nIcon-wide';
import Wave from '../../icons/wave';

const Hero = (props) => {
  const {
    pageName,
    heroTitle,
    heroIngress,
    heroImage,
    backLink,
    theme,
    heroServiceLinks,
  } = props;

  return (
    <div
      className={`Hero ${theme}`}
      style={heroImage && { backgroundImage: `url( ${heroImage.file.url})` }}
    >
      <div className="wave">
        <Wave />
        <div className={`n-image ${heroImage ? 'default' : 'narrow'}`}>
          {heroImage ? <NIcon /> : <NIconWide />}
        </div>
        <div
          className={`container ${
            heroImage ? 'withBgImage' : 'withoutBgImage'
          }`}
        >
          <div className={`text-container`}>
            {backLink && (
              <Link className="back-link" to={'/' + backLink.slug}>
                <FaArrowLeft /> {backLink.pageName}
              </Link>
            )}
            <h1>{heroTitle ? heroTitle : pageName}</h1>
            {heroIngress && (
              <div
                className="ingress"
                dangerouslySetInnerHTML={{
                  __html: heroIngress.childMarkdownRemark.html,
                }}
              />
            )}
          </div>
          {heroServiceLinks && (
            <div className="buttons">
              {heroServiceLinks &&
                heroServiceLinks.map((service) => (
                  <>
                    {service.linkToCustomUrl ? (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={service.linkToCustomUrl}
                      >
                        {service.serviceName}
                        <FaExternalLinkAlt />
                      </a>
                    ) : service.linkToInternalPage ? (
                      <Link to={`/${service.linkToInternalPage?.slug}`}>
                        {service.serviceName} <FaArrowRight />
                      </Link>
                    ) : null}
                  </>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Hero;
