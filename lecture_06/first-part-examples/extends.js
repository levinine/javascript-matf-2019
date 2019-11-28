class Foo {
  constructor() {
    console.log('I am Foo constructor');
  }

  bar() {
    console.log('I am bar');
  }
}

class Baz extends Foo {
  constructor() {
    super();
    console.log('I am Bar constructor');
  }
}

let qux = new Baz();
qux.bar();
console.log();
