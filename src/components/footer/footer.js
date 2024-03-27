import { Link } from 'gatsby';
import React from 'react';

import FacebookIcon from '../icons/facebook';
import TwitterIcon from '../icons/twitter';
import InstagramIcon from '../icons/instagram';
import YoutubeIcon from '../icons/youtube';

import './footer.scss';

const Footer = () => (
  <footer className="layout-container">
    <h2>Seuraa meitä sosiaalisessa mediassa</h2>
    <ul className="social-media-links">
      <li>
        <a href="https://www.instagram.com/naistenlinja">
          <InstagramIcon width={32} height={32} />
          Instagram
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/naistenlinjasuomessa">
          <FacebookIcon width={32} height={32} />
          Facebook
        </a>
      </li>
      <li>
        <a href="https://twitter.com/naistenlinja">
          <TwitterIcon width={32} height={32} />
          Twitter
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCWuV35u6rHGGbfO_qsWes2w">
          <YoutubeIcon width={32} height={32} />
          Youtube
        </a>
      </li>
    </ul>
    <hr className="breakline" />
    <ul>
      <li>
        <Link className="company-information" to="/yhteystiedot">
          Yhteystiedot
        </Link>
      </li>
      <li>
        <Link className="company-information" to="/sitemap">
          Sivukartta
        </Link>
      </li>
      <li>
        <Link className="company-information" to="/saavutettavuus">
          Saavutettavuusseloste
        </Link>
      </li>
      <li>
        <Link className="company-information" to="/evasteseloste">
          Evästeseloste
        </Link>
      </li>
    </ul>

    <div className="copyright-info">
      © {new Date().getFullYear()} Naisten Linja Suomessa ry
    </div>
  </footer>
);

export default Footer;
