function wait(message) {
    setTimeout(function timer() {
        console.log(message);
    }, 1000);
}

wait('hello closure');