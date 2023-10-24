import React, { useEffect, useState } from "react";
import {
  BUTTON_LIST as buttonList,
  REGEX_NUM as regexNum,
} from "../utils/constants";
import Button from "./Button";

function CalculatorBody({ setFormula, setError, calculate, reset, load }) {
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
        load();
      } else if (value === "=") {
        calculate();
      } else if (value === ".") {
      } else if (value === "+/-") {
        reverseSign();
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

  const reverseSign = () => {
    setFormula((prev) => {
      const temp = { ...prev };
      if (!temp.operand2) {
        if (temp.operand1 !== "0") {
          temp.operand1 = temp.operand1 * -1;
        }
      } else {
        if (String(temp.operand2) !== "") {
          temp.operand2 = temp.operand2 * -1;
        }
      }
      console.log(temp);
      return temp;
    });
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
