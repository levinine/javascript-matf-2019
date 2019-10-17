var fruit = ["Apple", "Orange", "Lemon", "Watermelon"];

for (var i = 0; i < fruit.length; i++) {
  if (fruit[i] === "Lemon") {
    break;
  }

  console.log(fruit[i]);
}

for (var i = 0; i < fruit.length; i++) {
  if (fruit[i] === "Lemon") {
    continue;
  }

  console.log(fruit[i]);
}
