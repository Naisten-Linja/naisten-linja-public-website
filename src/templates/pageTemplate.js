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
      pageContentBackgroundColor
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
            paragraphBackgroundStyle
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
          ... on ContentfulVideo {
            internal {
              type
            }
            id
            videoTitle
            videoUrl
            videoTopDescription {
              videoTopDescription
              childMarkdownRemark {
                html
              }
            }
            videoBottomDescription {
              videoBottomDescription
              childMarkdownRemark {
                html
              }
            }
          }
          ... on ContentfulFullWidthImage {
            internal {
              type
            }
            imageTitle
            showTitle
            image {
              file {
                url
              }
            }
          }
          ... on ContentfulPersonIntroduction {
            internal {
              type
            }
            personName
            personPicture {
              file {
                url
              }
            }
            personIntroduction {
              personIntroduction
              childMarkdownRemark {
                html
              }
            }
          }
          ... on ContentfulForm {
            internal {
              type
            }
            formName
          }
          ... on ContentfulContentBoxGroup {
            title
            internal {
              type
            }
            backgroundStyle {
              internal {
                type
              }
              value
            }
            backgroundColor {
              internal {
                type
              }
              value
            }
            contentBoxes {
              ... on Node {
                ... on ContentfulContentBox {
                  internal {
                    type
                  }
                  title
                  content {
                    childContentfulRichText {
                      html
                    }
                  }
                  backgroundColor
                  linkToInternalPage {
                    slug
                  }
                  linkToCustomUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;
