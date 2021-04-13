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
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { CookieBanner } from './cookieBanner/cookieBanner';
import { STRIPE_PUBLIC_KEY } from '../constants';

import './layout.scss';
import './globals.scss';
import { Link } from 'gatsby';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

const Layout = ({ children }) => {
  return (
    <Elements stripe={stripePromise}>
      <Header />
      <main className="main-container" id="main">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </Elements>
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout;
