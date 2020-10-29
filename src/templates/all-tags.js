import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AllTags = props => {
  const tags = props.pageContext.tags
  return (
    <Layout>
      <h2>Toutes les étiquettes :</h2>
      <ul>
        {tags.map(tag => (
          <li key={tag.node.slug}>
            <Link to={`./${tag.node.slug}`}>
              {tag.node.name} : {tag.node.articles.length} articles
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default AllTags

