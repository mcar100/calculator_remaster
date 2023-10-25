import React, { useEffect, useState } from "react";
import CalculatorBody from "../components/CalculatorBody";
import CalculatorHead from "../components/CalculatorHead";
import { calculate } from "../utils/calculator";
import { resetFormula, setOperandFromMemory } from "../utils/formula";
import {
  checkMainScreenLength,
  setMainScreen,
  setSubScreen,
  setScreenWithResult,
} from "../utils/screen";
import {
  saveMemory,
  resetMemory,
  getMemory,
  loadMemory,
} from "../utils/memory";
import { resetError } from "../utils/error";

function Calculator() {
  const [input, setInput] = useState("0");
  const [subInput, setSubInput] = useState("");
  const [formula, setFormula] = useState({
    operand1: "0",
    operand2: "",
    operator: "",
  });
  const [memory, setMemory] = useState({
    result: "",
    resultArray: [],
  });
  const [error, setError] = useState({
    message: "",
    state: false,
  });

  useEffect(() => {
    setMainScreen(formula, setInput);

    if (memory.result !== "") {
      const memoryValue = getMemory(memory, setMemory);
      setOperandFromMemory(setFormula, memoryValue);
    }

    setSubScreen(formula, setSubInput);
  }, [formula]);

  useEffect(() => {
    checkMainScreenLength(input, setError);
  }, [input]);

  const handleCalculate = () => {
    const result = calculate(formula);
    setScreenWithResult(setInput, setSubInput, formula, result);
    saveMemory(memory, setMemory, result);
  };

  const handleReset = () => {
    resetMemory(memory, setMemory);
    resetFormula(setFormula);
    resetError(setError);
  };

  const handleloadMemory = () => {
    loadMemory(memory, setMemory);
    setOperandFromMemory(setFormula, memory.result);
  };

  return (
    <div className="calculator-container">
      <CalculatorHead input={input} error={error} subInput={subInput} />
      <CalculatorBody
        setFormula={setFormula}
        isError={error.state}
        setError={setError}
        calculate={handleCalculate}
        reset={handleReset}
        load={handleloadMemory}
      />
    </div>
  );
}

export default Calculator;
