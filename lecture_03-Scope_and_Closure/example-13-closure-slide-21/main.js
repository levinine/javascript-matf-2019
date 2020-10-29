function foo() {
    var a = 2;
    
    function baz() {
        console.log(a); // 2
    }

    bar(baz);
}

function bar(fn) {
    fn(); // will execute baz
}

foo();