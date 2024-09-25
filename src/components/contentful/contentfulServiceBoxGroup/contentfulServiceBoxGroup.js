import React from 'react';

import ServiceBoxGroup from '../../ui/ServiceBoxGroup/ServiceBoxGroup';

const ContentfulServiceBoxGroup = ({ content }) => {
  const { services = [], title, ingress } = content;

  return (
    <ServiceBoxGroup title={title} ingress={ingress} services={services} />
  );
};

export default ContentfulServiceBoxGroup;
