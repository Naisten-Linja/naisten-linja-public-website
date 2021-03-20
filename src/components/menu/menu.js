import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './menu.scss';

const Menu = () => {
  const headerMenuData = useStaticQuery(query);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const topLevelPages = headerMenuData.contentfulMainMenu.topLevelPages;

  return (
    <nav className="MainMenu">
      {isOpen ? (
        <button
          className="MainMenu__mobile-close-button"
          onClick={toggleMobileMenu}
        >
          <svg
            height="329pt"
            viewBox="0 0 329.26933 329"
            width="329pt"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Close mobile menu"
          >
            <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
          </svg>
        </button>
      ) : (
        <button
          className="MainMenu__mobile-open-button"
          type="checkbox"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 0 24 24"
            width="32"
            aria-label="Open mobile main menu"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="white"
              d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"
            />
          </svg>
        </button>
      )}
      <ul className={`menu${isOpen ? ' mobile-active' : ''}`}>
        {topLevelPages.map((topLevelPage, i) => (
          <TopLevelMenuItem page={topLevelPage} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;

const TopLevelMenuItem = ({ page }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleSubmenu = (e) => {
    e.stopPropagation();
    setIsActive(!isActive);
  };
  const itemName = page.pageContainerName
    ? page.pageContainerName
    : page.menuPage.pageName;
  return (
    <li
      onClick={toggleSubmenu}
      className={[
        isActive ? 'active-submenu' : null,
        page.menuPageSubpages ? 'has-subpages' : null,
      ]
        .filter((x) => !!x)
        .join(' ')}
    >
      {page.linkToExternalUrl ? (
        <a href={page.linkToExternalUrl}>{itemName}</a>
      ) : (
        <Link activeClassName="active-link" to={page.menuPage.slug}>
          {itemName}
        </Link>
      )}
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
  const toggleSubmenu = (e) => {
    e.stopPropagation();
    setIsActive(!isActive);
  };
  const itemName = page.pageContainerName
    ? page.pageContainerName
    : page.menuPage.pageName;

  return (
    <li
      onClick={toggleSubmenu}
      className={[
        isActive ? 'active-submenu' : null,
        page.menuPageSubpages ? 'has-subpages' : null,
      ]
        .filter((x) => !!x)
        .join(' ')}
    >
      {page.linkToExternalUrl ? (
        <a href={page.linkToExternalUrl}>{itemName}</a>
      ) : (
        <Link to={page.menuPage.slug} activeClassName="active-link">
          {itemName}
        </Link>
      )}
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
        linkToExternalUrl
        menuPage {
          pageName
          slug
        }
        pageContainerName
        menuPageSubpages {
          linkToExternalUrl
          menuPage {
            pageName
            slug
          }
          pageContainerName
          menuPageSubpages {
            linkToExternalUrl
            menuPage {
              pageName
              slug
            }
            menuPageSubpages {
              linkToExternalUrl
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
