import React from 'react';
import ReactPlayer from 'react-player/lazy';
import '../../../scss/grid.scss';
import './contentfulVideo.scss';
import Container from '../../ui/utils/Container/Container';

const ContentfulVideo = ({ content }) => {
  return (
    <Container size={'xx-large'}>
      <div className="Video">
        <div className="Video_text">
          {!!content.videoTitle && content.videoTitle !== '' && (
            <h2>{content.videoTitle}</h2>
          )}
          {!!content.videoTopDescription && content.videoTopDescription !== '' && (
            <div
              dangerouslySetInnerHTML={{
                __html: content.videoTopDescription.childMarkdownRemark.html,
              }}
            ></div>
          )}
        </div>
        <ReactPlayer
          width="100%"
          height="100%"
          className="react-player"
          url={content.videoUrl}
          controls={false}
        />
      </div>
    </Container>
  );
};

export default ContentfulVideo;
