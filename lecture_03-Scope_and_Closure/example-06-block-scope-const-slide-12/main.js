var foo = true;

if (foo) {
    var a = 2;
    const b = 3; // block scoped

    a = 3; // just fine
    b = 4; // error!
}

console.log(a); // 3
console.log(b); // Reference Error