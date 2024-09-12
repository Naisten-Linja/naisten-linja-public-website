import React from 'react';

import ContentfulServiceBox from './contentfulServiceBox';

import './contentfulContentBoxGroup.scss';

const ContentfulServiceBoxGroup = ({ content }) => {
  const { services = [], title } = content;
  console.log('services', services);

  return (
    <div className="layout-container ContentBoxGroup__section">
      <div className="ContentBoxGroup__container">
        {title && <h2 className="ContentBoxGroup__title">{title}</h2>}
        {/* {ingress && <p>{ingress}</p>} */}
        {(services || []).map((service, idx) =>
          service.__typename === 'ContentfulServiceBox' ? (
            <ContentfulServiceBox {...service} key={idx} />
          ) : null,
        )}
      </div>
    </div>
  );
};

export default ContentfulServiceBoxGroup;
