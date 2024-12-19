import React from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import './ScrollToTop.scss';

function ScrollToTop() {
  function scrollToTop() {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }

  return (
    <button
      className="ScrollToTop"
      label="Mene sivun alkuun"
      onClick={scrollToTop}
    >
      <BsArrowUpCircleFill />
    </button>
  );
}

export default ScrollToTop;
