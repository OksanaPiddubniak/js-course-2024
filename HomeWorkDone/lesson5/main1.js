function getNumberValue(message) {
  while (true) {
    let value = prompt(message);
    let isValid =
      !isNaN(value) && value !== "" && value !== null && value !== "0";
    if (isValid) return Number(value);
  }
}

function bodyMassIndexCalculation(weight, height) {
  let mbi = Math.floor(weight / ((height * height) / 10000));
  return mbi;
}
function categoryBodyMassIndex(bmi) {
  if (bmi < 19) {
    console.log("Недостатня вага");
  } else if (bmi < 25 && bmi > 19) {
    console.log("нормальна вага");
  } else if (bmi < 30 && bmi > 25) {
    console.log("надмірна вага");
  } else if (bmi >= 30) {
    console.log("ожиріння");
  }
}

let userWeight = getNumberValue("Введіть вашу вагу");
let userHeight = getNumberValue("Введіть ваш зріст");

let bodyMassIndex = bodyMassIndexCalculation(userWeight, userHeight);
console.log(bodyMassIndex);

categoryBodyMassIndex(bodyMassIndex);
