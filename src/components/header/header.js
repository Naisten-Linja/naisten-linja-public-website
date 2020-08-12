// import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React from 'react';
import './header.scss';
import Menu from '../menu/menu';

const Header = () => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div>
        <nav>
          <Menu />
        </nav>
      </div>
      <h1>Naisten Linja</h1>
      <div>escape div</div>
    </div>
  </header>
);

export default Header;
