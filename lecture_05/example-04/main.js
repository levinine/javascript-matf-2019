function print(i) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(i);
            resolve();
        }, 1000)
    })
}

print(1)
    .then(function () {
        return print(2);
    })
    .then(function () {
        return print(3);
    })
    .then(function () {
        return print(4);
    })
    .then(function () {
        return print(5);
    });