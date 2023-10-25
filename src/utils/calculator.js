import { checkFormula } from "./formula";

// 계산 수행 및 결과 확인
function calculate(formula) {
  const { operand1, operand2, operator } = formula;
  checkFormula(operand2, operator);
  const num1 = Number(operand1);
  const num2 = Number(operand2);
  let resultValue = 0;

  if (operator === "%") {
    resultValue = num1 % num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      throw new Error("Deo-Is-Zero");
    }
    resultValue = num1 / num2;
  } else if (operator === "x") {
    resultValue = num1 * num2;
  } else if (operator === "+") {
    resultValue = num1 + num2;
  } else if (operator === "-") {
    resultValue = num1 - num2;
  } else {
    throw new Error("Wrong-Input");
  }

  resultValue = checkResult(resultValue);
  return resultValue;
}

function checkResult(num) {
  if (Number.isNaN(num)) {
    throw new Error("NaN");
  } else if (!Number.isInteger(num)) {
    return Number(num.toFixed(3));
  } else if (num === -0) {
    return 0;
  }

  return Number(num);
}

export { calculate };
