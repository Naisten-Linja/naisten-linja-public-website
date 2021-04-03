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
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import './layout.scss';
import './globals.scss';
import './cookieBanner.scss';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51HcTSZIlFmfjuTJdc1LqP1HwrXGmDrHnvgpn8z7IGeul9XwvLf7S48yUqtxEE9xInitQZnVO5O0Zp3oh5rIESkaK00P1xuk6se',
);

const Layout = ({ children }) => {
  return (
    <Elements stripe={stripePromise}>
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
        styles={{
          dialog: {
            backgroundColor: '#d2edeb',
            position: 'fixed',
            width: '100%',
            zIndex: 9999,
            left: 0,
            top: 0,
          },
          container: {
            padding: '0 0.5rem 2rem 0.5rem',
            margin: '0 auto',
            position: 'relative',
          },
          selectPane: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
          },
          message: {
            fontSize: '1rem',
            color: '#2e303a',
            padding: '1rem 0',
          },
          optionWrapper: {
            margin: '0 2rem 1rem 0',
          },
          optionLabel: {
            color: '#9496a0',
            fontSize: '1rem',
            cursor: 'pointer',
          },
          checkbox: {
            visibility: 'hidden',
            position: 'absolute',
          },
          buttonWrapper: {
            position: 'absolute',
            zIndex: 9999,
            right: '0.5rem',
            bottom: '1.5rem',
            cursor: 'pointer',
          },
          button: {
            height: '40px',
            background: '#71beb9',
            color: '#363842',
            diplay: 'flex',
            padding: '0 2rem',
            borderRadius: '20px',
            alignItems: 'center',
            border: 'none',
            cursor: 'pointer',
          },
          policy: {
            margin: '1rem 0 0 0',
            float: 'none',
            display: 'block',
            color: '#363842',
          },
        }}
      />
      <Header />
      <main className="main-container" id="main">
        {children}
      </main>
      <Footer />
    </Elements>
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout;
