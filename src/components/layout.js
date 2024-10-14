import React from 'react';

import Header from './header/header';
import Footer from './ui/Footer/Footer';
// import Footer from './footer/footer';

import './layout.scss';
import './globals.scss';
import ContentfulFooter from './contentful/ContentfulFooter/ContentfulFooter';

const scrollToTop = () => {
  window ??
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
};

scrollToTop();

const Layout = ({ children, lang, scrollToTop }) => {
  return (
    <>
      <Header lang={lang} />
      <main className="main-container" id="main">
        {children}
      </main>
      {/* <Footer /> */}
      {/* <Footer /> */}
      <button onClick={() => scrollToTop()}>scrollToTop</button>
      <ContentfulFooter onClick={() => scrollToTop} />
    </>
  );
};

export default Layout;
