function foo(something) {
    console.log(this.a, something);
    return this.a + something;
}

function bind(fn, arguments) {
    return function() {
        return fn.apply(obj, arguments);
    }
}

var obj = {
    a: 2
};

var bar = bind(foo, obj);

var b = bar(3);

console.log(b());