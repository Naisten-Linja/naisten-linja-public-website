import React from 'react';
import '../../../scss/grid.scss';
import './contentfulPersonIntroduction.scss';

const ContentfulPersonIntroduction = ({ content }) => {
  return (
    <section>
      <div className="PersonIntroduction layout-container">
        <div className="row pl-1 pr-1">
          <h2>{content.personName}</h2>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4 image-col">
            <img
              src={content.personPicture.file.url}
              alt={content.personName}
            />
          </div>
          <div className="col-xs-12 col-md-8">
            <div
              dangerouslySetInnerHTML={{
                __html: content.personIntroduction.childMarkdownRemark.html,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentfulPersonIntroduction;
