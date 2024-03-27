import React from 'react';

import Header from './header/header';
import Footer from './footer/footer';

//import { CookieBanner } from './cookieBanner/cookieBanner';

import './layout.scss';
import './globals.scss';

const Layout = ({ children, lang }) => {
  return (
    <>
      {/*<CookieBanner />*/}
      <Header lang={lang} />
      <main className="main-container" id="main">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
