import React from "react";
import CalculatorBody from "../components/CalculatorBody";
import CalculatorHead from "../components/CalculatorHead";

function Home() {
  return (
    <div className="calculator-container">
      <CalculatorHead />
      <CalculatorBody />
    </div>
  );
}

export default Home;
