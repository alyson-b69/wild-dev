import React from "react"

import Layout from "../components/layout"
import ArticlesComponent from "../components/Articles"
import PaginationNavIndex from "../components/PaginationNavIndex"

import "../../Custom.scss"

const IndexPage = ({ pageContext }) => {
  const { group, index, pageCount, pathPrefix } = pageContext

  const paginationContext = {
    currentPage: index,
    numPages: pageCount,
    pathPrefix: pathPrefix,
  }

  const seo = {
    title: `Tous les articles du blog Wild Dev`,
    description: `Des tutoriels Gatsby, Strapi, ReactJS, JavaScript, des ressources web, des tips, astuces, et conseils concernant le développement web.`,
  }

  return (
    <Layout SEO={seo}>
      <ArticlesComponent articles={group} key={`${group.length}_articles`} />
      <PaginationNavIndex pageContext={paginationContext} />
    </Layout>
  )
}
export default IndexPage
