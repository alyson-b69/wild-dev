import React from "react"
import { Card, Button } from "react-bootstrap"
import Moment from "react-moment"
import { RiTimeLine } from "react-icons/ri"
import { IoMdPricetag } from "react-icons/io"

const ArticleCard = ({ article }) => {
  return (
    <Card className="h-100" key={`article_card_${article.node.strapiId}`}>
      <a href={`/article/${article.node.slug}`}>
        <Card.Img
          variant="top"
          src={article.node.image.publicURL}
          alt={article.node.image.url}
        />
      </a>
      <Card.Body>
        <a href={`/article/${article.node.slug}`}>
          <Card.Title className="h3">{article.node.title}</Card.Title>
        </a>
        <Card.Text className="article-link">
          <a href={`/article/${article.node.slug}`}>
            <Button>LIRE L'ARTICLE</Button>
          </a>
        </Card.Text>
      </Card.Body>

      <Card.Footer>
        <div className="footer-card-meta">
          <div className="footer-category">
            <IoMdPricetag />{" "}
            {article.node.categories.map(category => (
              <a
                href={`/category/${category.slug}`}
                alt={category.name}
                key={`article_${article.node.strapiId}_cat_${category.id}`}
              >
                {category.name}{" "}
              </a>
            ))}
          </div>
          <div className="footer-category">
            <RiTimeLine />{" "}
            <Moment format="DD/MM/YYYY">{article.node.created_at}</Moment>
          </div>
        </div>
      </Card.Footer>
    </Card>
  )
}

export default ArticleCard
