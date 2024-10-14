import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { CiChat1 } from 'react-icons/ci';

import './ServiceBox.scss';
import { Link } from 'gatsby';

const ServiceBox = ({
  serviceName,
  iconKey,
  linkToInternalPage,
  linkToCustomUrl,
}) => {
  // const icon = 'puhelin';
  const findIcon = (iconKey) => {
    switch (iconKey) {
      case 'puhelin':
        return <BsFillTelephoneFill />;
      case 'chat':
        return <CiChat1 />;
    }
  };

  return (
    <>
      {serviceName && linkToInternalPage ? (
        <Link
          className="ServiceBox_container"
          to={`/${linkToInternalPage.slug}`}
        >
          {/* {serviceIcon && (
            <div aria-hidden={true}>
              <img src={serviceIcon.file.url} alt={serviceName} />
            </div>
          )} */}
          {findIcon(iconKey)}
          {serviceName}
        </Link>
      ) : (
        <a href={linkToCustomUrl} className="ServiceBox_container">
          {/* {serviceIcon && (
            <div aria-hidden={true}>
              <img src={serviceIcon.file.url} alt={serviceName} />
            </div>
          )} */}
          {findIcon(iconKey)}
          {serviceName}
        </a>
      )}
    </>
  );
};

export default ServiceBox;
