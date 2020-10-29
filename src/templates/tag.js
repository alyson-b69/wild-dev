import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticlesComponent from "../components/Articles"
import PaginationNav from "../components/PaginationNav"

export const query = graphql`
  query Tags($slug: String!, $limit: Int!, $skip: Int!) {
    articles: allStrapiArticle(
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
      sort: { fields: updated_at, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          strapiId
          title
          categories {
            id
            name
            slug
            created_at
            updated_at
          }
          tags {
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
    tags: strapiTag(slug: { eq: $slug }) {
      name
    }
  }
`

const Tag = props => {
  const pageContext = props.pageContext
  const { index, numPages, postsCount, pathPrefix, slug } = pageContext

  const articles = props.data.articles.edges
  const tag = props.data.tags.name

  const paginationContext = {
    currentPage: index,
    numPages: numPages,
    pathPrefix: pathPrefix,
    slug: slug,
  }

  const seoTitle = `${tag}`
  const seoDescription = `Des articles, tutoriels, conseils, astuces, et autres au sujet de : ${tag}`

  return (
    <Layout key={`tag_name_${tag}`}>
      <SEO title={seoTitle} description={seoDescription} />
      <h2>
        Etiquette : {tag} <span>({postsCount}) articles</span>
      </h2>
      <ArticlesComponent
        articles={articles}
        key={`tag_articles_${tag}_index${index}`}
      />
      <PaginationNav pageContext={paginationContext} />
    </Layout>
  )
}

export default Tag

