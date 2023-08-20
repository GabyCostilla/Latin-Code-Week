import React, { useState } from "react";
import "./inversion.css";

function Inversion() {
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [resultMessage, setResultMessage] = useState("");
  const [investmentHistory, setInvestmentHistory] = useState([]);

  const handleInvest = () => {
    const randomPercentage = Math.random() * 20 - 10; // Valor aleatorio entre -10% y 10%
    const earnedAmount = (investmentAmount * randomPercentage) / 100;

    const investment = {
      amount: investmentAmount,
      percentage: earnedAmount,
      timestamp: new Date().toLocaleString(),
    };

    const updatedHistory = [...investmentHistory, investment];
    setInvestmentHistory(updatedHistory);

    if (earnedAmount >= 0) {
      setResultMessage(`¡Ganaste ${earnedAmount.toFixed(2)}% de tu inversión!`);
    } else {
      setResultMessage(`Perdiste ${Math.abs(earnedAmount).toFixed(2)}% de tu inversión.`);
    }
  };

  const handleAmountChange = (event) => {
    setInvestmentAmount(event.target.value);
  };

  return (
    <div className="investment-container">
      <h2>Inversión</h2>
      <div className="investment-form">
        <label>Ingresa la cantidad a invertir:</label>
        <input
          type="number"
          min="0"
          step="0.01"
          value={investmentAmount}
          onChange={handleAmountChange}
        />
        <button onClick={handleInvest}>Invertir</button>
        <p className="result-message">{resultMessage}</p>
      </div>
      <div className="investment-history">
        <h3>Historial de Inversiones</h3>
        <ul>
          {investmentHistory.map((investment, index) => (
            <li key={index}>
              {`${investment.timestamp}: ${investment.amount} - ${investment.percentage.toFixed(2)}%`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Inversion;
