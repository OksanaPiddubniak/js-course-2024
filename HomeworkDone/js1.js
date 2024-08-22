let evaluations = [
  10, 5, 46, 52, 100, 99, 57, 78, 89, 32, 63, 41, 21, 89, 15, 24, 48, 98, 11,
  85,
];

function averageValue(array) {
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    average += array[i];
  }
  average = average / array.length - 1;
  return average;
}

function maxValue(array) {
  let max = Math.max(...array);
  return max;
}

function minValue(array) {
  let min = Math.min(...array);
  return min;
}

let x = 0;
let userArray = [];

while (x < 5) {
  let userValue = Number(prompt("Введіть вашу оцінку"));
  userArray.push(userValue);
  x++;
}

console.log(averageValue(evaluations));
console.log(maxValue(evaluations));
console.log(minValue(evaluations));
console.log(userArray);
console.log(`Середнє значення: ${averageValue(userArray)}`);
console.log(`Максимальне значення: ${maxValue(userArray)}`);
console.log(`Мінімальне значення: ${minValue(userArray)}`);
