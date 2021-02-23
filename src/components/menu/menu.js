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
            <li key={i}>
              <Link
                activeClassName="active-link"
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
                <div className="MainMenu__submenu-container">
                  <ul>
                    {topLevelPage.menuPageSubpages.map(
                      (firstNavigationPage, i) => (
                        <li key={i}>
                          <Link
                            to={firstNavigationPage.menuPage.slug}
                            activeClassName="active-link"
                          >
                            {firstNavigationPage.pageContainerName !== null
                              ? firstNavigationPage.pageContainerName
                              : firstNavigationPage.menuPage.pageName}
                          </Link>
                          {firstNavigationPage.menuPageSubpages !== null && (
                            <ul>
                              {firstNavigationPage.menuPageSubpages.map(
                                (secondNavigationPage, i) => (
                                  <li key={i}>
                                    <Link
                                      to={secondNavigationPage.menuPage.slug}
                                      activeClassName="active-link"
                                    >
                                      {secondNavigationPage.menuPage.pageName}
                                    </Link>
                                    {secondNavigationPage.menuPageSubpages !==
                                      null && (
                                      <ul>
                                        {secondNavigationPage.menuPageSubpages.map(
                                          (thirdNavigationPage, i) => (
                                            <li key={i}>
                                              <Link
                                                activeClassName="active-link"
                                                to={
                                                  thirdNavigationPage.menuPage
                                                    .slug
                                                }
                                              >
                                                {
                                                  thirdNavigationPage.menuPage
                                                    .pageName
                                                }
                                              </Link>
                                            </li>
                                          ),
                                        )}
                                      </ul>
                                    )}
                                  </li>
                                ),
                              )}
                            </ul>
                          )}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
