var anotherObject = {
    a: 2
}

var myObject = Object.create(anotherObject);

console.log(anotherObject.a);
console.log(myObject.a);

anotherObject.hasOwnProperty('a');
myObject.hasOwnProperty('a');

myObject.a++;

console.log(anotherObject.a);
console.log(myObject.a);

myObject.hasOwnProperty('a');