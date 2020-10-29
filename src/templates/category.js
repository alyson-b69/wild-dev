import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticlesComponent from "../components/Articles"
import PaginationNav from "../components/PaginationNav"

export const query = graphql`
  query Categories($slug: String!, $limit: Int!, $skip: Int!) {
    articles: allStrapiArticle(
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
      sort: { fields: updated_at, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          strapiId
          title
          created_at
          updated_at
          categories {
            id
            name
            slug
          }
          image {
            publicURL
          }
          slug
        }
      }
    }
    categories: strapiCategory(slug: { eq: $slug }) {
      name
    }
  }
`

const Category = props => {
  const pageContext = props.pageContext
  const { index, numPages, postsCount, pathPrefix, slug } = pageContext

  const articles = props.data.articles.edges
  const category = props.data.categories.name

  const paginationContext = {
    currentPage: index,
    numPages: numPages,
    pathPrefix: pathPrefix,
    slug: slug,
  }

  const seoTitle = `${category}`
  const seoDescription = `Des articles, tutoriels, conseils, astuces, et autres au sujet de : ${category}`

  return (
    <Layout>
      <SEO title={seoTitle} description={seoDescription} />
      <h2>
        Catégorie : {category} <span> ({postsCount}) articles </span>
      </h2>
      <ArticlesComponent
        articles={articles}
        key={`${articles.length}_articles_index_${index}`}
      />
      <PaginationNav pageContext={paginationContext} />
    </Layout>
  )
}
export default Category

