const config = require('./data/siteConfig')

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    author: config.authorName,
    description: config.siteDescription,
    ...config,
  },
  plugins: [
    {
      resolve: "gatsby-starter-morning-dew",
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-morning-dew`,
        short_name: `Groot`,
        start_url: `/`,
        background_color: `#56b399`,
        theme_color: `#56b399`,
        display: `minimal-ui`,
        icon: 'content/images/groot.png',
      },
    },
  ],
}
