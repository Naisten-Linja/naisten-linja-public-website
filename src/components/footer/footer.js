import { Link } from 'gatsby';
import React from 'react';

import FacebookIcon from '../icons/facebook';
import TwitterIcon from '../icons/twitter';
import InstagramIcon from '../icons/instagram';
import YoutubeIcon from '../icons/youtube';

import './footer.scss';

const Footer = () => (
  <footer className="layout-container">
    <h3>Follow us on social media</h3>
    <ul className="social-media-links">
      <li>
        <a href="https://www.instagram.com/naistenlinja">
          <InstagramIcon />
          Instagram
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/naistenlinjasuomessa">
          <FacebookIcon />
          Facebook
        </a>
      </li>
      <li>
        <a href="https://twitter.com/naistenlinja">
          <TwitterIcon />
          Twitter
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCWuV35u6rHGGbfO_qsWes2w">
          <YoutubeIcon />
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
