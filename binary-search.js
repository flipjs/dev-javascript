/**
 * Search a list that returns the index when found, or -1 when not found.
 * Function.prototype.call has to be used when
 * invoking the function.
 *
 * @param {Array} searchElement
 * A search element to be searched inside the given list
 * @returns {number}
 * Index of an array if element is found or -1 when not found.
 */
function binaryIndexOf (searchElement) {
  'use strict'
  /* jshint validthis:true */
  var minIndex = 0
  var maxIndex = this.length - 1
  var currentIndex
  var currentElement

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2)
    currentElement = this[currentIndex]

    if (searchElement < currentElement) {
      maxIndex = currentIndex - 1
    } else if (searchElement > currentElement) {
      minIndex = currentIndex + 1
    } else {
      return currentIndex
    }
  }

  return -1
}

var list = [10, 20, 30, 40, 50, 60, 70, 80, 90]

var idx = binaryIndexOf.call(list, 60)
console.log(list[idx])
