import React, { useCallback } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import ContentfulComponents from '../components/contentful/contentfulComponents';

// Although we're not using pageQueryBySlug, the queries file need to be imported so ContentfulPageFragment is available inside pageQuery.
// eslint-disable-next-line no-unused-vars
import { pageQueryBySlug } from '../queries';
import Container from '../components/ui/utils/Container/Container';

const PageTemplate = ({ data }) => {
  const {
    pageName,
    pageLanguage,
    seoTitle,
    seoDescription,
    ogImage,
    showUpdateInfo,
    showTableOfContents,
    updatedAt,
    theme,
    heroTitle,
    heroIngress,
    heroImage,
    backLink,
    heroServiceLinks,
  } = data.contentfulPages;
  const { alertLink, alertText, showAlert } = data.contentfulMainMenu;

  const cookiebotId = process.env.GATSBY_COOKIEBOT_ID;

  function isBrowser() {
    return typeof window === 'object';
  }

  const targetRef = useCallback(
    (node) => {
      if (node === null || !isBrowser()) {
        // eslint-disable-next-line no-console
        console.debug(
          'CookieDeclaration adding script to page skipped. No target reference',
        );
        return;
      }
      const script = document.createElement('script');
      script.src = `https://consent.cookiebot.com/${cookiebotId}/cd.js`;
      script.async = true;
      node.appendChild(script);
    },
    [cookiebotId],
  );

  const hero = {
    pageName,
    heroTitle,
    heroImage,
    heroIngress,
    backLink,
    heroServiceLinks,
    theme,
  };

  const updateInfo = {
    showUpdateInfo,
    updatedAt,
  };
  const alert = {
    showAlert,
    alertLink,
    alertText,
  };

  // console.log('alert full: ', alert);

  return (
    <Layout
      hero={hero}
      updateInfo={updateInfo}
      lang={pageLanguage}
      showTableOfContents={showTableOfContents}
      alert={alert}
    >
      <Seo
        title={seoTitle || pageName}
        description={seoDescription}
        previewImage={ogImage}
        lang={pageLanguage}
      />
      <ContentfulComponents
        theme={theme}
        pageContent={data.contentfulPages.pageContent}
      ></ContentfulComponents>

      {pageName === 'Evästeseloste' && (
        <Container size={'xx-large'}>
          <div className="layout-container" ref={targetRef}></div>
        </Container>
      )}
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulPages(slug: { eq: $slug }) {
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
