import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React from 'react';

import './footer.scss';

const Footer = () => (
  <footer className="layout-container">
    <h3>Follow us on social media</h3>
    <ul>
      <li>
        <a href="https://www.instagram.com/naistenlinja">Instagram</a>
      </li>
      <li>
        <a href="https://www.facebook.com/naistenlinjasuomessa">Facebook</a>
      </li>
      <li>
        <a href="https://twitter.com/naistenlinja">Twitter</a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCWuV35u6rHGGbfO_qsWes2w">
          Youtube
        </a>
      </li>
    </ul>
    <hr className="breakline" />
    <Link className="company-information" to="/yhteystiedot">
      Yhteystiedot
    </Link>

    <div className="copyright-info">
      © {new Date().getFullYear()} Naisten Linja Suomessa ry
    </div>
  </footer>
);

export default Footer;
