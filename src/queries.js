import { graphql } from 'gatsby';

export const ContenfulPage = graphql`
  fragment ContentfulPageFragment on ContentfulPages {
    slug
    pageName
    pageLanguage
    seoTitle
    seoDescription
    ogImage {
      file {
        url
      }
      title
    }
    pageContentBackgroundColor
    pageContent {
      __typename
      ... on ContentfulParagraph {
        title
        background
        internal {
          type
        }
        id
        contentNew {
          raw
        }
        paragraphTitle
        contentText {
          childMarkdownRemark {
            html
          }
        }
        paragraphText {
          paragraphText
          childMarkdownRemark {
            html
          }
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
      ... on ContentfulOpenLetterForm {
        internal {
          type
        }
        title
        showSendLetterButton
        description {
          childMarkdownRemark {
            html
          }
          description
        }
        defaultLanguage
        contentAfterReceivingReply {
          raw
          references {
            ... on ContentfulGoogleFormsIframe {
              internal {
                type
              }
              contentful_id
              embedHtml
            }
          }
        }
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
        ingress {
          childMarkdownRemark {
            html
          }
        }
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
              raw
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
      ... on ContentfulServiceBoxGroup {
        title
        ingress {
          childMarkdownRemark {
            html
          }
        }
        internal {
          type
        }
        services {
          __typename
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
      ... on ContentfulGoogleFormsIframe {
        internal {
          type
        }
        contentful_id
        embedHtml
      }
      ... on ContentfulBlogPost {
        internal {
          type
        }
        blogPostTitle
        blogPostLanguage
        slug
        blogPostDate
        blogPostDescription
        coverImage {
          file {
            url
            fileName
          }
          title
        }
        blogPostContent {
          raw
          references {
            __typename
            ... on ContentfulAsset {
              id
              contentful_id
              file {
                url
                fileName
                details {
                  image {
                    height
                    width
                  }
                }
              }
              title
            }
            ... on ContentfulVideo {
              internal {
                type
              }
              contentful_id
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
          }
        }
        blogPostBackgroundStyle
        blogPostBackgroundColor
        blogPostTextColor
      }
      ... on ContentfulPagePreviewGrid {
        internal {
          type
        }
        page {
          ... on ContentfulPages {
            slug
            pageName
            seoTitle
            seoDescription
            ogImage {
              file {
                url
              }
              title
            }
          }
        }
      }
      ... on ContentfulPersonIntroductionGrid {
        internal {
          type
        }
        personIntroductions {
          ... on ContentfulPersonIntroduction {
            personName
            title
            phone
            email
            personIntroduction {
              childMarkdownRemark {
                html
              }
            }
            personPicture {
              file {
                url
              }
            }
          }
        }
      }
    }
  }
`;
