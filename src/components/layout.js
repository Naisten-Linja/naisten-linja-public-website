/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';

import Header from './header/header';
import Footer from './footer/footer';
import { Cookies } from 'react-cookie-consent';
import { CookieBanner } from '@palmabit/react-cookie-law';

import './layout.scss';

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      {/* <CookieConsent
        location="bottom"
        buttonText="Allow cookies"
        cookieName="acceptedCookies"
        style={{ background: '#2B373B' }}
        buttonStyle={{ backgroundColor: '#FFC4C8;' }}
        expires={150}
        onAccept={() => {
          Cookies.set('gatsby-gdpr-google-analytics', true);
          Cookies.set('gatsby-gdpr-google-tagmanager', true);
          Cookies.set('gatsby-gdpr-facebook-pixel', true);
        }}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent> */}
      <CookieBanner
        message="Cookie banner message"
        wholeDomain={true}
        onAccept={() => {}}
        onAcceptPreferences={() => {}}
        onAcceptStatistics={() => {
          Cookies.set('gatsby-gdpr-google-analytics', true);
          Cookies.set('gatsby-gdpr-facebook-pixel', true);
        }}
        onAcceptMarketing={() => {
          Cookies.set('gatsby-gdpr-google-tagmanager', true);
        }}
      />
      <Header />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout;
