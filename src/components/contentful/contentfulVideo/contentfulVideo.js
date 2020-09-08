import React from 'react';
import ReactPlayer from 'react-player/lazy';
import '../../../scss/grid.scss';
import './contentfulVideo.scss';

const ContentfulVideo = ({ content }) => {
  return (
    <section>
      <div className="Video layout-container">
        {!!content.videoTitle && content.videoTitle !== '' && (
          <div class="row">
            <h2>{content.videoTitle}</h2>
          </div>
        )}
        <div className="row">
          {!!content.videoTopDescription && content.videoTopDescription !== '' && (
            <div className="col-xs-12 p-0">
              <div
                dangerouslySetInnerHTML={{
                  __html: content.videoTopDescription.childMarkdownRemark.html,
                }}
              ></div>
            </div>
          )}

          <div className="col-xs-12 p-0 video-player-container">
            <ReactPlayer className="react-player" url={content.videoUrl} />
          </div>

          {!!content.videoBottomDescription &&
            content.videoBottomDescription !== '' && (
              <div className="col-xs-12 p-0">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      content.videoBottomDescription.childMarkdownRemark.html,
                  }}
                ></div>
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default ContentfulVideo;
