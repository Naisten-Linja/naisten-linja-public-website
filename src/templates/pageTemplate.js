import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PageTemplate = ({ data }) => {
  const { pageName } = data.contentfulPages;

  return (
    <Layout>
      <SEO title={pageName} />
      <h1>{pageName}</h1>
      <p>Welcome to {pageName}</p>
      <Link to="/">Random link</Link>
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPages(slug: { eq: $slug }) {
      slug
      pageName
    }
  }
`;
