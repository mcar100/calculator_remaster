import React from "react";
import Button from "./Button";
import {
  setOperator,
  setOperand,
  reverseOperandSign,
  addOperandDot,
} from "../utils/formula";
import { errorHandler } from "../utils/error";
import {
  BUTTON_LIST as buttonList,
  REGEX_NUM as regexNum,
} from "../utils/constants";

function CalculatorBody({
  setFormula,
  isError,
  setError,
  calculate,
  reset,
  load,
}) {
  const handleNumClick = (value) => {
    if (isError) {
      return;
    }
    setOperand(setFormula, value);
  };

  const handleBtnClick = (value) => {
    if (isError && value !== "CE") {
      return;
    }

    try {
      if (value === "CE") {
        reset();
      } else if (value === "MR") {
        load();
      } else if (value === "=") {
        calculate();
      } else if (value === ".") {
        addOperandDot(setFormula);
      } else if (value === "+/-") {
        reverseOperandSign(setFormula);
      } else {
        setOperator(setFormula, value);
      }
    } catch (err) {
      errorHandler(err, setError);
    }
  };

  return (
    <div className="calculator-body">
      <div className="button-container">
        {buttonList.map((content) => (
          <Button
            key={`btn-${content}`}
            contents={content}
            handler={regexNum.test(content) ? handleNumClick : handleBtnClick}
          />
        ))}
      </div>
    </div>
  );
}

export default CalculatorBody;
