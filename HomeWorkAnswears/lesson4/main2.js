let rightAnswer = 0;
let wrongAnswer = 0;

for (let i = 0; i < 5; i++) {
  let randomNumber1 = Math.floor(Math.random() * 20) + 1;
  let randomNumber2 = Math.floor(Math.random() * 20) + 1;
  let operators = ["+", "-", "*", "/"];
  let randomN = Math.floor(Math.random() * 4);
  let randomOperator;
  let rundomExpression;

  for (let i = 0; i < operators.length; i++) {
    randomOperator = operators[randomN];
  }
  if (randomOperator == "-") {
    rundomExpression = randomNumber1 - randomNumber2;
  } else if (randomOperator == "*") {
    rundomExpression = randomNumber1 * randomNumber2;
  } else if (randomOperator == "/") {
    rundomExpression = Math.round(randomNumber1 / randomNumber2);
  } else if (randomOperator == "+") {
    rundomExpression = randomNumber1 + randomNumber2;
  }
  console.log(rundomExpression);

  let userAnswear = prompt(
    `Скільки буде ${randomNumber1} ${randomOperator} ${randomNumber2}`
  );
  if (userAnswear == rundomExpression) {
    rightAnswer++;
  } else {
    wrongAnswer++;
  }
}
alert(
  `Правльних відповідей: ${rightAnswer}, неправльних віпдповідей: ${wrongAnswer}`
);
