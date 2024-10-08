import React from 'react';

import './ServiceBox.scss';
import { Link } from 'gatsby';

const ServiceBox = ({
  serviceIcon,
  serviceName,
  linkToInternalPage,
  linkToCustomUrl,
}) => {
  return (
    <>
      {serviceName && linkToInternalPage ? (
        <Link
          className="ServiceBox_container"
          to={`/${linkToInternalPage.slug}`}
        >
          {serviceIcon && (
            <div aria-hidden={true}>
              <img src={serviceIcon.file.url} alt={serviceName} />
            </div>
          )}
          {serviceName}
        </Link>
      ) : (
        <a href={linkToCustomUrl} className="ServiceBox_container">
          {serviceIcon && (
            <div aria-hidden={true}>
              <img src={serviceIcon.file.url} alt={serviceName} />
            </div>
          )}
          {serviceName}
        </a>
      )}
    </>
  );
};

export default ServiceBox;
