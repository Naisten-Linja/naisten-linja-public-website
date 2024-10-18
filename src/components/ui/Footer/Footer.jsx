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
import { FaXTwitter } from 'react-icons/fa6';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import Container from '../utils/Container/Container';

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
      <div className="Footer_layout">
        <div className="Footer_logos">
          <div className="Footer_naisten_linja_logo">
            <Link to="/">
              {' '}
              <img src="/images/Naisten_Linja.svg" alt="" />
            </Link>
          </div>
          <button className="Footer_scrolltotop">
            <BsArrowUpCircleFill />
          </button>
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
              <a href={facebook}>
                <FaFacebook />
              </a>
              <a href={instagram}>
                <FaInstagram />
              </a>
              <a href={twitterX}>
                <FaXTwitter />
              </a>
              <a href={linkedIn}>
                <FaLinkedin />
              </a>
              <a href={youtube}>
                <FaYoutube />
              </a>
              <a href={tikTok}>
                <FaTiktok />
              </a>
            </div>
          </div>
          <div className="Footer_links">
            <ul className="Footer_links_col">
              {linksGroupOne?.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={'/' + link.slug}>{link.pageName}</a>
                  </li>
                );
              })}
            </ul>
            <ul className="Footer_links_col">
              {linksGroupTwo?.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={'/' + link.slug}>{link.pageName}</a>
                  </li>
                );
              })}
            </ul>
            <ul className="Footer_links_col">
              {linksGroupThree?.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={'/' + link.slug}>{link.pageName}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="Footer_language_links">FI | EN</div>
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
    </footer>
  );
};

export default Footer;
