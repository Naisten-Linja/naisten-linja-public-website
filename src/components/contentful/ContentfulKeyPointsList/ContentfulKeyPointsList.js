import React from 'react';
import KeyPointsList from '../../ui/KeyPointsList/KeyPointsList';
import CtaButton from '../../ui/CtaButton/CtaButton';

const ContentfulKeyPointsList = ({ content, theme }) => {
  const {
    title,
    ingress,
    cta,
    ctaLabel,
    keyPoint1,
    keyPoint2,
    keyPoint3,
    keyPoint4,
    keyPoint5,
    keyPoint6,
  } = content;
  //   const textHtml = ingress?.childMarkdownRemark.html;
  //   const keyPoint1Html = keyPoint1?.childMarkdownRemark.html;

  const button =
    cta?.__typename === 'ContentfulPages' ? (
      <CtaButton ctaLabel={ctaLabel} linkToInternalPage={cta} />
    ) : (
      <CtaButton ctaLabel={ctaLabel} linkToCustomUrl={cta} />
    );

  return (
    <>
      {keyPoint1 && (
        <KeyPointsList
          title={title}
          ingress={ingress?.childMarkdownRemark.html}
          ctaLabel={ctaLabel}
          button={button}
          theme={theme}
          keyPoint1={keyPoint1?.childMarkdownRemark.html}
          keyPoint2={keyPoint2?.childMarkdownRemark.html}
          keyPoint3={keyPoint3?.childMarkdownRemark.html}
          keyPoint4={keyPoint4?.childMarkdownRemark.html}
          keyPoint5={keyPoint5?.childMarkdownRemark.html}
          keyPoint6={keyPoint6?.childMarkdownRemark.html}
        />
      )}
    </>
  );
};

export default ContentfulKeyPointsList;
