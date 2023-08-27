import React, { useState } from "react";
import "./inversion.css";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

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

    if (updatedHistory.length >= 5) {
      updatedHistory.shift(); //cuando llegue a su tope que es 5 lo borre
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
      <div className="investment-form">
        <label>Selecciona el tipo de energía renovable:</label>
        <select value={selectedEnergy} onChange={handleEnergySelect}>
          <option value="">Seleccione una opción</option>
          {renewableEnergyOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label>Ingresa la cantidad a invertir:</label>
        <input
          type="number"
          min="0"
          step="0.01"
          value={investmentAmount}
          onChange={handleAmountChange}
        />
        <button onClick={handleInvest}>Invertir</button>
      </div>
      <div className="investment-history">
        <h3>Historial de Inversiones</h3>
        <ul>
          {investmentHistory.map((investment, index) => (
            <li key={index}>
              {`${investment.timestamp}: ${investment.amount} - ${investment.percentage.toFixed(2)}% (${investment.energyType})`}
            </li>
          ))}
        </ul>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={investmentHistory}>
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="percentage" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Inversion;
