'use strict'
function caseShape (shape) {
  var shapes = {
    square: square,
    circle: circle,
    rectangle: rectangle,
    unknown: unknown
  }

  function square () {
    console.log('square')
  }

  function circle () {
    console.log('circle')
  }

  function rectangle () {
    console.log('rectangle')
  }

  function unknown () {
    console.log('unknown')
  }

  return (shapes[shape] || shapes.unknown)()
}

caseShape('dfg')

