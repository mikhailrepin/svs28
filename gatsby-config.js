/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: "/svs28",
  siteMetadata: {
    title: "svs28",
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-source-prismic`,
    options: {
      repositoryName: `svetoservice`,
      accessToken: `${process.env.API_KEY}`,
      linkResolver: ({ node, key, value }) => request_widget => `/${request_widget}`,
      schemas: {
        request_widget: require("./custom_types/request_widget.json"),
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Светосервис ДВ`,
      short_name: 'svs28',
      description: `Проекты по моернизации наружного освещения на Дальнем Востоке.`,
      display: `standalone`,
      icon: `src/images/icon.png`,
      start_url: `/`,
      background_color: `#1B1B1B`,
      theme_color: `#3D3BFF`,
    },
  },
]
};