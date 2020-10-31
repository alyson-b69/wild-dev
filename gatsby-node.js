exports.createPages = async ({ graphql, actions }) => {
  const createPaginatedPages = require("gatsby-paginate")
  const { createPage } = actions
  const result = await graphql(
    `
      {
        articles: allStrapiArticle(sort: { fields: updated_at, order: DESC }) {
          edges {
            node {
              strapiId
              title
              excerpt
              content
              updated_at
              created_at
              image {
                publicURL
              }
              categories {
                name
                id
                slug
              }
              tags {
                name
                id
                slug
              }
              slug
            }
          }
        }

        categories: allStrapiCategory {
          edges {
            node {
              strapiId
              slug
              name
              articles {
                id
                title
                excerpt
                content
                updated_at
                image {
                  publicURL
                }
                slug
              }
            }
          }
        }
        tags: allStrapiTag {
          edges {
            node {
              strapiId
              slug
              name
              articles {
                id
                title
                excerpt
                content
                updated_at
                image {
                  publicURL
                }
                slug
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const articles = result.data.articles.edges
  const categories = result.data.categories.edges
  const tags = result.data.tags.edges

  //Creating a page for each article
  articles.forEach((article, index) => {
    createPage({
      path: `/article/${article.node.slug}`,
      component: require.resolve("./src/templates/article.js"),
      context: {
        slug: article.node.slug,
        title: article.node.title,
      },
    })
  })

  //Create page for many articles
  const postsPerPage = 6

  createPaginatedPages({
    edges: articles,
    createPage: createPage,
    pageTemplate: "src/templates/index.js",
    pageLength: postsPerPage,
    pathPrefix: "",
    context: {},
  })

  //Create page for searching post
  createPage({
    path: `/search`,
    component: require.resolve("./src/templates/search.js"),
    context: {
      articles: articles,
    },
  })

  // Creating page index of categories
  createPage({
    path: `/category`,
    component: require.resolve("./src/templates/all-categories.js"),
    context: {
      categories: categories,
    },
  })

  //Creating pagination for categories
  categories.forEach((category, j) => {
    const posts = category.node.articles
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((item, i) => {
      createPage({
        path:
          i === 0
            ? `/category/${category.node.slug}`
            : `/category/${category.node.slug}/${i + 1}`,
        component: require.resolve("./src/templates/category.js"),
        context: {
          pathPrefix: `/category/${category.node.slug}`,
          slug: category.node.slug,
          limit: postsPerPage,
          skip: i * postsPerPage,
          postsCount: posts.length,
          numPages,
          index: i + 1,
          categoryName: category.node.name,
        },
      })
    })
  })

  // Creating page index of tags
  createPage({
    path: `/tag`,
    component: require.resolve("./src/templates/all-tags.js"),
    context: {
      tags: tags,
    },
  })

  //Creating pagination for categories
  tags.forEach(tag => {
    const posts = tag.node.articles
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((item, i) => {
      createPage({
        path:
          i === 0 ? `/tag/${tag.node.slug}` : `/tag/${tag.node.slug}/${i + 1}`,
        component: require.resolve("./src/templates/tag.js"),
        context: {
          pathPrefix: `/tag/${tag.node.slug}`,
          slug: tag.node.slug,
          limit: postsPerPage,
          skip: i * postsPerPage,
          postsCount: posts.length,
          numPages,
          index: i + 1,
        },
      })
    })
  })
}
