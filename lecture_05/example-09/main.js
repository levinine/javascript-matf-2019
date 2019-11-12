var p = Promise.resolve(21);

var p2 = p.then(function (v) {
    console.log(v);

    return v * 2;
});

p2.then(function (v) {
    console.log(v);
});