import React from 'react';
import ServiceBox from '../ServiceBox/ServiceBox';
import './ServiceBoxGroup.scss';
import Container from '../utils/Container/Container';

const ServiceBoxGroup = ({
  services,
  title,
  ingress,
  backgroundColor,
  background,
}) => {
  // console.log('service ingress: ', ingress);
  //TODO: get background from page theme
  return (
    <Container backgroundColor="#ffbf80" background={true}>
      <div className="ServiceBoxGroup_container">
        {title && <h2 className="">{title} - ServiceBoxGroup</h2>}
        {ingress && <div dangerouslySetInnerHTML={{ __html: ingress }} />}
        <div className="ServiceBoxGroup_grid">
          {services?.map((service, idx) => (
            <ServiceBox {...service} key={idx} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ServiceBoxGroup;
