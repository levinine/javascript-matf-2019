foo();

function foo() {
    console.log(a); // undefined

    var a = 2;
}

// ------------------------------------

bar(); // not ReferenceErrpr, but TypeError!

var bar = function baz() {

};