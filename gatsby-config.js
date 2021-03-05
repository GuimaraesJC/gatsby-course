require('dotenv').config()

const queries = require('./src/utils/algolia_queries')

module.exports = {
  siteMetadata: {
    // TODO: Colocar os metadata do meu blog ao final
    title: `Jean Carlos Guimarães`,
    position: `Desenvolvedor Front-End`,
    description: `A blog about Front-End development and other cool stuff.`,
    author: `@eumesmo`,
    siteUrl: 'https://gatsby-course-jean.netlify.app'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    // Needs to be the first to work with gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // TODO: Verificar options de todos os plugins
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `uploads`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false
            }
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true,
      },
    },
    {
      // TODO: Configurar de acordo com o site no ar
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Teste 123`,
        short_name: `Teste 123`,
        start_url: `/`,
        background_color: `#2f3437`,
        theme_color: `#2f3437`,
        // TODO: Verificar opções
        display: `minimal-ui`,
        // TODO: Mudar ícone
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`
  ],
}
