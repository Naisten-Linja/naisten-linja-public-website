/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const slash = require(`slash`);

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
      paragraphText: contentfulParagraphParagraphTextTextNode
      paragraphTitle: String
      sideImagePosition: String
      paragraphBackgroundStyle: String
      paragraphColumns: String
      backgroundStyle: ContentfulBackgroundStyle
      backgroundColor: ContentfulColor
      textColor: String
    }
    type ContentfulBackgroundStyle implements Node {
      value: String!
    }
    type ContentfulContentBox implements Node {
      title: String!
      backgroundColor: String!
      content: contentfulContentBoxContentRichTextNode
      linkToInternalPage: ContentfulPages
      linkToCustomUrl: String
    }
    type ContentfulContentBoxGroup implements Node {
      title: String
      contentBoxes: [ContentfulContentBox]
      backgroundStyle: ContentfulBackgroundStyle
      backgroundColor: ContentfulColor
    }
  `;
  createTypes(typeDefs);
};
