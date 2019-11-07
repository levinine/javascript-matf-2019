var p = Promise.resolve(21);

p.then(function (v) {
    console.log(v);
    return v * 2;
}).then(function (v) {
    console.log(v);
});