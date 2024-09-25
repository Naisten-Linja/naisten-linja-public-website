import React from 'react';

import './ServiceBox.scss';

const ServiceBox = ({
  serviceIcon,
  serviceName,
  linkToInternalPage,
  linkToCustomUrl,
}) => {
  return (
    <div className="ServiceBox_container">
      {serviceIcon && (
        <div aria-hidden={true}>
          <img src={serviceIcon.file.url} alt={serviceName} />
        </div>
      )}
      <div aria-hidden={!linkToInternalPage && !linkToCustomUrl}>
        {serviceName}
      </div>
    </div>
  );
};

export default ServiceBox;
