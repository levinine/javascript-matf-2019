class Foo {
  constructor() {
    this.quux = 'This is Foo.quux';
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

  returnQuux() {
    return this.quux;
  }
}

let qux = new Baz();
console.log(qux.returnQuux());
