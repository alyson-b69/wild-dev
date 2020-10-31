import React, { useState } from "react"
import { StaticQuery, graphql, navigate } from "gatsby"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const HeaderNav = props => {
  const [querySearch, setQuerySearch] = useState("")

  const handleInputSearch = e => {
    e.preventDefault()
    setQuerySearch(e.target.value)
  }

  const handleSearchSubmit = e => {
    e.preventDefault()
    navigate(`/search?word=${querySearch}`)
    setQuerySearch("")
  }

  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top">
      <Navbar.Brand className="extra-bold" href="/">
        WILD&#x3008;<span className="orange">DEV</span>/&#x3009;
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <StaticQuery
            query={graphql`
              query {
                allStrapiCategory(sort: { fields: name, order: ASC }) {
                  edges {
                    node {
                      strapiId
                      name
                      slug
                    }
                  }
                }
              }
            `}
            render={data =>
              data.allStrapiCategory.edges.map((category, i) => {
                return (
                  <Nav.Link
                    key={category.node.strapiId}
                    href={`/category/${category.node.slug}`}
                  >
                    {category.node.name}
                  </Nav.Link>
                )
              })
            }
          />
        </Nav>
        <Form inline onSubmit={handleSearchSubmit}>
          <FormControl
            type="text"
            placeholder="Search"
            value={querySearch}
            className="mr-sm-2"
            onChange={handleInputSearch}
          />
          <Button type="submit">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default HeaderNav
