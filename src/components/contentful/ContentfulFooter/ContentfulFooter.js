import React from 'react';
import Footer from '../../ui/Footer/Footer';
const ContentfulFooter = ({ content }) => {
  const { title } = content;
  const footerData = useStaticQuery(query);

  return <Footer title={title} />;
};

export default ContentfulFooter;

const query = graphql`
  query Footer {
    contentfulMainMenu(slug: { eq: "header-menu" }) {
      id
      slug
      mainMenuName
      topLevelPages {
        id
        linkToExternalUrl
        menuPage {
          pageName
          slug
        }
        pageContainerName
        menuPageSubpages {
          id
          linkToExternalUrl
          menuPage {
            pageName
            slug
            id
          }
          pageContainerName
          menuPageSubpages {
            linkToExternalUrl
            menuPageSubpages {
              linkToExternalUrl
              menuPage {
                pageName
                slug
              }
              id
            }
            id
            menuPage {
              pageName
              slug
              id
            }
          }
        }
      }
    }
  }
`;
