function delay(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, time);
    });
}

delay(1000) //step 1
    .then(function step2() {
        console.log('step 2 after 1000ms');
        return delay(2000);
    })
    .then(function step3() {
        console.log('step 3 after another 2000ms');
    })
    .then(function step4() {
        console.log('step4 - next job');
        return delay(500);
    })
    .then(function step5() {
        console.log('step 5 after another 500ms');
    })