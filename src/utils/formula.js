// 연산식 관련 함수 모음
function setOperator(setFormula, value) {
  setFormula((prev) => {
    return { ...prev, operator: value };
  });
}

function setOperand(setFormula, value) {
  setFormula((prev) => {
    const temp = { ...prev };
    if (!temp.operator) {
      if (temp.operand1 === "0") {
        temp.operand1 = value;
      } else {
        temp.operand1 += value;
      }
    } else {
      if (temp.operand2 === "0") {
        temp.operand2 = value;
      } else {
        temp.operand2 += value;
      }
    }
    return temp;
  });
}

function setOperandFromMemory(setFormula, value) {
  setFormula((prev) => {
    return { ...prev, operand1: value, operand2: "" };
  });
}

function reverseOperandSign(setFormula) {
  setFormula((prev) => {
    const temp = { ...prev };
    if (!temp.operand2) {
      if (temp.operand1 !== "0") {
        temp.operand1 = temp.operand1 * -1;
      }
    } else {
      if (String(temp.operand2) !== "" && temp.operand2 !== "0") {
        temp.operand2 = temp.operand2 * -1;
      }
    }
    return temp;
  });
}

function addOperandDot(setFormula) {
  setFormula((prev) => {
    const temp = { ...prev };
    if (!temp.operator) {
      if (!String(temp.operand1).includes(".")) {
        temp.operand1 += ".";
      }
    } else {
      if (temp.operand2 === "") {
        temp.operand2 = "0.";
      }
      if (!String(temp.operand2).includes(".")) {
        temp.operand2 += ".";
      }
    }
    return temp;
  });
}

function checkFormula(oper2, operator) {
  if (!operator) {
    throw new Error("No-Operator");
  } else if (!oper2) {
    throw new Error("No-Operand");
  } else {
    return true;
  }
}

function resetFormula(setFormula) {
  setFormula({
    operand1: "0",
    operator: "",
    operand2: "",
  });
}

export {
  setOperator,
  setOperand,
  setOperandFromMemory,
  reverseOperandSign,
  addOperandDot,
  checkFormula,
  resetFormula,
};
