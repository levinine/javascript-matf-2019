var arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach(function logItem(item) {
  console.log(item);
});

for (var item of arr) {
  console.log(item);
}
