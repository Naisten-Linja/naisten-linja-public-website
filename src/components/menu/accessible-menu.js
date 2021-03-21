import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './menu.scss';

const AccessibleMenu = () => {
  const headerMenuData = useStaticQuery(query);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const topLevelPages = headerMenuData.contentfulMainMenu.topLevelPages;

  return (
    <nav className="MainMenu" aria-label="Naisten Linja Menu">
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
      <ul
        id="menubar"
        role="menubar"
        aria-label="Naisten Linja Menu"
        className={`menu${isOpen ? ' mobile-active' : ''}`}
      >
        {topLevelPages.map((topLevelPage) => (
          <MenuItem key={topLevelPage.id} page={topLevelPage} />
        ))}
      </ul>
    </nav>
  );
};

export default AccessibleMenu;

const MenuItem = ({ page }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const itemName = page.pageContainerName
    ? page.pageContainerName
    : page.menuPage.pageName;

  const handleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleBlur = () => {
    setIsExpanded(false);
  };

  return (
    <li role="none" className={isExpanded ? 'is-expanded' : ''}>
      {page.menuPageSubpages ? (
        <button
          role="menuitem"
          tabIndex="0"
          aria-expanded={isExpanded}
          onClick={handleExpanded}
          className="top-level-button"
        >
          {itemName}
        </button>
      ) : page.linkToExternalUrl ? (
        <a role="menuitem" tabIndex="0" href={page.linkToExternalUrl}>
          {itemName}
        </a>
      ) : (
        <Link
          role="menuitem"
          tabIndex="0"
          to={`/${page.menuPage.slug}`}
          activeClassName="active-link"
        >
          {itemName}
        </Link>
      )}
      {page.menuPageSubpages && isExpanded && (
        <SubMenu page={page} itemName={itemName} />
      )}
    </li>
  );
};

const SubMenu = ({ page, itemName }) => {
  return (
    <div className="MainMenu__submenu-container">
      <ul role="menu" aria-label={itemName} className="submenu">
        {page.menuPageSubpages.map((subPage) => (
          <li key={subPage.id} role="none">
            <MenuLink page={subPage} className="top-level-item" />
            {subPage.menuPageSubpages && <SubMenuItems page={subPage} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SubMenuItems = ({ page }) => {
  return (
    <ul>
      {page.menuPageSubpages.map((item) => (
        <li key={item.id}>
          <MenuLink page={item} />
        </li>
      ))}
    </ul>
  );
};

const MenuLink = ({ page, className }) => {
  const itemName = page.pageContainerName
    ? page.pageContainerName
    : page.menuPage.pageName;

  return page.linkToExternalUrl ? (
    <a href={page.linkToExternalUrl} className={className}>
      {itemName}
    </a>
  ) : (
    <Link
      role="menuitem"
      tabIndex="-1"
      to={`/${page.menuPage.slug}`}
      activeClassName="active-link"
      className={className}
    >
      {itemName}
    </Link>
  );
};

const query = graphql`
  query AccessibleMenuQuery {
    contentfulMainMenu(slug: { eq: "header-menu" }) {
      id
      slug
      mainMenuName
      topLevelPages {
        id
        linkToExternalUrl
        menuPage {
          pageName
          slug
        }
        pageContainerName
        menuPageSubpages {
          id
          linkToExternalUrl
          menuPage {
            pageName
            slug
            id
          }
          pageContainerName
          menuPageSubpages {
            linkToExternalUrl
            menuPageSubpages {
              linkToExternalUrl
              menuPage {
                pageName
                slug
              }
              id
            }
            id
            menuPage {
              pageName
              slug
              id
            }
          }
        }
      }
    }
  }
`;
