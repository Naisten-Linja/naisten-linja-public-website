import { graphql } from 'gatsby';

export const ContenfulPage = graphql`
  fragment ContentfulPageFragment on ContentfulPages {
    slug
    pageName
    theme
    showUpdateInfo
    updatedAt(formatString: "DD.MM.YYYY, HH:MM")
    pageLanguage
    heroTitle
    heroIngress {
      childMarkdownRemark {
        html
      }
    }
    heroImage {
      file {
        url
      }
    }
    seoTitle
    backLink {
      slug
      pageName
    }
    heroServiceLinks {
      ... on ContentfulServiceBox {
        serviceName
        linkToInternalPage {
          slug
        }
        linkToCustomUrl
      }
    }
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
        paragraphTitle
        background
        size
        internal {
          type
        }
        id
        paragraphText {
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
        showImages
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
              references {
                ... on ContentfulAsset {
                  contentful_id
                  __typename
                  title
                  file {
                    url
                  }
                }
                ... on ContentfulPages {
                  contentful_id
                  __typename
                  slug
                  pageName
                }
              }
            }
            image {
              file {
                url
                fileName
              }
              title
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
            iconKey
            serviceName
            # serviceInformation
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
            # serviceIcon {
            #   file {
            #     url
            #   }
            # }
            serviceName
            # serviceInformation
            textColor
            backgroundColor
            iconKey
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
        title
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
        title
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
      ... on ContentfulImageAndText {
        internal {
          type
        }
        title
        imageDecoration
        image {
          file {
            url
          }
        }
        text {
          childMarkdownRemark {
            html
          }
        }
        ctaLabel
        cta {
          slug
          pageName
        }
      }
      ... on ContentfulCtaHighlight {
        internal {
          type
        }
        title
        text {
          childMarkdownRemark {
            html
          }
        }
        image {
          file {
            url
          }
        }
        secondaryCtaLabel
        secondaryCta {
          slug
        }
        primaryCtaLabel
        primaryCta {
          slug
        }
      }
    }
  }
`;
