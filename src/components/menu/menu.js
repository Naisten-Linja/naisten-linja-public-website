import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './menu.scss';
import { useIsMobile } from '../../hooks/useIsMobile';
import HamburgerIcon from './icons/hamburger';
import CrossIcon from './icons/cross';
import MenuItem from './menu-item';
import MenuLanguage from './menu-language';

const languages = [
  {
    abv: 'FI',
    label: 'Suomeksi (FI)',
    value: 'fi',
    link: '/etusivu',
  },
  {
    abv: 'SV',
    label: 'På svenska (SV)',
    value: 'sv',
    link: '/pa-svenska',
  },
  {
    abv: 'EN',
    label: 'In English (EN)',
    value: 'en',
    link: '/in-english',
  },
];

const Menu = ({lang}) => {
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
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
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
        <MenuLanguage
          language={lang || 'fi'}
          languages={languages}
          index={99}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </ul>
    </nav>
  );
};

export default Menu;

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
