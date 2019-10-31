var anotherObject = {
    a: 2
}

var myObject = Object.create(anotherObject);

for(var k in myObject) {
    console.log('found: ' + k);
}