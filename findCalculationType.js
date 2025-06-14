function findCalculationType(num1, num2, result) {
  if (num1 + num2 === result) return "addition";
  if (num1 - num2 === result) return "subtraction";
  if (num1 * num2 === result) return "multiplication";
  if (num1 / num2 === result) return "division";
}
