const dotenv = require('dotenv');
const path = require('path');

const activeEnv =
  process.env.TARGET_ENV || process.env.NODE_ENV || 'development';

// load env variables from environment specific `.env.{envName}` file
// this adds but doesn't replace previously defined values
dotenv.config({
  path: `.env.${activeEnv}`,
});
// load env variables from generic `.env` file
// this adds but doesn't replace previously defined values
dotenv.config({
  path: `.envrc`,
});

module.exports = {
  siteMetadata: {
    title: `Naisten Linja`,
    description: `Maksutonta tukea ja neuvontaa väkivaltaa kokeneille naisille, tytöille ja heidän läheisilleen.`,
    url: 'https://naistenlinja.fi',
    image: '/images/NaistenLinja.png',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `naisten-linja-public-website`,
        short_name: `Naisten Linja`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/naisten-linja.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_SPACE_TOKEN}`,
        host: `${process.env.CONTENTFUL_HOST}`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: `${process.env.GOOGLE_TAGMANAGER_ID}`,
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
        routeChangeEventName: 'route-change',
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-000000', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
        },
        googleTagManager: {
          trackingId: '', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
        facebookPixel: {
          pixelId: '', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-facebook-pixel', // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development'],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
