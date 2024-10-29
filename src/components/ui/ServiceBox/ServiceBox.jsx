import React from 'react';

import './ServiceBox.scss';
import { Link } from 'gatsby';
import { findIcon } from '../utils/utils';

const ServiceBox = ({
  serviceName,
  iconKey,
  linkToInternalPage,
  linkToCustomUrl,
}) => {
  // const icon = 'puhelin';
  // const findIcon = (iconKey) => {
  //   switch (iconKey) {
  //     case 'puhelin':
  //       return <BsFillTelephoneFill />;
  //     case 'chat':
  //       return <CiChat1 />;
  //   }
  // };

  return (
    <>
      {serviceName && linkToInternalPage ? (
        <Link
          className="ServiceBox_container"
          to={`/${linkToInternalPage.slug}`}
        >
          {findIcon(iconKey)}
          {serviceName}
        </Link>
      ) : (
        <a href={linkToCustomUrl} className="ServiceBox_container">
          {findIcon(iconKey)}
          {serviceName}
        </a>
      )}
    </>
  );
};

export default ServiceBox;
