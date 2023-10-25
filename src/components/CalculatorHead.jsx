import React, { useState, useEffect } from "react";
import {
  MAIN_SIZE_LENGTH as mainSizeLength,
  SUB_SIZE_LENGTH as subSizeLength,
} from "../utils/constants";

function CalculatorHead({ input, error, subInput }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (error.state) {
      setContent(error.message);
    } else {
      if (String(input).includes(".")) {
        setContent(String(input));
      } else {
        setContent(Number(input).toLocaleString());
      }
    }
  }, [error, input]);

  return (
    <div className="calculator-head">
      <div className="screen-container">
        {subInput.length < subSizeLength ? (
          <div className="screen screen--sub">{subInput}</div>
        ) : (
          <div className="screen screen--sub screen--small">{subInput}</div>
        )}

        {content.length < mainSizeLength ? (
          <div className="screen screen--main">{content}</div>
        ) : (
          <div className="screen screen--main screen--small">{content}</div>
        )}
      </div>
    </div>
  );
}

export default CalculatorHead;
