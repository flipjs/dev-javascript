import React, { Component, PropTypes } from 'react'

class ThisElement extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
      </div>
    )
  }
}
ThisElement.propTypes = {
  children: PropTypes.any
}

export default ThisElement
