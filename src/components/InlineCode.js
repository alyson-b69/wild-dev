import React, { PureComponent } from "react"
import PropTypes from "prop-types"

const codeStyles = {
  fontFamily: '"Inconsolata", monospace',
  margin: "3px",
  padding: "4px 6px",
  backgroundColor: "#f7f7f7",
  border: "1px solid #ededed",
  borderRadius: "5px",
  boxShadow: "rgba(0, 0, 0, 0.1) 1px 1px 10px 0px",
}

class InlineCode extends PureComponent {
  render() {
    const { value } = this.props
    return <code style={codeStyles}>{value}</code>
  }
}

InlineCode.propTypes = {
  value: PropTypes.string.isRequired,
}

export default InlineCode

