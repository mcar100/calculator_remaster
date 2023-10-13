import React from "react";
import Button from "./Button";

function CalculatorBody() {
  const buttonList = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "x",
    "/",
    "%",
    "=",
    ".",
    "CE",
    "MR",
    "+/-",
  ];

  return (
    <div className="calculator-body">
      {buttonList.map((btn) => (
        <Button key={`btn-${btn}`} contents={btn} />
      ))}
    </div>
  );
}

export default CalculatorBody;
