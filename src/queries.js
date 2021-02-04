import { graphql } from 'gatsby';

export const ContenfulPage = graphql`
  fragment ContentfulPageFragment on ContentfulPages {
    slug
    pageName
    pageContentBackgroundColor
    pageContent {
      __typename
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
        textColor
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
`;
