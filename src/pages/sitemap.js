import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { parseNavigationStructure } from '../navigation-helpers';
import SitemapList from '../components/sitemap/sitemap-list';

const SitemapPage = ({ data }) => {
  const parsedNavData = parseNavigationStructure(
    data.contentfulMainMenu.topLevelPages,
  );
  return (
    <Layout>
      <SEO title="Sivukartta" lang="fi" />
      <section className="full-width-content">
        <div className="Paragraph layout-container">
          <h2>
            <strong>Sivukartta</strong>
          </h2>
          <SitemapList pages={parsedNavData} isTopLevel={true} />
        </div>
      </section>
    </Layout>
  );
};

export default SitemapPage;

export const pageQuery = graphql`
  query MenuPageQuery {
    contentfulMainMenu(slug: { eq: "header-menu" }) {
      id
      slug
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
