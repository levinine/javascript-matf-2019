function changeByValue(a) {
  a = 10;
};

var a = 15;
changeByValue(a);
console.log(a);

//

function addToArray(arr) {
  arr.push(10);
};

var arr = [1, 2, 3];
addToArray(arr);
console.log(arr);
