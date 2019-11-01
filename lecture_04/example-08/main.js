function foo () {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
}

var bar = obj.foo;

var a = 'ooops, global';

bar();