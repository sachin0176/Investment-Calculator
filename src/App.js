import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import ResultsTable from "./components/ResultsTable/ResultsTable";

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculatorHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];
  if(userInput){
    const P = parseInt(userInput['current_savings']);
    const r = parseInt(userInput['expected_interest']) / 100;
    const n = 1;
    const PMT = parseInt(userInput['yearly_savings']);
    const TC = P + PMT;
    let totalSaving = 0;
    let interest = 0;
    let totalInterest = 0;
    let investedCapital = 0;

    

    for (let i = 1; i <= userInput['duration']; i++) {
      const t = i;
      const FV =
        P * Math.pow(1 + r / n, n * t) +
        PMT * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));

      totalSaving = FV;
      totalInterest = totalSaving - TC;
      interest = totalInterest - interest;
      investedCapital += TC;

      const investResult = {
        year: i,
        totalSaving: totalSaving.toFixed(2),
        interest: interest.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        investedCapital: investedCapital,
      };

      yearlyData.push(investResult);
    }
  }
  const resetHandler = () => {
    setUserInput(null);
    
  };

  return (
    <div>
      <Header />
      <UserInput
        onCalculate={calculatorHandler}
        onResetHandler={resetHandler}
      />
      {userInput ? (
        <ResultsTable resultList={yearlyData} />
      ) : (
        <p style={{ textAlign: "center" }}>No investment calulated yed.</p>
      )}
    </div>
  );
}

export default App;
