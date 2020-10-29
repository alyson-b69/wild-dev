import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AllCategories = props => {
  const categories = props.pageContext.categories
  return (
    <Layout>
      <h2>Toutes les catégories :</h2>
      <ul>
        {categories.map(category => (
          <li key={category.node.slug}>
            <Link to={`./${category.node.slug}`}>
              {category.node.name} : {category.node.articles.length} articles
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default AllCategories

