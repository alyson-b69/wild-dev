import React from "react"
import { Container, Col, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <Container
      as="footer"
      fluid
      bsPrefix="foot"
      className=" text-center pt-4 pb-4"
    >
      <Row>
        <Col className="mb2 mt2 lightgrey">
          © 2020{" "}
          <a
            href="https://www.wildcodeschool.com/fr-FR"
            title="Wild Code School"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wild Code School
          </a>{" "}
          - Made with love by{" "}
          <a
            href="https://alyson-b.netlify.app"
            title="Site CV Alyson Bernabeu developppeuse / developppeur web"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alyson.B
          </a>
        </Col>
      </Row>
    </Container>
  )
}
export default Footer
