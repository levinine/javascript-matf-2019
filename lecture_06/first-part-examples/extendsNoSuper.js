class Foo {
  constructor() {
    this.quux = 'This is Foo.quux';
    console.log('I am Foo constructor');
  }
}

class Baz extends Foo {
  constructor() {
    console.log('I am Bar constructor');
  }

  getQuux() {
    return this.quux;
  }
}

let qux = new Baz();
console.log(qux.getQuux());
