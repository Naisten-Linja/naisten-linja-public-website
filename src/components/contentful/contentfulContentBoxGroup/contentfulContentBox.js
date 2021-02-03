import React from 'react';
import './contentfulContentBoxGroup.scss';

const ContentfulContentBox = ({
  content,
  backgroundColor,
  title,
  ...props
}) => {
  return (
    <div
      className={`ContentBox__wrapper ContentBox__wrapper--${backgroundColor}`}
    >
      {title && <div className="ContentBox__title"> {title} </div>}
      <div
        className="ContentBox__content"
        dangerouslySetInnerHTML={{
          __html: content.childContentfulRichText.html,
        }}
      ></div>
    </div>
  );
};

export default ContentfulContentBox;
