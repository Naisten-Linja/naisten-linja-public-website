import React from 'react';

import Header from './header/header';
import Footer from './ui/Footer/Footer';
// import Footer from './footer/footer';

import './layout.scss';
import './globals.scss';

const Layout = ({ children, lang }) => {
  return (
    <>
      <Header lang={lang} />
      <main className="main-container" id="main">
        {children}
      </main>
      {/* <Footer /> */}
      <Footer />
    </>
  );
};

export default Layout;
