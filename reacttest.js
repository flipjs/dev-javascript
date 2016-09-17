import React, { Component, PropTypes } from 'react'

export class MyComponent extends Component {
  render () {
    return (
      <div />
    )
  }
}

MyComponent.propTypes = {
  data: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  isFetch: PropTypes.bool.isRequired
}

MyComponent.contextTypes = {
  router: PropTypes.object.isRequired
}

export default MyComponent
