import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Corpo Code Crafted Studios`,
    siteUrl: `http://www.codecrafted.com/`,
  },
  pathPrefix: "",
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`
      }
    },
    {
      resolve: "gatsby-plugin-klaro",
      options: {
        includeInDevelopment: true,
        klaroVersion: "v0.7.11",
        config: {
          lang: "en",
          privacyPolicy: "../src/images",
          services: [
            {
              trackingId: "G-KXLZFNN916",
              name: "google-analytics",
              default: true,
              title: "Google Analytics and others",
              purposes: ["statistics"],
              cookies: [/^ga/i],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // Nombre del source donde se encuentran los archivos de traducción
        languages: [`en`, `es`, `fr`], // Idiomas que soporta tu sitio
        defaultLanguage: `en`, // Idioma por defecto
        siteUrl: `http://www.codecrafted.com/`, // Tu URL del sitio
        trailingSlash: 'always',
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // No escapar valores (importante para trabajar con React)
          },
          // keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: '/:lang?/blog/:uid',
            getLanguageFromPath: true,
            excludeLanguages: ['es']
          },
          {
            matchPath: '/preview',
            languages: ['en']
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Code Crafted Studios Inc.`,
        short_name: `CCS Corpo`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/icon.png`, // Ruta a tu favicon
      },
    },
  ],
};

export default config;
