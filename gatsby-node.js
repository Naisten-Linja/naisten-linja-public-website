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
      // Then for each result we create a page.
      result.data.allContentfulPages.edges.forEach((edge) => {
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
      serviceIcon: ContentfulAsset
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

    type ContentfulPages implements Node {
      slug: String
    }

    type Content {
      raw: String
    }
  `;
  createTypes(typeDefs);
};

// Tell https://github.com/heroku/heroku-buildpack-nginx running
// in development mode that the app has been built and is ~ready
// to take in requests.
exports.onPostBootstrap = () => {  
  fs.closeSync(fs.openSync("/tmp/app-initialized", 'w'));
};