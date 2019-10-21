require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
}),

module.exports = {
  siteMetadata: {
    title: 'The Yorick Touch',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'https://theyoricktouch.com/news/',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        auth: {
          htaccess_user: 'yt-admin',
          htaccess_pass: '$0cNMZ@E)Z!KHbPa)zTcv8YJ',
          htaccess_sendImmediately: false
        },
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
        excludedRoutes: ["**/themes"],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      // Removes unused css rules
      resolve:'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: true,
        // Purge only the main css file
        purgeOnly: ['/all.sass'],
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
