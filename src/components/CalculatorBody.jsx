import React, { useEffect, useState } from "react";
import {
  BUTTON_LIST as buttonList,
  REGEX_NUM as regexNum,
} from "../utils/constants";
import Button from "./Button";

function CalculatorBody({ setFormula, setError, calculate, reset }) {
  const handleNumClick = (value) => {
    setFormula((prev) => {
      const temp = { ...prev };
      if (!temp.operator) {
        if (temp.operand1 === "0") {
          temp.operand1 = value;
        } else {
          temp.operand1 += value;
        }
      } else {
        temp.operand2 += value;
      }
      return temp;
    });
  };

  const handleBtnClick = (value) => {
    try {
      if (value === "CE") {
        reset();
      } else if (value === "MR") {
      } else if (value === "=") {
        calculate();
      } else if (value === ".") {
      } else if (value === "+/-") {
      } else {
        setFormula((prev) => {
          return { ...prev, operator: value };
        });
      }
    } catch (err) {
      setError(() => {
        return { state: true, message: `Err: ${err.message}` };
      });
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
