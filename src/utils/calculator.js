function calculator(formula) {
  const { operand1, operand2, operator } = formula;
  checkFormula(operand1, operand2, operator);
  const num1 = Number(operand1);
  const num2 = Number(operand2);
  let resultValue = 0;

  if (operator === "%") {
    resultValue = num1 % num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      throw new Error("deo-is-zero");
    }
    resultValue = num1 / num2;
  } else if (operator === "x") {
    resultValue = num1 * num2;
  } else if (operator === "+") {
    resultValue = num1 + num2;
  } else if (operator === "-") {
    resultValue = num1 - num2;
  } else {
    throw new Error("no-operator");
  }

  resultValue = checkResult(resultValue);
  return resultValue;
}

function checkFormula(oper1, oper2, operator) {
  console.log(oper1, oper2, operator);
  if (!operator) {
    throw new Error("operator-required");
  } else if (!oper2) {
    throw new Error("operand-required");
  } else {
    return true;
  }
}

function checkResult(num) {
  if (Number.isNaN(num)) {
    throw new Error("NaN");
  } else if (!Number.isInteger(num)) {
    return Number(num.toFixed(3));
  }

  return num;
}

function resetFormula(setFormula) {
  setFormula({
    operand1: "0",
    operator: "",
    operand2: "",
  });
}
export { calculator, resetFormula };
