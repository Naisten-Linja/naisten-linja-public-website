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
            id
            paragraphTitle
            paragraphText {
              childMarkdownRemark {
                html
              }
              paragraphText
            }
            paragraphColumns
            sideImagePosition
            sideImage {
              file {
                url
              }
              title
            }
          }
          ... on ContentfulQuote {
            internal {
              type
            }
            id
            quoteAuthor
            quoteText {
              quoteText
              childMarkdownRemark {
                html
              }
            }
          }
          ... on ContentfulReadMore {
            internal {
              type
            }
            id
            readMoreContent {
              readMoreContent
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  }
`;
