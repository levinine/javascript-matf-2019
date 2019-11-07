function add(xPromise, yPromise) {
    return Promise.all([xPromise, yPromise])
        .then(function (values) {
            return values[0] + values[1];
        })
}

add(fetchX(), fetchY())
    .then(function (sum) {
        console.log(sum);
    });

function fetchX() {
    return Promise.resolve(21);
}

function fetchY() {
    return Promise.resolve(42);
}