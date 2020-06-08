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
