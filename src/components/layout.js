import React from "react"
import PropTypes from "prop-types"

import HeaderNav from "./HeaderNav"
import Footer from "./Footer"
import SEO from "./seo"
import { Container } from "react-bootstrap"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <HeaderNav />
      <Container as="main">{children}</Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
