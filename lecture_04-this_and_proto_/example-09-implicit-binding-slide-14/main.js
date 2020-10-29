function foo () {
    console.log(this.a);
}

function doFoo(fn) {
    fn();
}

var obj = {
    a: 2,
    foo: foo
}

var a = 'ooops, global';

doFoo(obj.foo);