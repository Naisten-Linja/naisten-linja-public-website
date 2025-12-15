/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function Seo({
  description,
  lang,
  meta,
  title,
  previewImage,
  canonicalPath,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
            image
          }
        }
      }
    `,
  );

  const pageLang = lang || 'fi';
  const metaDescription = description || site.siteMetadata.description;

  const protocol = 'https:';

  const metaImage =
    previewImage && previewImage.file?.url
      ? `${protocol}${previewImage.file.url}`
      : `${site.siteMetadata.url}${site.siteMetadata.image}`;

  const metaImageAlt = previewImage
    ? previewImage.title
    : `${site.siteMetadata.title}`;

  const canonicalUrl =
    canonicalPath && site.siteMetadata.url
      ? `${site.siteMetadata.url}${canonicalPath}`
      : null;

  return (
    <Helmet
      htmlAttributes={{
        lang: pageLang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        { property: 'og:site_name', content: site.siteMetadata.title },
        {
          property: `og:title`,
          content: `${title} | ${site.siteMetadata.title}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: 'og:image',
          content: metaImage,
        },
        {
          property: 'og:image:alt',
          content: metaImageAlt,
        },
        {
          property: 'og:locale',
          content: 'fi_FI',
        },
      ].concat(meta)}
      link={
        canonicalUrl
          ? [
              {
                rel: 'canonical',
                href: canonicalUrl,
              },
            ]
          : []
      }
    />
  );
}

Seo.defaultProps = {
  lang: `fi`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  canonicalPath: PropTypes.string,
};

export default Seo;
