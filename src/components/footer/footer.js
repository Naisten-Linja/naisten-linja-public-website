// import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React from 'react';
import './footer.scss';

const Footer = () => (
  <footer>
    <div className="layout-container">
      © {new Date().getFullYear()} Naisten Linja Suomessa ry
    </div>
  </footer>
);

export default Footer;
