'use strict'
// Create a base class to sub-class.

function Base () {
  this.SimpleProperty = 'Simple'
  this.ComplexProperty = {}
}

/* ------------------------------------- */

// Create sub-class and extend base class.
SubClass.prototype = new Base()
SubClass.constructor = SubClass

function SubClass (strProperty) {
  this.SubClassProperty = strProperty
  Base.call(this)
}

/* ------------------------------------- */

// Create two instances of sub-class.
var objA = new SubClass('ObjA')
var objB = new SubClass('ObjB')

// Update the simple property in the base class.
objA.SimpleProperty = 'SimpleA'
objB.SimpleProperty = 'SimpleB'

// Update key in complex property in the base class.
objA.ComplexProperty.AKey = 'FromA'
objB.ComplexProperty.BKey = 'FromB'

// Log updated property profiles.
console.log(objA)
console.log(objB)
console.log(objA.ComplexProperty)
