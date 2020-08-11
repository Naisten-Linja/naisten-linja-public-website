import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ContentfulComponents from '../components/contentful/contentfulComponents';

const IndexPage = ({ data }) => {
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

export default IndexPage;

export const pageQuery = graphql`
  query {
    contentfulPages(slug: { eq: "etusivu" }) {
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
