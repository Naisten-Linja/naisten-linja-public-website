import React from 'react';

import Header from './header/header';

import './layout.scss';
import './globals.scss';
import ContentfulFooter from './contentful/ContentfulFooter/ContentfulFooter';
import Hero from './ui/Hero/Hero';
import UpdateInfo from './ui/UpdateInfo/UpdateInfo';

const scrollToTop = () => {
  window ??
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
};

scrollToTop();

const Layout = ({ children, lang, scrollToTop, hero, updateInfo }) => {
  console.log('updateInfo:', updateInfo);

  return (
    <>
      <Header lang={lang} />
      <Hero {...hero} />
      {updateInfo?.showUpdateInfo && (
        <UpdateInfo updatedAt={updateInfo.updatedAt} />
      )}
      <main className="main-container" id="main">
        {children}
      </main>
      <ContentfulFooter />
    </>
  );
};

export default Layout;
