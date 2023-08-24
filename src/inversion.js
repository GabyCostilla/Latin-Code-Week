import React, { useState } from "react";
import "./inversion.css";

const renewableEnergyOptions = [
  "Energía Solar",
  "Energía Eólica",
  "Energía Hidroeléctrica",
  "Energía Geotérmica",
];

function Inversion() {
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [investmentHistory, setInvestmentHistory] = useState([]);
  const [selectedEnergy, setSelectedEnergy] = useState("");

  const handleInvest = () => {
    const randomPercentage = Math.random() * 20 - 10;
    const earnedAmount = (investmentAmount * randomPercentage) / 100;

    const investment = {
      amount: investmentAmount,
      percentage: earnedAmount,
      energyType: selectedEnergy,
      timestamp: new Date().toLocaleString(),
    };

    const updatedHistory = [...investmentHistory, investment];
    setInvestmentHistory(updatedHistory);

    if (earnedAmount >= 0) {
      alert(`🌞 ¡Ganaste ${earnedAmount.toFixed(2)}% de tu inversión en ${selectedEnergy}! 🌞`);
    } else {
      alert(`☁️ Perdiste ${Math.abs(earnedAmount).toFixed(2)}% de tu inversión en ${selectedEnergy}. ☁️`);
    }

    if (updatedHistory.length >= 5) {
      setInvestmentHistory([]); // Clear history after 5 investments
    }
  };

  const handleAmountChange = (event) => {
    setInvestmentAmount(event.target.value);
  };

  const handleEnergySelect = (event) => {
    setSelectedEnergy(event.target.value);
  };

  return (
    <div className="investment-container">
      <h2>💰 Inversión en Energías Renovables 💰</h2>
      <div className="investment-form">
        <label>🌿 Selecciona el tipo de energía renovable:</label>
        <select value={selectedEnergy} onChange={handleEnergySelect}>
          <option value="">Seleccione una opción</option>
          {renewableEnergyOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label>💲 Ingresa la cantidad a invertir:</label>
        <input
          type="number"
          min="0"
          step="0.01"
          value={investmentAmount}
          onChange={handleAmountChange}
        />
        <button onClick={handleInvest}>🚀 Invertir 🚀</button>
      </div>
      <div className="investment-history">
        <h3>📜 Historial de Inversiones 📜</h3>
        <ul>
          {investmentHistory.map((investment, index) => (
            <li key={index}>
              {`${investment.timestamp}: ${investment.amount} - ${investment.percentage.toFixed(2)}% (${investment.energyType})`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Inversion;
