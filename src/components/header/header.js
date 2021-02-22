// import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import './header.scss';
import Menu from '../menu/menu';

const Header = () => (
  <header>
    <Menu />
    <a className="escape-link-box" href="https://google.com">
      <span className="escape-link">Poistu sivuilta nopeasti</span>
    </a>
    <div className="flex-column">
      <Link className="logo-link" to="/">
        <img
          src="https://images.ctfassets.net/pbxhiiewat8h/3R7iRMIYcL0a2o8rWeQtgl/7bdfd19edfdc95c73cedff7c244f8edf/mustapyorealogo_2.svg"
          alt="Naisten Linja"
        />
      </Link>
      <h2>
        On the women's side.
        <br />
        Against violence.
      </h2>
    </div>
  </header>
);

export default Header;
