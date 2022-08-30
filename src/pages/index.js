import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import ContentfulComponents from '../components/contentful/contentfulComponents';

// Although we're not using pageQueryBySlug, the queries file need to be imported so ContentfulPageFragment is available inside pageQuery.
// eslint-disable-next-line no-unused-vars
import { ContentfulPage } from '../queries';

const IndexPage = ({ data }) => {
  const { pageName, pageLanguage } = data.contentfulPages;

  return (
    <Layout lang={pageLanguage}>
      <Seo title={pageName} lang={pageLanguage} />
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
  }
`;
