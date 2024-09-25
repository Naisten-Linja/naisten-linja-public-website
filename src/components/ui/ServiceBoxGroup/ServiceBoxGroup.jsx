import React from 'react';
import ServiceBox from '../ServiceBox/ServiceBox';
import './ServiceBoxGroup.scss';

const ServiceBoxGroup = ({ services, title, ingress }) => {
  return (
    <div className="ServiceBoxGroup_container">
      {title && <h2 className="">{title}</h2>}
      {ingress && <p>{ingress}</p>}
      <div className="ServiceBoxGroup_grid">
        {services?.map((service, idx) => (
          <ServiceBox {...service} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ServiceBoxGroup;
