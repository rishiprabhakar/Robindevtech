module.exports = {
  siteMetadata: {
    title: `RobinDevTech`,
    description: `Custom web development, web applications, e-commerce and technical support for businesses worldwide.`,
    author: `RobinDevTech`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RobinDevTech`,
        short_name: `RobinDevTech`,
        start_url: `/`,
        background_color: `#0a0e14`,
        theme_color: `#4fd1c5`,
        display: `minimal-ui`,
        icon: `src/images/favicon-512.png`,
      },
    },
  ],
}
