import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './menu.scss';

const Menu = () => {
  const headerMenuData = useStaticQuery(graphql`
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
  `);

  const topLevelPages = headerMenuData.contentfulMainMenu.topLevelPages;

  return (
    <nav className="MainMenu">
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon" role="img">
          🍔
        </span>
      </label>
      <ul className="menu">
        {topLevelPages.map((topLevelPage, i) => (
          <li key={i}>
            <Link
              to={
                topLevelPage.menuPage.slug === 'etusivu'
                  ? '/'
                  : topLevelPage.menuPage.slug
              }
            >
              {topLevelPage.pageContainerName !== null
                ? topLevelPage.pageContainerName
                : topLevelPage.menuPage.pageName}
            </Link>
            {topLevelPage.menuPageSubpages !== null && (
              <ul>
                {topLevelPage.menuPageSubpages.map((firstNavigationPage, i) => (
                  <li key={i}>
                    <Link to={firstNavigationPage.menuPage.slug}>
                      {firstNavigationPage.pageContainerName !== null
                        ? firstNavigationPage.pageContainerName
                        : firstNavigationPage.menuPage.pageName}
                    </Link>
                    {firstNavigationPage.menuPageSubpages !== null && (
                      <ul>
                        {firstNavigationPage.menuPageSubpages.map(
                          (secondNavigationPage, i) => (
                            <li key={i}>
                              <Link to={secondNavigationPage.menuPage.slug}>
                                {secondNavigationPage.menuPage.pageName}
                              </Link>
                            </li>
                          ),
                        )}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
