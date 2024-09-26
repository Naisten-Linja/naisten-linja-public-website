import React from 'react';

import ServiceBoxGroup from '../../ui/ServiceBoxGroup/ServiceBoxGroup';

const ContentfulServiceBoxGroup = ({ content }) => {
  const { services = [], title, ingress } = content;
  const ingressHtml = ingress?.childMarkdownRemark.html;

  return (
    <ServiceBoxGroup title={title} ingress={ingressHtml} services={services} />
  );
};

export default ContentfulServiceBoxGroup;
