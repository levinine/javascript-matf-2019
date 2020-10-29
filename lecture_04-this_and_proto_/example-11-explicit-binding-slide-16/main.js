function foo(something) {
    console.log(this.a, something);
    return this.a + something;
}

var obj = {
    a: 2
};

function bar(param) {
    return foo.call(obj, param);
}

var b = bar(3);

console.log(b);