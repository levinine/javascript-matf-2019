function Foo() {
    //...
}

console.log(Foo.prototype.constructor === Foo);

var a = new Foo();

console.log(a.constructor === Foo); // true

