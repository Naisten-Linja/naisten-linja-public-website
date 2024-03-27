import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import ContentfulComponents from '../components/contentful/contentfulComponents';

// Although we're not using pageQueryBySlug, the queries file need to be imported so ContentfulPageFragment is available inside pageQuery.
// eslint-disable-next-line no-unused-vars
import { pageQueryBySlug } from '../queries';

const PageTemplate = ({ data }) => {
  const { pageName, pageLanguage, seoTitle, seoDescription, ogImage } =
    data.contentfulPages;

  return (
    <Layout lang={pageLanguage}>
      <Seo
        title={seoTitle || pageName}
        description={seoDescription}
        previewImage={ogImage}
        lang={pageLanguage}
      />
      <ContentfulComponents
        pageContent={data.contentfulPages.pageContent}
      ></ContentfulComponents>
      {pageName === 'Evästeseloste' && (
        <script
          id="CookieDeclaration"
          src="https://consent.cookiebot.com/c3c92c38-d105-4fad-ab5e-18e0f68e9042/cd.js"
          type="text/javascript"
          async
        ></script>
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
