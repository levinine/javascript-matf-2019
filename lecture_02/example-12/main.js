function min(a, b) {
  return a < b ? a : b;
}

function writeMyNameInConsole(name) {
  console.log("My name is " + name);
}

function sumNumbersFromTo(from, to) {
  var sum = 0;

  for (var n = from; n <= to; n++) {
    sum += n;
  }

  return sum;
}

function writeMyNameInConsoleNTimes(name, n) {
  for (var i = 0; i < n; i++) {
    writeMyNameInConsole(name);
  }
}

console.log(min(4, 5));

writeMyNameInConsole("Kyle");

console.log(sumNumbersFromTo(5, 10));

writeMyNameInConsoleNTimes("Kyle", 7);

console.log(typeof writeMyNameInConsole);
