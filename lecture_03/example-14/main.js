var fn;

function foo() {
    var a = 2;

    function baz() {
        console.log(a);
    }

    fn = baz;
}

function bar() {
    fn(); // executes baz function that wouldn't be available otherwise
}

foo();

bar(); // 2