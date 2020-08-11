// import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React from 'react';
import MenuList from './menuList';

const Header = () => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div>
        <nav>
          <MenuList />
        </nav>
      </div>
      <h1>Naisten Linja</h1>
      <div>escape div</div>
    </div>
  </header>
);

export default Header;
