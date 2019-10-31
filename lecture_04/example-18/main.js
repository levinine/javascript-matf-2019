function Foo() {
    //...
}

Foo.prototype.constructor === Foo;

var a = new Foo();

a.constructor === Foo; // true