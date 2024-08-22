let cities = ["london", "paris", "berlin", "rome"];
let number = [1, 2, 3, 4];

const map1 = number.map((x) => x * 2);
console.log(map1);

for (let i = 0; i < cities.length; i++) {
  const city = cities[i];
  console.log(city);
}

for (const key in cities) {
  console.log(key);
}

for (const city of cities) {
  console.log(city);
}

cities.push("lviv", "lutctk");
console.log(cities);
function min(array) {
  return Math.min(...array);
}

function max(array) {
  return Math.max(...array);
}

function sum(array) {
  let sumN = 0;
  for (const value of array) {
    sumN += array[value];
  }
  return sumN;
}

let test = [2, 5, 6];
let values = [...test, 10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3, -3];
console.log(values);

const m = min(values);
console.log(m);
const maxV = max(values);
console.log(maxV);
const sumNums = sum(values);
console.log("##################");

let numbers = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    numbers[i] = 0;
  }
}

numbers.forEach((value, index) => console.log(`index${index} = ${value}`));
console.log("+++++++++++++++++++++++++++++++++++++");

let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = [];
let index = 0;

while (true) {
  let value = Number(prompt("Введіть значення"));
  attempts.push(value);

  if (value == randomNumber) {
    alert(`Ви вгадали задане число ${randomNumber}`);
    break;
  } else if (value > randomNumber) {
    alert(`Число менше ніж задане ${value}`);
  } else if (value < randomNumber) {
    alert(`Число більше ніж задане ${value}`);
  }
}

attempts.forEach((x) => console.log(x));
console.log(`Ви зробили ${attempts.length} спроб`);
