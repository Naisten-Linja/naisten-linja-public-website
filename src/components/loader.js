import React from 'react';

import './loader.scss';

const Loader = () => (
  <div className="lds-heart">
    <div></div>
  </div>
);

export default Loader;

export const FullPageLoader = () => (
  <div className="lds-heart-full-page">
    <Loader />
  </div>
);
