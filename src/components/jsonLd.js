/**
 * JSON-LD Structured Data component
 * Generates schema.org structured data for articles using Page content model
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const JsonLd = ({ data, pageUrl }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            url
          }
        }
      }
    `,
  );

  // Helper function to format date to ISO 8601
  const formatDateToISO = (date) => {
    if (!date) return null;
    // If it's already a Date object
    if (date instanceof Date) {
      return date.toISOString();
    }
    // If it's a string, try to parse it
    if (typeof date === 'string') {
      // Try parsing as ISO string first
      const isoParsed = new Date(date);
      if (!isNaN(isoParsed.getTime())) {
        return isoParsed.toISOString();
      }
      // Try parsing formatted date "DD.MM.YYYY, HH:MM"
      const formattedMatch = date.match(
        /(\d{2})\.(\d{2})\.(\d{4}),\s*(\d{2}):(\d{2})/,
      );
      if (formattedMatch) {
        const [, day, month, year, hour, minute] = formattedMatch;
        const parsed = new Date(`${year}-${month}-${day}T${hour}:${minute}:00`);
        if (!isNaN(parsed.getTime())) {
          return parsed.toISOString();
        }
      }
      // If all parsing fails, return null
      return null;
    }
    return null;
  };

  // Generate Article schema from Page content model
  if (!data || (!data.seoTitle && !data.pageName)) {
    return null;
  }

  const protocol = 'https:';
  const baseUrl = site.siteMetadata.url;
  const pageUrlFull = pageUrl
    ? `${baseUrl}${pageUrl.startsWith('/') ? pageUrl : `/${pageUrl}`}`
    : baseUrl;

  const imageUrl = data.ogImage?.file?.url
    ? `${protocol}${data.ogImage.file.url}`
    : null;

  const publishedDate = formatDateToISO(data.updatedAt);
  const modifiedDate = formatDateToISO(data.updatedAt);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.seoTitle || data.pageName,
    description: data.seoDescription,
    image: imageUrl ? [imageUrl] : [],
    ...(publishedDate && { datePublished: publishedDate }),
    ...(modifiedDate && { dateModified: modifiedDate }),
    author: {
      '@type': 'Organization',
      name: site.siteMetadata.title,
    },
    publisher: {
      '@type': 'Organization',
      name: site.siteMetadata.title,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/Naisten_Linja.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrlFull,
    },
    inLanguage: data.pageLanguage || 'fi',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
};

export default JsonLd;
