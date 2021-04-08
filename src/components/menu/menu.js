import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './menu.scss';

const Menu = () => {
  const headerMenuData = useStaticQuery(query);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleFocusing = (nextItem) => {
    setActiveItem(nextItem);
    document.getElementById(`top-level-item-${nextItem}`).focus();
  };

  const handleEsc = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    } else if (event.key === 'ArrowRight') {
      const nextItem =
        activeItem === topLevelPages.length - 1 ? 0 : activeItem + 1;
      handleFocusing(nextItem);
    } else if (event.key === 'ArrowLeft') {
      const nextItem =
        activeItem === 0 ? topLevelPages.length - 1 : activeItem - 1;
      handleFocusing(nextItem);
    }
  };

  const topLevelPages = headerMenuData.contentfulMainMenu.topLevelPages;

  return (
    <nav
      className={`MainMenu ${isOpen ? 'mobile-menu-open' : ''}`}
      aria-label="Naisten Linja Menu"
      onKeyUp={handleEsc}
    >
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
        aria-label="Naisten Linja Menu"
        className={`menu${isOpen ? ' mobile-active' : ''}`}
      >
        {topLevelPages.map((topLevelPage, i) => (
          <MenuItem
            key={topLevelPage.id}
            page={topLevelPage}
            index={i}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;

const MenuItem = ({ page, index, activeItem, setActiveItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const itemName = page.pageContainerName
    ? page.pageContainerName
    : page.menuPage.pageName;
  const handleExpanded = async () => {
    const changedValue = !isExpanded;
    await setIsExpanded(changedValue);

    if (changedValue) {
      setActiveItem(index);
    }
  };

  const handleEsc = (event) => {
    if (event.key === 'Escape') {
      setIsExpanded(false);
    }
  };

  const handleMouseEnter = () => {
    if (!isExpanded && page.menuPageSubpages) {
      setIsExpanded(true);
      setActiveItem(index);
    }
  };

  const handleMouseExit = () => {
    if (isExpanded && page.menuPageSubpages) {
      setIsExpanded(false);
    }
  };
  const shouldExpand = isExpanded && activeItem === index;
  return (
    <li
      className={shouldExpand ? 'is-expanded' : ''}
      onMouseLeave={handleMouseExit}
      onMouseEnter={handleMouseEnter}
      onKeyUp={handleEsc}
    >
      {page.menuPageSubpages ? (
        <button
          aria-expanded={isExpanded}
          onClick={handleExpanded}
          className="top-level-button"
          id={`top-level-item-${index}`}
        >
          {itemName}
        </button>
      ) : page.linkToExternalUrl ? (
        <a href={page.linkToExternalUrl} id={`top-level-item-${index}`}>
          {itemName}
        </a>
      ) : (
        <Link
          to={`/${page.menuPage.slug}`}
          activeClassName="active-link"
          id={`top-level-item-${index}`}
        >
          {itemName}
        </Link>
      )}
      {page.menuPageSubpages && shouldExpand && (
        <SubMenu page={page} itemName={itemName} />
      )}
    </li>
  );
};

const SubMenu = ({ page, itemName }) => {
  return (
    <div className="MainMenu__submenu-container">
      <ul aria-label={itemName} className="submenu">
        {page.menuPageSubpages.map((subPage, i) => (
          <li key={subPage.id}>
            <MenuLink
              page={subPage}
              className="top-level-item"
              id={`sub-menu-item-${i}`}
            />
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
      {page.menuPageSubpages.map((item, i) => (
        <li key={item.id}>
          <MenuLink page={item} id={`sub-page-item-${i}`} />
        </li>
      ))}
    </ul>
  );
};

const MenuLink = ({ page, className, id }) => {
  const itemName = page.pageContainerName
    ? page.pageContainerName
    : page.menuPage.pageName;

  return page.linkToExternalUrl ? (
    <a href={page.linkToExternalUrl} className={className} id={id}>
      {itemName}
    </a>
  ) : (
    <Link
      to={`/${page.menuPage.slug}`}
      activeClassName="active-link"
      className={className}
      id={id}
    >
      {itemName}
    </Link>
  );
};

const query = graphql`
  query MenuQuery {
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
