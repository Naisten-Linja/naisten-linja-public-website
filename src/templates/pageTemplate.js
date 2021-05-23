import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ContentfulComponents from '../components/contentful/contentfulComponents';

// Although we're not using pageQueryBySlug, the queries file need to be imported so ContentfulPageFragment is available inside pageQuery.
// eslint-disable-next-line no-unused-vars
import { pageQueryBySlug } from '../queries';

const PageTemplate = ({ data }) => {
  console.log(data)
  const { pageName, pageLanguage } = data.contentfulPages;

  return (
    <Layout>
      <SEO title={pageName} lang={pageLanguage} />
      <ContentfulComponents
        pageContent={data.contentfulPages.pageContent}
      ></ContentfulComponents>
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPages(slug: { eq: $slug }) {
      ...ContentfulPageFragment
    }
  }
`;
