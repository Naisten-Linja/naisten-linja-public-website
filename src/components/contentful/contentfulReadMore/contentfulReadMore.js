import React from 'react';
import '../../../scss/grid.scss';
import './contentfulReadMore.scss';

const ContentfulReadMore = ({ content }) => {
  return (
    <section className="full-width-section">
      <div className="ReadMore layout-container">
        <div className="row pl-1 pr-1">
          <h2>Lue Lisää</h2>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4 image-col">
            <img
              src="https://images.ctfassets.net/pbxhiiewat8h/I31m5s93YSmm4yEKXKlHf/ee2af1b76b0702bfc4d491a8f052822a/girl_reading.png?"
              alt="Read More"
            />
          </div>
          <div className="col-xs-12 col-md-8">
            <div
              dangerouslySetInnerHTML={{
                __html: content.readMoreContent.childMarkdownRemark.html,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentfulReadMore;
