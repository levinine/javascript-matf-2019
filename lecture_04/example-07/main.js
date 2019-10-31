function foo () {
    console.log(this.a);
}

var obj1 = {
    a: 42,
    foo: foo
}

var obj2 = {
    // a: 2,
    obj: obj1
}

obj2.obj.foo();