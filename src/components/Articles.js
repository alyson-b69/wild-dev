import React from "react"
import ArticleCard from "./ArticleCard"
import { CardDeck } from "react-bootstrap"

const Articles = ({ articles }) => {
  return (
    <CardDeck className="pl-2 pr-2" key={`${articles.length}_articles`}>
      {articles.map(article => {
        return (
          <div
            className="col-12 col-sm-12 col-md-6 col-lg-4 p-1 mb-2"
            key={`article__${article.node.slug}`}
          >
            <ArticleCard article={article} />
          </div>
        )
      })}
    </CardDeck>
  )
}

export default Articles

