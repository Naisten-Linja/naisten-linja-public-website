import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ContentfulComponents from '../components/contentful/contentfulComponents';

const PageTemplate = ({ data }) => {
  const { pageName } = data.contentfulPages;

  return (
    <Layout>
      <SEO title={pageName} />
      <ContentfulComponents
        pageContent={data.contentfulPages.pageContent}
      ></ContentfulComponents>
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPages(slug: { eq: $slug }) {
      slug
      pageName
      pageContent {
        __typename
        ... on Node {
          ... on ContentfulParagraph {
            internal {
              type
            }
            paragraphTitle
            paragraphText {
              paragraphText
              childMarkdownRemark {
                html
              }
            }
            paragraphColumns
          }
        }
      }
    }
  }
`;
