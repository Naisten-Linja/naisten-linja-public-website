import React, { useCallback } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import ContentfulComponents from '../components/contentful/contentfulComponents';

// Although we're not using pageQueryBySlug, the queries file need to be imported so ContentfulPageFragment is available inside pageQuery.
// eslint-disable-next-line no-unused-vars
import { pageQueryBySlug } from '../queries';

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
  console.log(data.contentfulPages);
  const cookiebotId = process.env.GATSBY_COOKIEBOT_ID;
  console.log('updateInfo: ', showUpdateInfo, updatedAt);

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

  return (
    <Layout
      hero={hero}
      updateInfo={updateInfo}
      lang={pageLanguage}
      showTableOfContents={showTableOfContents}
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
        <div className="layout-container" ref={targetRef}></div>
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
  }
`;
