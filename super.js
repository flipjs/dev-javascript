class Person {
  constructor () {
    this.name = 'felipe'
  }

  sayHi () {
    console.log('Hi,', this.name)
  }
}

class P extends Person {
  constructor () {
    // this.sayHello()
    super() // has to invoke super() first before this.name can be used
    this.sayHello()
  }
  sayHello () {
    console.log('Hello,', this.name)
  }
}

var p = new P()
