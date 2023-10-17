import React from "react";

function CalculatorHead({ input, subInput }) {
  return (
    <div className="calculator-head">
      <div className="screen-container">
        <div className="screen screen--sub">{subInput}</div>
        <div className="screen screen--main">{input}</div>
      </div>
    </div>
  );
}

export default CalculatorHead;
