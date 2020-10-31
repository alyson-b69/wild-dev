import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import ArticlesComponent from "../components/Articles"

const Search = props => {
  const articles = props.pageContext.articles
  const [querySearch, setQuerySearch] = useState("")

  useEffect(() => {
    setQuerySearch(window.location.search.split("=")[1])
  }, [props])

  const seo = {
    title: `Tous les articles du blog Wild Dev`,
    description: `Des tutoriels Gatsby, Strapi, ReactJS, JavaScript, des ressources web, des tips, astuces, et conseils concernant le développement web.`,
  }

  let filteredArticles = articles.filter(article => {
    const { content } = article.node
    return content.toLowerCase().includes(querySearch.toLowerCase())
  })

  if (filteredArticles.length) {
    return (
      <Layout SEO={seo}>
        <h3>
          Résultat de votre recherche pour :{" "}
          <span className="orange">{querySearch}</span>
        </h3>
        {
          <ArticlesComponent
            articles={filteredArticles}
            key={`${articles.length}_articles`}
          />
        }
      </Layout>
    )
  } else {
    return (
      <Layout>
        <div className="wrapper">
          <h3>
            Désolé, mais nous ne trouvons pas d'articles en lien avec{" "}
            <span className="orange">{querySearch}</span>
          </h3>
        </div>
      </Layout>
    )
  }
}
export default Search
