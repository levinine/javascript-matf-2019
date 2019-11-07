function foo(x) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(15);
        }, 2000);
    });
}

var p = foo(42);

bar(p);

baz(p);

function bar(arg) {
    arg
        .then(function (promiseResult) {
            console.log(promiseResult);
        });
}

function baz(arg) {
    arg.then(function (promiseResult) {
        setTimeout(function () {
            console.error(promiseResult);
        }, 1000);
    })
}