// import PropTypes from 'prop-types';
import React from 'react';
import './header.scss';
import Menu from '../menu/menu';

const Header = ({ lang }) => (
  <header>
    <Menu lang={lang} />
  </header>
);

export default Header;
