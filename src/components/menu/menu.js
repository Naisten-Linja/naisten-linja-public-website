import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './menu.scss';

const Menu = () => {
  const headerMenuData = useStaticQuery(query);

  const topLevelPages = headerMenuData.contentfulMainMenu.topLevelPages;

  return (
    <nav className="MainMenu">
      <div className="MainMenu__container">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon" role="img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 0 24 24"
              width="32"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="white"
                d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"
              />
            </svg>
          </span>
        </label>
        <ul className="menu">
          {topLevelPages.map((topLevelPage, i) => (
            <TopLevelMenuItem page={topLevelPage} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;

const TopLevelMenuItem = ({ page }) => {
  const [isActive, setIsActive] = useState(false);
  const activateSubMenu = () => setIsActive(true);

  return (
    <li
      onClick={activateSubMenu}
      className={[
        isActive ? 'active-submenu' : null,
        page.menuPageSubpages ? 'has-subpages' : null,
      ]
        .filter((x) => !!x)
        .join(' ')}
    >
      <Link
        activeClassName="active-link"
        to={page.menuPage.slug === 'etusivu' ? '/' : page.menuPage.slug}
      >
        {page.pageContainerName !== null
          ? page.pageContainerName
          : page.menuPage.pageName}
      </Link>
      <SubPageMenu page={page} isFirstLevel={true} />
    </li>
  );
};

const SubPageMenu = ({ page, isFirstLevel = false }) => {
  if (!page || !page.menuPageSubpages) {
    return null;
  }

  const subNav = (
    <ul>
      {page.menuPageSubpages.map((navigationPage, i) => (
        <SubPageLink key={i} page={navigationPage} />
      ))}
    </ul>
  );

  return isFirstLevel ? (
    <div className="MainMenu__submenu-container">{subNav}</div>
  ) : (
    subNav
  );
};

const SubPageLink = ({ page }) => {
  const [isActive, setIsActive] = useState(false);
  const activateSubMenu = () => setIsActive(true);
  return (
    <li
      onClick={activateSubMenu}
      className={[
        isActive ? 'active-submenu' : null,
        page.menuPageSubpages ? 'has-subpages' : null,
      ]
        .filter((x) => !!x)
        .join(' ')}
    >
      <Link to={page.menuPage.slug} activeClassName="active-link">
        {page.menuPage.pageName}
      </Link>
      <SubPageMenu page={page} />
    </li>
  );
};

const query = graphql`
  query MenuQuery {
    contentfulMainMenu(slug: { eq: "header-menu" }) {
      id
      slug
      mainMenuName
      topLevelPages {
        menuPage {
          pageName
          slug
        }
        pageContainerName
        menuPageSubpages {
          menuPage {
            pageName
            slug
          }
          pageContainerName
          menuPageSubpages {
            menuPage {
              pageName
              slug
            }
            menuPageSubpages {
              menuPage {
                pageName
                slug
              }
            }
          }
        }
      }
    }
  }
`;
