import { MAX_INPUT_SIZE as maxInputSize } from "./constants";
import { errorHandler } from "./error";

// 화면 관련 함수

function setMainScreen(formula, setInput) {
  if (formula.operand2 === "") {
    setInput(formula.operand1);
  } else {
    setInput(formula.operand2);
  }
}

function setSubScreen(formula, setSubInput) {
  if (formula.operator) {
    setSubInput(Number(formula.operand1) + formula.operator);
  } else {
    setSubInput("");
  }
}

function setScreenWithResult(setInput, setSubInput, formula, result) {
  setInput(result);
  setSubInput(() => {
    return (
      Number(formula.operand1) +
      formula.operator +
      Number(formula.operand2) +
      "="
    );
  });
}

function checkMainScreenLength(input, setError) {
  try {
    if (input.toLocaleString().length > maxInputSize) {
      throw new Error("Too-Long-Num");
    }
  } catch (err) {
    errorHandler(err, setError);
  }
}

export {
  setMainScreen,
  setSubScreen,
  setScreenWithResult,
  checkMainScreenLength,
};
