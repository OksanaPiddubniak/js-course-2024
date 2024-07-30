let year = Number(prompt("Введить рік"));

if (isNaN(year)) {
  alert("Ввели некоректне число");
} else if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  alert("Рік високосний");
} else {
  alert("Рік невисокосний");
}
