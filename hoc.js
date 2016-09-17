class Foo {
  answer() { return 42; }
}

class Quux extends Foo {
  quux() { return 'biz'; }
}

class Bar extends Quux {
  bar() { return 'baz'; }
}

let d = new Bar()
console.log(d.bar())
console.log(d.quux())
console.log(d.answer())

function Mixin (Component) {
  const handleClick = (e) => console.log(e.target.value)
  return <Component onClick={handleClick} />
}

function Square (props) {
  return (
    <div onClick={props.onClick}>square</div>
  )
}

function Circle (props) {
  return (
    <div onClick={props.onClick}>circle</div>
  )
}

const SuperSquare = Mixin(Square)
const SuperCircle = Mixin(Circle)
