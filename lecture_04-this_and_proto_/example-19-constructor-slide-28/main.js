function Foo(name) {
    this.name = name;
    // this.myName = function() {
    //     return this.name;
    // }
}

Foo.prototype.myName = function () {
    return this.name;
}

var a = new Foo('a');
var b = new Foo('b');
console.log(a.myName());
console.log(b.myName());

