import { graphql } from 'gatsby';

export const ContentfulBlogPost = graphql`
fragment ContentfulBlogPostFragment on ContentfulBlogPost {
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
`;

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
        internal {
          type
        }
        id
        paragraphTitle
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
    }
  }
`;


