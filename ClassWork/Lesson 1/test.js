let initialValue = "І що сало ласощі";
let value = initialValue.replace(/\s+/g, "").toLocaleLowerCase();
let isPalindrome;
for (let i = 0; i < value.length / 2; i++) {
  if (value[i] !== value[value.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
  isPalindrome = true;
}
if (isPalindrome) {
  console.log(`${initialValue} - є паліндром`);
} else {
  console.log(`${initialValue} не є паліндром`);
}
function getValue(message) {
  while (true) {
    let value = prompt(message);
    let isValid = !isNaN(value) && value !== "" && value !== null;
    if (isValid) return Number(value);
  }
}
let start = getValue("Введіть початок діапазону");
let end = getValue("Введіть кінець діапазону");

if (end < start) {
  console.log("кінець діапазону не може бути меньше за початок ");
} else {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  console.log(`сумма: ${sum}`);
}
