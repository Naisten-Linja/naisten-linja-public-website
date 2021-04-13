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
          description
          file {
            url
          }
          title
        }
        paragraphBackgroundStyle
        backgroundStyle
        backgroundColor
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
          description
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
      ... on ContentfulDonationForm {
        internal {
          type
        }
        title
        description {
          childMarkdownRemark {
            html
          }
          description
        }
      }
      ... on ContentfulOpenLetterForm {
        internal {
          type
        }
        title
        description {
          childMarkdownRemark {
            html
          }
          description
        }
        defaultLanguage
      }
      ... on ContentfulExternalForm {
        internal {
          type
        }
        formUrl
        openInNewTab
        linkText
      }
      ... on ContentfulContentBoxGroup {
        title
        internal {
          type
        }
        backgroundStyle
        backgroundColor
        contentBoxes {
          __typename
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
            textColor
            backgroundColor
            linkToInternalPage {
              slug
            }
            linkToCustomUrl
          }
          ... on ContentfulServiceBox {
            internal {
              type
            }
            serviceIcon {
              file {
                url
              }
            }
            serviceName
            serviceInformation
            textColor
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
`;
