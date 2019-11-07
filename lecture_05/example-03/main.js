function baz() {
    // call-stack is: 'baz'
    // so our call-site is in the global scope
    console.log('baz');
    bar(); // <-- call-site for bar
}

function bar() {
    //call stack is bar -> baz
    // sou our call site is in baz 

    console.log('bar');
    foo();
}

function foo() {
    // call stack is 'baz' -> 'bar' -> 'foo'
    // so our call site is in bar
}

baz(); // <-- call site for 'baz' 