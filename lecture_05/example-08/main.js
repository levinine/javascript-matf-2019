var p = new Promise(function (resolve, reject) {
    foo.bar();
    resolve(42);
});

p.then(
    function fulfilled(val) {
        console.log(val);
    },
    function rejected(err) {
        console.log(err);
    }
);