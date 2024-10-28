import React from 'react';
import KeyPointsList from '../../ui/KeyPointsList/KeyPointsList';

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

  return (
    <>
      {keyPoint1 && (
        <KeyPointsList
          title={title}
          ingress={ingress?.childMarkdownRemark.html}
          ctaLabel={ctaLabel}
          cta={cta}
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
