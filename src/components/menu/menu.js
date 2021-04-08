import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './menu.scss';
import { useIsMobile } from '../../hooks/useIsMobile';
import HamburgerIcon from './icons/hamburger';
import CrossIcon from './icons/cross';
import ArrowIcon from './icons/arrow';

const Menu = () => {
  const headerMenuData = useStaticQuery(query);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const isMobile = useIsMobile();

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleFocusing = (nextItem) => {
    setActiveItem(nextItem);
    document.getElementById(`top-level-item-${nextItem}`).focus();
  };

  const handleEsc = async (event) => {
    if (event.key === 'Escape') {
      await setIsOpen(false);
      if (isMobile) {
        document.getElementById('mobile-open-button').focus();
      } else {
        document.getElementById(`top-level-item-${activeItem}`).focus();
      }
      // If not, focus to the active item
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
          <CrossIcon />
        </button>
      ) : (
        <button
          className="MainMenu__mobile-open-button"
          id="mobile-open-button"
          onClick={toggleMobileMenu}
        >
          <HamburgerIcon />
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

  const isMobile = useIsMobile();
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
          {isMobile && (
            <ArrowIcon ariaLabel="Avaa valikko" rotate={isExpanded} />
          )}
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
