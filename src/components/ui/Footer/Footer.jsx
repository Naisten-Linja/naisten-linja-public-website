import React from 'react';
import './Footer.scss';
import { Link } from 'gatsby';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';
import ExternalLinkIcon from '../../icons/externalLink';
import ScrollToTop from '../utils/ScrollToTop/ScrollToTop';

const Footer = ({
  onClick,
  contacts,
  facebook,
  instagram,
  twitterX,
  linkedIn,
  youtube,
  tikTok,
  linksGroupOne,
  linksGroupTwo,
  linksGroupThree,
  legals,
}) => {
  return (
    <footer className="Footer_container">
      <div className="Footer_content">
        <div className="Footer_layout">
          <div className="Footer_logos">
            <div className="Footer_naisten_linja_logo">
              <Link to="/">
                {' '}
                <img src="/images/Naisten_Linja.svg" alt="Siirry etusivulle" />
              </Link>
            </div>
            <ScrollToTop />
          </div>
          <div className="Footer_main_content">
            <div className="Footer_contacts">
              <div className="Footer_contact_box">
                {contacts && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: contacts.childMarkdownRemark.html,
                    }}
                  />
                )}
              </div>
              <div className="Footer_socials">
                <a aria-label="Avaa Naisten Linjan Facebook" href={facebook}>
                  <FaFacebook />
                </a>
                <a aria-label="Avaa Naisten Linjan Instagram" href={instagram}>
                  <FaInstagram />
                </a>
                <a aria-label="Avaa Naisten Linjan Threads" href={twitterX}>
                  <FaThreads />
                </a>
                <a aria-label="Avaa Naisten Linjan Linkedin" href={linkedIn}>
                  <FaLinkedin />
                </a>
                <a aria-label="Avaa Naisten Linjan Youtube" href={youtube}>
                  <FaYoutube />
                </a>
                <a aria-label="Avaa Naisten Linjan TikTok" href={tikTok}>
                  <FaTiktok />
                </a>
              </div>
            </div>
            <div className="Footer_links">
              <ul className="Footer_links_col">
                {linksGroupOne?.map((link) => {
                  return (
                    <li key={link.id}>
                      <Link to={'/' + link.slug}>{link.pageName}</Link>
                    </li>
                  );
                })}
              </ul>
              <ul className="Footer_links_col">
                {linksGroupTwo?.map((link) => {
                  return (
                    <li key={link.id}>
                      <Link to={'/' + link.slug}>{link.pageName}</Link>
                    </li>
                  );
                })}
              </ul>
              <ul className="Footer_links_col">
                {linksGroupThree?.map((link) => {
                  return (
                    <li key={link.id}>
                      {link?.__typename === 'ContentfulPages' ? (
                        <Link to={'/' + link.slug}>{link.pageName}</Link>
                      ) : (
                        <a href={link.url}>
                          {link.label}
                          <ExternalLinkIcon />
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <ul className="Footer_language_links">
            <li>
              <Link to={'/'}>FI</Link>
            </li>
            <span>|</span>
            <li>
              <Link to={'/pa-svenska'}>SV</Link>
            </li>
            <span>|</span>
            <li>
              <Link to={'/in-english'}>EN</Link>
            </li>
          </ul>
          <hr className="Footer_breakline" />
          <div className="Footer_bottom_section">
            <div>© {new Date().getFullYear()} Naisten Linja Suomessa ry</div>
            <ul className="Footer_bottom_links">
              {legals.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={'/' + link.slug}>{link.pageName}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
