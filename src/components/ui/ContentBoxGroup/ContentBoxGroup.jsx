import React from 'react';
import ContentBox from '../ContentBox/ContentBox';
import './ContentBoxGroup.scss';
import Container from '../utils/Container/Container';

const ContentBoxGroup = ({ contentBoxes, title, ingress, backgroundColor }) => {
  console.log('contentbox ingress: ', ingress);

  return (
    <Container backgroundColor={backgroundColor}>
      <div className="ContentBoxGroup_container">
        {title && <h2 className="">{title} - ContentBoxGroup</h2>}
        {ingress && <div dangerouslySetInnerHTML={{ __html: ingress }} />}
        <div className="ContentBoxGroup_grid">
          {contentBoxes?.map((content, idx) => (
            <ContentBox {...content} key={idx} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ContentBoxGroup;
