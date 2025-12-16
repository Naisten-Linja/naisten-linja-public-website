import React from 'react';
import Footer from '../../ui/Footer/Footer';
import { useStaticQuery, graphql } from 'gatsby';

const ContentfulFooter = (onClick) => {
  const footerData = useStaticQuery(query);

  return <Footer onClick={onClick} {...footerData.contentfulFooter} />;
};

export default ContentfulFooter;

const query = graphql`
  query Footer {
    contentfulFooter(slug: { eq: "footer" }) {
      id
      slug
      title
      contacts {
        childMarkdownRemark {
          html
        }
      }
      facebook
      instagram
      twitterX
      linkedIn
      youtube
      tikTok
      linksGroupOne {
        slug
        pageName
        id
      }
      linksGroupTwo {
        slug
        pageName
        id
      }
      linksGroupThree {
        ... on ContentfulExternalLink {
          __typename
          id
          url
          label
        }
        ... on ContentfulPages {
          __typename
          id
          pageName
          slug
        }
      }
      legals {
        slug
        pageName
        id
      }
      jsonLd {
        jsonLd
      }
    }
  }
`;
