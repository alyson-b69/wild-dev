require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `WILD DEV BLOG`,
    titleTemplate: `%s · By Wild Dev  `,
    description:
      "Wild Dev : Des tutoriels Gatsby, Strapi, ReactJS, JavaScript, des ressources web, des tips, astuces, et conseils concernant le développement web.",
    author: "wild dev",
    url: `https://www.wild-dev.com`,
    image: "",
    twitterUsername: `@WildDev69`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto"],
        },
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL,
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "article",
          "category",
          "tag",
        ],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
  ],
}
