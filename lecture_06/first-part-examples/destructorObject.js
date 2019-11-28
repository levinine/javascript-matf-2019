function fooFunction() {
  return {
    bar: 'example bar string',
    baz: 'example baz string'
  }
}

let { bar: barDestructed, baz: bazDestructed } = fooFunction();
console.log(barDestructed, bazDestructed);
