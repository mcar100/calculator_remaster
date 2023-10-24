import React, { useEffect, useState } from "react";
import { calculator, resetFormula } from "../utils/calculator";
import {
  saveMemory,
  resetMemory,
  getMemory,
  loadMemory,
} from "../utils/memory";
import CalculatorBody from "../components/CalculatorBody";
import CalculatorHead from "../components/CalculatorHead";

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
    if (!formula.operand2) {
      setInput(formula.operand1);
    } else {
      setInput(formula.operand2);
    }

    if (memory.result) {
      const value = getMemory(memory, setMemory);
      setFormula((prev) => {
        return { ...prev, operand1: value, operand2: "" };
      });
    }

    if (formula.operator) {
      setSubInput(Number(formula.operand1) + formula.operator);
    } else {
      setSubInput("");
    }
  }, [formula]);

  const handleCalculate = () => {
    const result = calculator(formula);
    setInput(result);
    setSubInput(() => {
      return (
        Number(formula.operand1) +
        formula.operator +
        Number(formula.operand2) +
        "="
      );
    });
    saveMemory(memory, setMemory, result);
  };

  const handleReset = () => {
    resetMemory(memory, setMemory);
    resetFormula(setFormula);
    setError({
      message: "",
      state: false,
    });
  };

  const handleloadMemory = () => {
    loadMemory(memory, setMemory);
    setFormula((prev) => {
      return { ...prev, operand1: memory.result };
    });
  };

  return (
    <div className="calculator-container">
      <CalculatorHead input={input} error={error} subInput={subInput} />
      <CalculatorBody
        setFormula={setFormula}
        setError={setError}
        calculate={handleCalculate}
        reset={handleReset}
        load={handleloadMemory}
      />
    </div>
  );
}

export default Calculator;
