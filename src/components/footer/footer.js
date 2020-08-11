// import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React from 'react';

const Footer = () => (
  <footer>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      © {new Date().getFullYear()} Naisten Linja Suomessa ry
    </div>
  </footer>
);

export default Footer;
