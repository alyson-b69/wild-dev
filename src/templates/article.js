import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import CodeBlock from "../components/CodeBlock"
import InlineCode from "../components/InlineCode"

import { Image, Button } from "react-bootstrap"
import { RiTimeLine } from "react-icons/ri"
import { IoMdPricetag } from "react-icons/io"

import Layout from "../components/layout"
import Share from "../components/Share"
import SEO from "../components/seo"

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }) {
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
    site {
      siteMetadata {
        url
        twitterUsername
      }
    }
  }
`

const Article = props => {
  const article = props.data.strapiArticle
  const site = props.data.site.siteMetadata
  const twitterUsername = site.twitterUsername
  const config = {
    twitterUsername: twitterUsername,
    config: {
      url: `${site.url}/article/${article.slug}`,
      title: article.title,
      description: article.excerpt + "...",
      image: article.image.publicURL,
    },
  }

  return (
    <Layout key={`single_article_${article.id}`}>
      <SEO
        title={article.title}
        description={article.excerpt + "..."}
        image={article.image.publicURL}
        updated_time={article.updated_at}
        article
      />
      <div className="wrapper">
        <h1>{article.title}</h1>
        <div className="article-meta">
          <RiTimeLine />{" "}
          <Moment format="DD/MM/YYYY - HH:mm" className="mr-2">
            {article.created_at}
          </Moment>{" "}
          {"   "}
          <IoMdPricetag fontSize="1.2em" />{" "}
          {article.categories.map(category => (
            <a
              href={`/category/${category.slug}`}
              alt={category.name}
              key={category.name}
            >
              {category.name}{" "}
            </a>
          ))}
        </div>
        <div className="article-meta light">
          Dernière mise à jour :{" "}
          <Moment format="DD/MM/YYYY - HH:mm" className="mr-2">
            {article.updated_at}
          </Moment>{" "}
        </div>
        <div className="article-meta mt-2">
          {article.tags.map(tag => (
            <a
              href={`/tag/${tag.slug}`}
              alt={tag.name}
              key={`article_${article.strapiId}_tag_${tag.id}`}
            >
              <Button className="mr-2 p-1">{tag.name}</Button>
            </a>
          ))}
        </div>

        <Image
          className="mb-4 mt-4"
          src={article.image.publicURL}
          alt={article.image.url}
          thumbnail
          fluid
        />
        <ReactMarkdown
          source={article.content}
          renderers={{ code: CodeBlock, inlineCode: InlineCode }}
        />
        <Share
          socialConfig={config}
          tags={article.tags.map(tag => tag.name.replace(/\s/g, "").toString())}
        />
      </div>
    </Layout>
  )
}

export default Article
