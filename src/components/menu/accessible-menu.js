import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './menu.scss';

const AccessibleMenu = () => {
  const headerMenuData = useStaticQuery(query);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleFocusing = (nextItem) => {
    setActiveIndex(nextItem);
    document.getElementById(`top-level-item-${nextItem}`).focus();
  };

  const handleEsc = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    } else if (event.key === 'ArrowRight') {
      const nextItem =
        activeIndex === topLevelPages.length - 1 ? 0 : activeIndex + 1;
      handleFocusing(nextItem);
    } else if (event.key === 'ArrowLeft') {
      const nextItem =
        activeIndex === 0 ? topLevelPages.length - 1 : activeIndex - 1;
      handleFocusing(nextItem);
    }
  };

  const topLevelPages = headerMenuData.contentfulMainMenu.topLevelPages;

  return (
    <nav
      className="MainMenu"
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
        role="menubar"
        aria-label="Naisten Linja Menu"
        className={`menu${isOpen ? ' mobile-active' : ''}`}
      >
        {topLevelPages.map((topLevelPage, i) => (
          <MenuItem
            key={topLevelPage.id}
            page={topLevelPage}
            index={i}
            activeIndex={activeIndex}
          />
        ))}
      </ul>
    </nav>
  );
};

export default AccessibleMenu;

const MenuItem = ({ page, index, activeIndex }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSubMenuItem, setActiveSubMenuItem] = useState(0);
  const itemName = page.pageContainerName
    ? page.pageContainerName
    : page.menuPage.pageName;

  const handleExpanded = async () => {
    const changedValue = !isExpanded;
    await setIsExpanded(changedValue);

    if (changedValue) {
      /**
       * Moves focus to the first value in opened submenu
       */
      const firstElement = document.getElementById('sub-menu-item-0');
      firstElement && firstElement.focus();
    }
  };

  const handleFocusing = (nextItem) => {
    setActiveSubMenuItem(nextItem);
    document.getElementById(`sub-menu-item-${nextItem}`).focus();
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Escape') {
      setIsExpanded(false);
      document.getElementById(`top-level-item-${index}`).focus();
    } else if (event.key === 'ArrowDown' && page.menuPageSubpages) {
      if (!isExpanded) {
        handleExpanded();
      } else {
        const nextItem =
          activeSubMenuItem === page.menuPageSubpages.length - 1
            ? 0
            : activeSubMenuItem + 1;
        handleFocusing(nextItem);
      }
    } else if (event.key === 'ArrowUp' && page.menuPageSubpages) {
      const nextItem =
        activeSubMenuItem === 0
          ? page.menuPageSubpages.length - 1
          : activeSubMenuItem - 1;
      handleFocusing(nextItem);
    }
  };

  const handleKeyDown = (event) => {
    /**
     * This event listener is here to prevent scrolling of the page, when focus is on a menuitem, which has subpages
     */
    if (
      (event.key === 'ArrowDown' || event.key === 'ArrowUp') &&
      page.menuPageSubpages
    ) {
      event.preventDefault();
    }
  };

  const handleMouseEnter = () => {
    if (!isExpanded && page.menuPageSubpages) {
      setIsExpanded(true);
    }
  };

  const handleMouseExit = () => {
    if (isExpanded && page.menuPageSubpages) {
      setIsExpanded(false);
    }
  };

  return (
    <li
      role="none"
      className={isExpanded ? 'is-expanded' : ''}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
    >
      {page.menuPageSubpages ? (
        <button
          role="menuitem"
          tabIndex={index === activeIndex ? '0' : '-1'}
          aria-expanded={isExpanded}
          onClick={handleExpanded}
          className="top-level-button"
          id={`top-level-item-${index}`}
        >
          {itemName}
        </button>
      ) : page.linkToExternalUrl ? (
        <a
          role="menuitem"
          tabIndex={index === activeIndex ? '0' : '-1'}
          href={page.linkToExternalUrl}
          id={`top-level-item-${index}`}
        >
          {itemName}
        </a>
      ) : (
        <Link
          role="menuitem"
          tabIndex={index === activeIndex ? '0' : '-1'}
          to={`/${page.menuPage.slug}`}
          activeClassName="active-link"
          id={`top-level-item-${index}`}
        >
          {itemName}
        </Link>
      )}
      {page.menuPageSubpages && isExpanded && (
        <SubMenu
          page={page}
          itemName={itemName}
          activeSubMenuItem={activeSubMenuItem}
          setActiveSubMenuItem={setActiveSubMenuItem}
        />
      )}
    </li>
  );
};

const SubMenu = ({ page, itemName }) => {
  return (
    <div className="MainMenu__submenu-container">
      <ul role="menu" aria-label={itemName} className="submenu">
        {page.menuPageSubpages.map((subPage, i) => (
          <li key={subPage.id} role="none">
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
      {page.menuPageSubpages.map((item) => (
        <li key={item.id}>
          <MenuLink page={item} />
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
    <a
      href={page.linkToExternalUrl}
      className={className}
      tabIndex="-1"
      id={id}
    >
      {itemName}
    </a>
  ) : (
    <Link
      role="menuitem"
      to={`/${page.menuPage.slug}`}
      activeClassName="active-link"
      className={className}
      tabIndex="-1"
      id={id}
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
