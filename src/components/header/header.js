// import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import './header.scss';
import Menu from '../menu/menu';

const Header = () => (
  <header>
    <div className="layout-container">
      <div className="row menu-row align-space-between">
        <nav className="col">
          <Menu />
        </nav>
        <div className="col">
          {/* in future there's gonna be the language switch here */}
        </div>
        <div className="col">
          <a className="escape-link-box" href="https://google.com">
            <span className="escape-link">Poistu sivuilta nopeasti</span>
          </a>
        </div>
      </div>
      <div className="flex-column">
        <Link className="logo-link" to="/">
          <img
            src="https://images.ctfassets.net/pbxhiiewat8h/7ygcbBnXAQJgnBQq1oPxpf/ccf6579f53f5a0db0e910cd6475f4aa9/naisten_linja.png"
            alt="Naisten Linja"
          />
        </Link>
        <h2>
          On the women's side.
          <br />
          Against violence.
        </h2>
        <img
          className="nl-girls"
          src="https://images.ctfassets.net/pbxhiiewat8h/18L7UKbT0GCjAPGid7oWxz/d0a198688eccc8a48b16ef0d7107fce6/naistenlinja_header.png"
          alt="Naisten Linja Tytöt"
          aria-hidden="true"
        />
      </div>
    </div>
  </header>
);

export default Header;
