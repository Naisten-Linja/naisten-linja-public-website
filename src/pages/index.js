import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import ContentfulComponents from '../components/contentful/contentfulComponents';

// Although we're not using pageQueryBySlug, the queries file need to be imported so ContentfulPageFragment is available inside pageQuery.
// eslint-disable-next-line no-unused-vars
import { ContentfulPage } from '../queries';

const IndexPage = ({ data }) => {
  const {
    pageName,
    pageLanguage,
    heroTitle,
    heroImage,
    backLink,
    heroIngress,
    heroServiceLinks,
    seoTitle,
    seoDescription,
    ogImage,
  } = data.contentfulPages;

  const { alertLink, alertText, showAlert } = data.contentfulMainMenu;

  const alert = {
    showAlert,
    alertLink,
    alertText,
  };

  const hero = {
    pageName,
    heroTitle,
    heroImage,
    heroIngress,
    backLink,
    heroServiceLinks,
  };
  return (
    <Layout hero={hero} lang={pageLanguage} alert={alert}>
      <Seo
        title={seoTitle || pageName}
        description={seoDescription}
        previewImage={ogImage}
        lang={pageLanguage}
      />
      <ContentfulComponents
        pageContent={data.contentfulPages.pageContent}
      ></ContentfulComponents>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    contentfulPages(slug: { eq: "etusivu" }) {
      ...ContentfulPageFragment
    }
    contentfulMainMenu(slug: { eq: "header-menu-2024" }) {
      id
      mainMenuName
      showAlert
      alertText {
        alertText
      }
      alertLink {
        slug
      }
    }
  }
`;
