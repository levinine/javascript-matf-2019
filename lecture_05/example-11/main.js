var p = Promise.resolve(21);

p.then(function (v) {
    console.log(v);
    return new Promise(function (resolve, reject) {
        resolve(v * 2);
    });
}).then(function (v) {
    console.log(v);
});