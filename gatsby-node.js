/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const slash = require(`slash`);
const fs = require('fs');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  // we use the provided allContentfulBlogPost query to fetch the data from Contentful
  return graphql(
    `
      {
        allContentfulPages {
          edges {
            node {
              id
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
            }
          }
        }
      }
    `,
  )
    .then((result) => {
      if (result.errors) {
        console.log('Error retrieving contentful data', result.errors);
      }
      // Resolve the paths to our template
      const projectTemplate = path.resolve('./src/templates/pageTemplate.js');

      const { allContentfulPages } = result.data;
      // Then for each result we create a page.
      allContentfulPages.edges.forEach((edge) => {
        createPage({
          path: `/${edge.node.slug}/`,
          component: slash(projectTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
          },
        });
      });
    })
    .catch((error) => {
      console.log('Error retrieving contentful data', error);
    });
};

// gatsby-contentful-source determines the types of data that is available
// from Contentful by looking at what is currently defined there.
// If there is no entry for a specific content type, or never any content in
// specific field, it will think that those do not exist.
// If queries.js tries to access those fields, we get a long error message about
// using fields that do not exist.
//
// THE SOLUTION IS TO MANUALLY TYPE THE GRAPHQL TYPE DEFINITIONS BELOW.
// You can get help from http://localhost:8000/___graphql, select "Docs" from
// upper right corner.
//
// See more information:
// - https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/#creating-type-definitions
// - https://github.com/gatsbyjs/gatsby/issues/2392
// - https://graphql.org/learn/schema/

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type ContentfulParagraph implements Node {
      paragraphTitle: String
      sideImagePosition: String
      paragraphBackgroundStyle: String
      paragraphColumns: String
      backgroundStyle: String
      backgroundColor: String
      textColor: String
    }
    type ContentfulBackgroundStyle implements Node {
      value: String!
    }
    type ContentfulServiceBox implements Node {
      serviceIcon: ContentfulAsset @link(by: "id", from: "serviceIcon___NODE")
      backgroundColor: String
      serviceName: String!
      serviceInformation: String!
      textColor: String
      linkToInternalPage: ContentfulPages  @link(by: "id", from: "linkToInternalPage___NODE")
      linkToCustomUrl: String
    }
    type ContentfulContentBox implements Node {
      title: String!
      backgroundColor: String
      textColor: String
      content: Content
      linkToInternalPage: ContentfulPages  @link(by: "id", from: "linkToInternalPage___NODE")
      linkToCustomUrl: String
    }
    type ContentfulContentBoxGroup implements Node {
      title: String
      backgroundStyle: String
      backgroundColor: String
    }
    type ContentfulServiceBoxGroup implements Node {
      title: String
    }
    type ContentfulBlogPost implements Node {
      blogPostTitle: String
      blogPostDate(
        difference: String
        formatString: String
        fromNow: Boolean
        locale: String
      ): Date
      blogPostLanguage: String
      coverImage: ContentfulAsset @link(by: "id", from: "coverImage___NODE")
      blogPostContent: ContentfulBlogPostBlogPostContent
      blogPostBackgroundStyle: String
      blogPostBackgroundColor: String
      blogPostTextColor: String
      blogPostDescription: String
    }
    type ContentfulBlogPostBlogPostContent {
      raw: String
      references: [ContentfulAssetContentfulVideoUnion] @link(by: "id", from: "references___NODE")
    }
    union ContentfulAssetContentfulVideoUnion = ContentfulAsset | ContentfulVideo

    type Content {
      raw: String
    }

    type ContentfulOpenLetterForm implements Node {
      title: String
      showSendLetterButton: Boolean
      description: ContentfulOpenLetterDescription
      defaultLanguage: String
      contentAfterReceivingReply: ContentfulOpenLetterFormContentAfterReceivingReply
    }

    type ContentfulOpenLetterDescription {
      childMarkdownRemark: MarkdownRemark
      description: String
    }

    type ContentfulOpenLetterFormContentAfterReceivingReply {
      raw: String
      references: [ContentfulGoogleFormsIframe] @link(by: "id", from: "references___NODE")
    }

    type ContentfulGoogleFormsIframe implements Node {
      embedHtml: String
    }

    type ContentfulPagePreviewGrid implements Node {
      pages: [ContentfulPages] @link(by: "id", from: "pages___NODE")
    }
 
    union ContentfulPagesPageContent = ContentfulBlogPost
      | ContentfulContentBoxGroup
      | ContentfulServiceBoxGroup
      | ContentfulExternalForm
      | ContentfulFullWidthImage
      | ContentfulGoogleFormsIframe
      | ContentfulOpenLetterForm
      | ContentfulParagraph
      | ContentfulQuote
      | ContentfulReadMore
      | ContentfulVideo
      | ContentfulPagePreviewGrid
      | ContentfulPersonIntroductionGrid


    type ContentfulPages implements Node {
      slug: String
      pageContent: [ContentfulPagesPageContent] @link(by: "id", from: "pageContent___NODE")
    }
  `;
  createTypes(typeDefs);
};

// Tell https://github.com/heroku/heroku-buildpack-nginx running
// in development mode that the app has been built and is ~ready
// to take in requests.
exports.onPostBootstrap = () => {
  fs.closeSync(fs.openSync('/tmp/app-initialized', 'w'));
};
