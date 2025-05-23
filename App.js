import React, { useState } from "react";

const App = () => {
  const [history, setHistory] = useState([]);
  const [number, setNumber] = useState("");

  const addNumber = () => {
    const num = parseInt(number);
    if (isNaN(num) || num < 1 || num > 9) return;
    const newEntry = {
      number: num,
      size: num >= 5 ? "Big" : "Small",
    };
    setHistory([newEntry, ...history.slice(0, 9)]);
    setNumber("");
  };

  const predictNext = () => {
    const smallCount = history.filter((h) => h.size === "Small").length;
    const bigCount = history.filter((h) => h.size === "Big").length;
    return bigCount > smallCount ? "Small" : "Big";
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>WinGo Big/Small Predictor</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter number (1-9)"
      />
      <button onClick={addNumber}>Add</button>
      <h3>Prediction: {history.length >= 3 ? predictNext() : "Need more data"}</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            Number: {item.number} - {item.size}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
