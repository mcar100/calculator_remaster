import React, { useEffect } from "react";

const MAX_LENGTH = 11;

function CalculatorHead({ input, error, subInput }) {
  // const inpputHandler = useEffect(() => {
  //   if (input.length > 11) {
  //     input.style.fontSize = 10;
  //   }
  // }, [input]);

  return (
    <div className="calculator-head">
      <div className="screen-container">
        <div className="screen screen--sub">{subInput}</div>
        <div className="screen screen--main">
          {error.state ? error.message : input}
        </div>
      </div>
    </div>
  );
}

export default CalculatorHead;
