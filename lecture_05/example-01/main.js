function now() {
    return 21;
}

function later() {
    answer = answer * 2;
    console.log( "Later answer:", answer );
}

var answer = now();

console.log(answer);

setTimeout( later, 1000 );
