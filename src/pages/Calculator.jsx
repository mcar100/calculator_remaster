import React, { useEffect, useState } from "react";
import { calculator, resetFormula } from "../utils/calculator";
import CalculatorBody from "../components/CalculatorBody";
import CalculatorHead from "../components/CalculatorHead";
import { resetScreen } from "../utils/layout";

function Calculator() {
  const [input, setInput] = useState("0");
  const [subInput, setSubInput] = useState("");
  const [formula, setFormula] = useState({
    operand1: "0",
    operand2: "",
    operator: "",
  });
  const [memory, setMemory] = useState([]);
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

    if (memory.length > 0) {
      const value = memory.pop();
      setFormula((prev) => {
        return { ...prev, operand1: value, operand2: "" };
      });
    }

    if (formula.operator) {
      setSubInput(formula.operand1 + formula.operator);
    }
  }, [formula]);

  const handleCalculate = () => {
    const result = calculator(formula);
    setInput(result);
    setSubInput(() => {
      return formula.operand1 + formula.operator + formula.operand2 + "=";
    });
    setMemory((prev) => [...prev, result]);
  };

  const handleReset = () => {
    resetFormula(setFormula);
    resetScreen(setInput, setSubInput);
    setError({
      message: "",
      state: false,
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
      />
    </div>
  );
}

export default Calculator;
