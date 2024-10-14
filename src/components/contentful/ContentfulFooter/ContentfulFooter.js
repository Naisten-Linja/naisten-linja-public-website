import React from 'react';
import Footer from '../../ui/Footer/Footer';
import { useStaticQuery, graphql } from 'gatsby';
import Container from '../../ui/utils/Container/Container';
const ContentfulFooter = (onClick) => {
  const footerData = useStaticQuery(query);
  console.log('footerData: ', footerData);

  return (
    <Container backgroundColor={'#ede2d5'} background={true}>
      <Footer onClick={onClick} {...footerData.contentfulFooter} />
    </Container>
  );
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
        slug
        pageName
        id
      }
      legals {
        slug
        pageName
        id
      }
    }
  }
`;
