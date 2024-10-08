import React from 'react';

import ServiceBoxGroup from '../../ui/ServiceBoxGroup/ServiceBoxGroup';

const ContentfulServiceBoxGroup = ({ content }) => {
  const { services = [], title, ingress, backgroundColor } = content;
  const ingressHtml = ingress?.childMarkdownRemark.html;

  return (
    <ServiceBoxGroup
      title={title}
      ingress={ingressHtml}
      services={services}
      backgroundColor={backgroundColor}
    />
  );
};

export default ContentfulServiceBoxGroup;
