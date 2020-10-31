import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const HeaderNav = () => {
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
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default HeaderNav
