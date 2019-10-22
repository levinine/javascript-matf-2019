var foo = true;

if (foo) {
    let bar = foo * 2;
    bar = something(bar);
    console.log(bar);
}

console.log(bar); // Reference error

function something (x) {
    return x;
}