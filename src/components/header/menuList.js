import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const MenuList = () => {
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
    <nav>
      <ul>
        {topLevelPages.map((topLevelPage) => (
          <li>
            <Link to={topLevelPage.menuPage.slug}>
              {topLevelPage.pageContainerName !== null
                ? topLevelPage.pageContainerName
                : topLevelPage.menuPage.pageName}
            </Link>
            {topLevelPage.menuPageSubpages !== null && (
              <ul>
                {topLevelPage.menuPageSubpages.map((firstNavigationPage) => (
                  <li>
                    <Link to={firstNavigationPage.menuPage.slug}>
                      {firstNavigationPage.pageContainerName !== null
                        ? firstNavigationPage.pageContainerName
                        : firstNavigationPage.menuPage.pageName}
                    </Link>
                    {firstNavigationPage.menuPageSubpages !== null && (
                      <ul>
                        {firstNavigationPage.menuPageSubpages.map(
                          (secondNavigationPage) => (
                            <li>
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

export default MenuList;

// export const menuQuery = graphql`
//   query {
//     contentfulMainMenu(slug: { eq: "header-menu" }) {
//       id
//       slug
//       mainMenuName
//       topLevelPages {
//         menuPage {
//           pageName
//           slug
//         }
//         pageContainerName
//         menuPageSubpages {
//           menuPage {
//             pageName
//             slug
//           }
//           pageContainerName
//           menuPageSubpages {
//             menuPage {
//               pageName
//               slug
//             }
//             menuPageSubpages {
//               menuPage {
//                 pageName
//                 slug
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
