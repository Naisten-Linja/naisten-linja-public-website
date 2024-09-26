import React from 'react';
import ContentBox from '../ContentBox/ContentBox';
import './ContentBoxGroup.scss';

const ContentBoxGroup = ({ contentBoxes, title, ingress }) => {
  console.log('contentbox ingress: ', ingress);

  return (
    <div className="ContentBoxGroup_container">
      {title && <h2 className="">{title}</h2>}
      {ingress && <div dangerouslySetInnerHTML={{ __html: ingress }} />}
      <div className="ContentBoxGroup_grid">
        {contentBoxes?.map((content, idx) => (
          <ContentBox {...content} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ContentBoxGroup;
