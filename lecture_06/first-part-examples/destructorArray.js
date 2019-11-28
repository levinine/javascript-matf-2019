function foo() {
  return ['bar', 'baz']
}

let [qux, quux] = foo();
console.log(qux, quux);
