import React, { useState } from "react";
import CalculatorBody from "../components/CalculatorBody";
import CalculatorHead from "../components/CalculatorHead";

function Home() {
  const [input, setInput] = useState("0");
  const [subInput, setSubInput] = useState("0");

  return (
    <div className="calculator-container">
      <CalculatorHead input={input} subInput={subInput} />
      <CalculatorBody setInput={setInput} setSubInput={setSubInput} />
    </div>
  );
}

export default Home;
